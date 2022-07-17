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

const categories = [
  {
    name: "Best Liveaboard or Yacht Builder (Building Company)",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Yacht",
    nominees: [
      {
        name: "Aliaz Investment",
        href: "#",
        image: "#",
      },
      {
        name: "Alias Investment",
        href: "#",
        image: "#",
      },
    ],
  },
  {
    name: "Best Built Liveaboard or Yacht ( Boat )",
    nominees: [
      {
        name: "Alia Investment",
        href: "#",
        image: "#",
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const nominees = [1, 2, 3, 2, 4, 4, 4, 3, 3, 6, 7, 4, 2, 3, 2, 3, 2, 3];

function Index() {
  let [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [OTPRequested, setOTPRequested] = useState(false);
  const [voted, setVoted] = useState(false);
  const [votedNom, setVotedNom] = useState("");

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    companyName: "",
    phone: "",
    email: "",
    focalPoint: "",
    details: "",
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required"),
    phone: Yup.string()
      .min(7, "Phone number should be exaclty ")
      .max(7)
      .matches(phoneRegExp, "Phone number is not valid"),

    focalPoint: Yup.string().required("Focal point is required"),
    email: Yup.string().email().required("Email is required"),
    details: Yup.string()
      .min(1)
      .required(" Please add some details for context"),
  });

  const inputHandler = (event, editor) => {
    formik.setFieldValue("details", editor.getData());
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    console.log(values);

    //save your form data
    //await signatoryInfoCreateAction(fd)
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function categorySelect(cat) {
    setShowMenu(false);
    setSelectedCategory(cat);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [voted]);

  return (
    <div className=" w-full flex items-center justify-center flex-col ">
      <div
        className="grid grid-cols-2 gap-10 max-w-6xl  mt-24"
        data-aos="fade-up"
      >
        {/* Category Image */}

        <div className="h-[250px] border-1 border-primary rounded-2xl bg-cover bg-top  flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold p-10 text-secondary leading-tight">
            Best Yacht Liveaboard
          </h1>
        </div>

        <div className="flex justify-center items-start flex-col">
          <Link to="/nominees">
            <Button title="Go Back" />
          </Link>
          <div
            data-aos="fade-up"
            className={`justify-center flex-col items-center flex`}
          >
            <p className="text-base max-w-2xl 2xl:text-base font-medium text-gray my-4">
              This award is given to the most prestigios yahcts in the marina
              hereby thergore we find different word to descrive this awaerd as
              much as we can.
            </p>
          </div>
        </div>
      </div>
      {voted && (
        <>
          {/* Show who the person voted */}
          <div
            data-aos="fade-up"
            className="mt-10 max-w-6xl p-10 w-full border-t-2 border-t-primary grid grid-cols-2 gap-10"
          >
            <div>
              <div class="overflow-hidden w-[60vh]   flex items-center justify-center  lg:col-span-5  bg-white">
                <img
                  src={
                    "https://media.istockphoto.com/photos/luxury-private-motor-yacht-sailing-at-sea-picture-id925066016?k=20&m=925066016&s=612x612&w=0&h=B9A6jxaiqYKu_H8xpqppJHvLVhWOH0_ACXfTdQ-piLw="
                  }
                  className="bg-purple-200 rounded-lg  hover:scale-110 transition-all duration-500"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-secondary text-2xl font-light mb-1">
                Thank you for voting{" "}
              </h1>
              <h4 className="font-bold text-5xl text-primary mb-5 leading-tight">Adaaran Yacht Pvt Ltd Maldives</h4>
              <div onClick={() => setVoted(false)}>
                 <Button title="Change my vote" />
              </div>

            </div>
          </div>
        </>
      )}

      <div className="bg-lightPrimary w-full  flex p-10 items-center justify-center">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 max-w-6xl md:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <div
              className={`flex rounded-xl bg-white   ${
                votedNom === cat ? "dropshadow-md" : "rounded-xl"
              } `}
            >
              <div className=" w-full   gap-4">
                <div class="overflow-hidden w-full   flex items-center justify-center  lg:col-span-5  bg-white">
                  <img
                    src={
                      "https://media.istockphoto.com/photos/luxury-private-motor-yacht-sailing-at-sea-picture-id925066016?k=20&m=925066016&s=612x612&w=0&h=B9A6jxaiqYKu_H8xpqppJHvLVhWOH0_ACXfTdQ-piLw="
                    }
                    className="bg-purple-200 rounded-t-lg hover:rounded-t-lg  hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>
                <div className="flex p-5 items-center justify-center flex-col w-full">
                  <h1 className=" text-lg lg:text-xl font-medium text-secondary">
                    The Hawks Pvt Ltd
                  </h1>
                  <div className="grid text-xs lg:text-sm grid-cols-12 gap-y-2 lg:gap-y-3 mt-4 overflow-hidden">
                    <div className="grid grid-cols-1 col-span-3  text-primary font-medium">
                      <h4>Address:</h4>
                    </div>
                    <div className="grid grid-cols-1 col-span-9">
                      <h4>Uthurumaafaru Island, Raa Atoll, Maldives</h4>
                    </div>
                    <div className="grid grid-cols-1 col-span-3  text-primary font-medium">
                      <h4>Email:</h4>
                    </div>
                    <div className="grid grid-cols-1 col-span-9">
                      <h4>sales@youandmemaldives.com</h4>
                    </div>
                    <div className="grid grid-cols-1 col-span-3  text-primary font-medium">
                      <h4>Phone:</h4>
                    </div>
                    <div className="grid grid-cols-1 col-span-9">
                      <h4>+960 6581000:</h4>
                    </div>
                  </div>
                  {!voted && (
                    <>
                      <div className="w-full mt-8" onClick={openModal}>
                        <button
                          onClick={() => setVotedNom(cat)}
                          className="w-full text-white uppercase hover:bg-gradient-to-b border-2 border-secondary via-secondary from-lightSecondary to-secondary text-xs md:text-sm  font-medium bg-secondary px-2 p-2 rounded-lg hover:brightness-110 "
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
        {/* Modal */}
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
              <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                      className="text-lg md:text-2xl text-center text-secondary font-semibold leading-6 text-gray-900"
                    >
                      You are required to sign in to vote
                    </Dialog.Title>
                    {!OTPRequested && (
                      <>
                        <div className="mt-2">
                          <p className="text-gray text-sm md:text-base">
                            Please enter your phone number
                          </p>
                        </div>
                        <div className="my-4 mt-4">
                          <FormikProvider value={formik}>
                            <Form className="flex flex-col items-center justify-center">
                              <div className="grid grid-cols-12 items-center w-4/5">
                                <div className=" col-span-3 p-2 bg-lightgray rounded-l-lg border-r border-r-lightgray lg:border-r-borderGray border border-borderGray shadow-sm flex items-center justify-center px-4 ">
                                  <p className="lg:text-base text-base text-gray">
                                    +960
                                  </p>
                                </div>
                                <Field
                                  name="phone"
                                  type="text"
                                  className="col-span-9 p-2  tracking-wider form-control  focus:ring-none focus:outline-none rounded-r-lg border-borderGray border shadow-sm"
                                />
                              </div>

                              <ErrorMessage
                                name="phone"
                                component="div"
                                className="text-primary text-sm mt-6"
                              />
                            </Form>
                          </FormikProvider>
                        </div>
                        <div
                          onClick={() => setOTPRequested(true)}
                          className="mt-2"
                        >
                          <Button title="Request OTP" />
                        </div>
                      </>
                    )}
                    {OTPRequested && (
                      <>
                        <div className="mt-2 flex items-center justify-center">
                          <p className="text-gray text-center text-xs md:text-sm w-4/5">
                            A 4-digit OTP has been sent to +960****529. Please
                            Enter the OTP.
                          </p>
                        </div>

                        <div className="my-4 mt-2">
                          <FormikProvider value={formik}>
                            <Form className="flex flex-col items-center justify-center">
                              <Field
                                name="phone"
                                type="text"
                                className="col-span-9 w-2/4 p-2 text-2xl text-center  tracking-wider form-control focus:border-primary focus:ring-lime  border-borderGray border shadow-sm"
                              />
                            </Form>
                          </FormikProvider>
                        </div>
                        <div className="mt-1 flex items-center justify-center text-primary text-center text-xs md:text-sm w-4/5">
                          <p className="">I did not recieve an SMS</p>
                        </div>
                        <div onClick={() => setVoted(true)} className="mt-4">
                          <Button title="Confirm" />
                        </div>
                      </>
                    )}
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
