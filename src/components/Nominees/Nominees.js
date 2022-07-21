import React, { useState, useEffect } from "react";
import "tw-elements";
import Heading from "../../ui/heading/Heading";
import Categories from "../Categories/Categories";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "../../ui/button/Button";
import "tw-elements";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useParams } from "react-router-dom";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const nominees = [1, 2, 3, 2, 4, 4, 4, 3, 3, 6, 7, 4, 2, 3, 2, 3, 2, 3];

function Index() {
  let { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);
  let [confirmModalOpen, setConfirmModalOpen] = useState(false);
  let [isDNomineeOpen, setIsDNomineeOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [OTPRequested, setOTPRequested] = useState(false);
  const [OTPRequestedAgain, setOTPRequestedAgain] = useState(false);
  const [otp, setOtp] = useState("");
  const [voted, setVoted] = useState(false);
  const [votedNom, setVotedNom] = useState("");
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNominee, setSelectedNominee] = useState();
  const [signedIn, setSignedIn] = useState(false);
  const [phone, setPhone] = useState();

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/website/nominees/${id}`, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setPageData(res.data);
        setVoted(res.data.voted);
        setSignedIn(res.data.loggedIn);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .min(7, "Phone number should be exaclty ")
      .max(7)
      .matches(phoneRegExp, "Phone number is not valid"),
  });

  // Send OTP
  function sendOTP(phone) {
    const data = {
      phone: phone,
    };

    Axios.post(`${process.env.REACT_APP_API_URL}/website/send-otp`, data, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log(res.data + "hello");
        setOTPRequested(true);
      } else {
        console.log(res.data);
      }
    });
  }

  function OTPInsertHandler() {
    const data = {
      phone: phone,
      otp: otp,
    };

    Axios.post(`${process.env.REACT_APP_API_URL}/website/login`, data, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
      } else {
        console.log(res.data);
      }
    });
  }

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    console.log("hit");
    setPhone(values.phone);
    sendOTP(values.phone);
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  function closeModal() {
    setIsOpen(false);
    setIsDNomineeOpen(false);
    setConfirmModalOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openConfirmModal(nom) {
    setSelectedNominee(nom);
    setConfirmModalOpen(true);
  }

  async function categorySelect(cat) {
    setShowMenu(false);
    setSelectedCategory(cat);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [voted]);

  function handleModal(nom) {
    setIsDNomineeOpen(true);
    setSelectedNominee(nom);
  }

  return (
    <div className=" w-full   flex items-center justify-center flex-col ">
      <div
        className="grid grid-cols-1 min-h-[30vh] lg:grid-cols-12 gap-0 lg:gap-10 max-w-5xl  mt-24"
        data-aos="fade-up"
      >
        {/* Category Image */}

        <div className=" border-1 py-10 col-span-7 border-primary rounded-2xl bg-cover bg-top  flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold px-10 py-5 md:py-10 text-secondary leading-tight">
            {pageData.category_name}
          </h1>
        </div>

        <div className="flex col-span-5 mx-10 lg:mx-0 justify-center items-start flex-col">
          <Link to="/nominees">
            <Button title="Go Back" />
          </Link>
          <div
            data-aos="fade-up"
            className={`justify-center flex-col items-center flex text-start`}
          >
            <p className="text-base max-w-2xl 2xl:text-base font-medium text-gray my-4">
              {pageData.description}
            </p>
          </div>
        </div>
      </div>
      {voted && (
        <>
          {/* Show who the person voted */}
          <div
            data-aos="fade-up"
            className="mt-10 max-w-5xl p-10 w-full border-t-2 border-t-primary grid grid-cols-1 md:grid-cols-1 gap-10"
          >
            <div>
              <div class="overflow-hidden w-full   flex items-center justify-center  lg:col-span-5  bg-white">
                {selectedNominee && (
                  <img
                    src={selectedNominee.imageURI}
                    className="bg-purple-200 rounded-lg  hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-secondary text-xl lg:text-2xl font-light mb-1">
                Thank you for voting{" "}
              </h1>
              <h4 className="font-bold text-3xl lg:text-4xl text-primary mb-5 leading-tight">
                {selectedNominee.name}
              </h4>
            </div>
          </div>
        </>
      )}

      <div className="bg-lightPrimary w-full  flex p-10 items-center justify-center">
        {loading && (
          <div className="flex justify-center items-center w-full h-[60vh]">
            <div className="flex justify-center items-center" role="status">
              <svg
                aria-hidden="true"
                class="mr-2 w-20 h-20 text-lightPrimary animate-spin dark:text-gray-600 fill-primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {!loading && (
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-6xl md:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {pageData.data.map((nom) => (
              <div
                className={`flex rounded-2xl bg-white min-w-[300px]   ${
                  votedNom === nom ? "dropshadow-md rounded-2xl" : "rounded-2xl"
                } `}
              >
                <div className=" w-full   gap-4">
                  <div class="overflow-hidden w-full rounded-t-2xl    flex items-center justify-center  lg:col-span-5  bg-white">
                    {pageData.people && nom.imageURI && (
                      <img
                        src={nom.imageURI}
                        className="bg-purple-200 w-full h-72 rounded-t-2xl  hover:scale-110 transition-all duration-500"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="flex p-5 items-center justify-center flex-col w-full">
                    <h1 className=" text-lg lg:text-xl font-medium text-secondary">
                      {pageData.people && <>{nom.name}</>}
                    </h1>
                    <h5 className="my-2 text-sm">
                      {pageData.people && <>{nom.nominee.boat_name}</>}
                    </h5>
                    <button
                      onClick={() => handleModal(nom)}
                      className="rounded-full border border-primary p-1.5 px-4 text-xs text-primary hover:bg-lightPrimary"
                    >
                      View More
                    </button>

                    {!voted && (
                      <>
                        <div
                          className="w-full mt-4"
                          onClick={() =>
                            signedIn ? openConfirmModal(nom) : setIsOpen(true)
                          }
                        >
                          <button
                            onClick={() => setVotedNom(nom)}
                            className="w-full text-white uppercase hover:bg-gradient-to-b border-2 border-secondary via-secondary from-secondary to-secondary text-xs md:text-sm  font-medium bg-secondary px-2 p-1.5 rounded-full hover:brightness-110 "
                          >
                            Vote now
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sign up Modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md bg-cover bg-right transform overflow-hidden rounded-2xl bg-white p-6 text-left flex justify-center items-center flex-col align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h1"
                      className="text-lg md:text-xl text-center text-secondary font-semibold leading-6 text-gray-900"
                    >
                      You are required to sign in to vote
                    </Dialog.Title>
                    {!OTPRequested && (
                      <>
                        <div className="mt-2">
                          <p className="text-primary text-xs md:text-sm">
                            Please enter your phone number
                          </p>
                        </div>
                        <div className="my-4 mt-4 w-full">
                          <FormikProvider value={formik}>
                            <div>
                              <Form className="flex justify-center items-center flex-col">
                                <div className="flex items-center justify-center text-left w-full">
                                  <div className="flex items-center justify-center flex-col gap-y-2 w-3/4 text-center">
                                    <div className="grid grid-cols-12 items-center w-4/5">
                                      <div className=" col-span-4 p-2 bg-lightgray rounded-l-lg border-r border-r-lightgray lg:border-r-borderGray border border-borderGray h-full  shadow-sm flex items-center justify-center px-4 ">
                                        <p className="lg:text-base text-base text-gray">
                                          +960
                                        </p>
                                      </div>
                                      <Field
                                        name="phone"
                                        type="text"
                                        className="col-span-8 p-2 focus:border-none focus:outline-none  text-center  tracking-wider form-control focus:border-primary focus:ring-lime rounded-r-lg border-borderGray border shadow-sm"
                                      />
                                    </div>
                                    <ErrorMessage
                                      name="phone"
                                      component="div"
                                      className="text-primary text-xs"
                                    />
                                  </div>
                                </div>

                                <div className="mt-4 w-1/2">
                                  <button
                                    type="submit"
                                    className="w-full rounded-full text-white uppercase hover:bg-gradient-to-b border-2 border-secondary via-secondary from-secondary to-secondary text-xs font-medium bg-secondary px-4 p-1.5 hover:brightness-110 "
                                  >
                                    Submit
                                  </button>
                                </div>
                              </Form>
                            </div>
                          </FormikProvider>
                        </div>
                      </>
                    )}
                    {OTPRequested && phone && (
                      <>
                        <div className="mt-2 flex items-center justify-center">
                          <p className="text-gray text-center text-xs md:text-sm w-4/5">
                            A 6-digit OTP has been sent to {phone} Please Enter
                            the OTP.
                          </p>
                        </div>
                        <input
                          onChange={(e) => setOtp(e.target.value)}
                          className="p-2 mt-3 px-4 text-xl border w-1/3 text-center border-primary rounded-md"
                        ></input>

                        <div className=" mt-2"></div>
                        <a
                          onClick={() => sendOTP(phone)}
                          className="mt-1 cursor-pointer flex items-center justify-center text-primary text-center text-xs md:text-sm w-4/5"
                        >
                          <p className="">I did not recieve an SMS</p>
                        </a>

                        <div
                          onClick={() => OTPInsertHandler()}
                          className="mt-4"
                        >
                          <button
                            type="button"
                            className="w-full text-white uppercase hover:bg-gradient-to-b border-2 border-secondary via-secondary from-secondary to-secondary text-xs md:text-sm  font-medium bg-secondary px-4 p-1.5 rounded-lg hover:brightness-110 "
                          >
                            Confirm
                          </button>
                        </div>
                      </>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Descriptive nominee modal */}
        <Transition appear show={isDNomineeOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full  max-w-lg max-h-[1200px] overflow-scroll bg-cover bg-right transform rounded-2xl bg-white p-6 text-left flex justify-center items-center flex-col align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h1"
                      className="text-lg md:text-xl grid grid-cols-1 gap-y-4  text-center text-secondary font-semibold leading-6 text-gray-900"
                    >
                      {selectedNominee && (
                        <>
                          {/* Boat name or persons name */}
                          <h1>
                            <>
                              {pageData.people && <>{selectedNominee.name}</>}
                            </>
                          </h1>
                          {/* Business Name */}
                          <h3 className="text-sm text-primary font-light">
                            {" "}
                            <>
                              {pageData.people && (
                                <>{selectedNominee.nominee.boat_name}</>
                              )}
                            </>
                          </h3>

                          {/* Description */}
                          <p className="text-sm font-light max-h-[40vh] overflow-y-scroll">
                            {selectedNominee.resume}
                          </p>
                        </>
                      )}
                    </Dialog.Title>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        {/* Confirm Vote Modal */}
        <Transition appear show={confirmModalOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full  max-w-lg max-h-[1200px] overflow-scroll bg-cover bg-right transform rounded-2xl bg-white p-6 text-left flex justify-center items-center flex-col align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h1"
                      className="text-lg md:text-xl grid grid-cols-1 gap-y-4  text-center text-secondary font-semibold leading-6 text-gray-900"
                    >
                      <h1 className="text">Voting Confirmation</h1>
                      {selectedNominee && (
                        <p className="text-sm font-normal">
                          {pageData.people && (
                            <>
                              Are you sure you want to vote for{" "}
                              {selectedNominee.name} as the{" "}
                              {pageData.category_name}?{" "}
                            </>
                          )}
                        </p>
                      )}
                      <p className="text-xs font-normal text-primary">
                        You will not be able to change the vote casted
                        afterwards
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 text-sm font-medium">
                        <button
                          onClick={() => closeModal()}
                          className="p-1.5 rounded-full w-full px-4 border border-primary text-primary hover:bg-lightPrimary"
                        >
                          Cancel
                        </button>
                        <button className="p-1.5 rounded-full w-full px-4 bg-secondary text-white">
                          Confirm
                        </button>
                      </div>
                    </Dialog.Title>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}

export default Index;
