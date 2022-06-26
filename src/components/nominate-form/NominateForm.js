import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const categories = [
  { label: "Best yacht", value: "Best Yacht" },
  { label: "Best Liveaboard", value: "Best liveaboard" },
];
const customValueRenderer = (selected, _options) => {
  return categories.length ? (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {selected.map(({ label }) => (
        <div
          style={{
            padding: 4,
            display: "flex",
            marginTop: 2,
            marginBottom: 2,
            flexDirection: "row",
            fontWeight: 400,
            display: "flex",
            marginRight: 4,
            color: "#23204A",
            marginLeft: 0,
          }}
        >
          {label},
        </div>
      ))}
    </div>
  ) : (
    "No Items Selected"
  );
};

const selectedCategoriesRender = (selected) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {selected.map(({ label }) => (
        <div className="">
          <div
            style={{
              padding: 4,
              display: "flex",
              paddingRight: 10,
              paddingLeft: 10,
              marginTop: 2,
              marginBottom: 2,
              flexDirection: "row",
              fontWeight: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FBE7A7",
              marginRight: 4,
              color: "#23204A",
              marginLeft: 0,
            }}
          >
            <span>{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

function NominateForm() {
  const [selected, setSelected] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(false);
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
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-y-2  p-2.5">
          <h1 className="text font-medium text-secondary">
            Please Select one or more categories
          </h1>
          <div className="text-sm">
            <MultiSelect
              options={categories}
              disabled={false}
              value={selected}
              className="bg-parrot"
              onChange={setSelected}
              labelledBy={"Select"}
              valueRenderer={customValueRenderer}
            />
          </div>
          <span className="text-xs md:text-sm lg:text-base text-secondary ">
            Above categories are eligible for NBAM members, and they mayb submit
            their / crew who have performed for Business and is currently
            employed in the business. Should be currently working on a
            liveaboard / Yacht and not less 3 years working on the same vessel.
            Legal foreign employees can be nominated.
          </span>

          {/* {selectedCategoriesRender(selected)} */}
        </div>
        {/* Applicant Details */}
        <div className="grid grid-cols-1 gap-y-2 ">
          <FormikProvider value={formik}>
            <Form>
              {/* Applicant details */}
              <div className="grid grid-cols-1 gap-3  p-2.5 pb-4 justify-start mb-5 text-left w-full flex-col">
                <h1 className="text font-medium capitalize text-secondary">
                  Applicant details
                </h1>
                <div className="grid grid-cols-1 text-sm gap-y-2 w-full">
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Business Name
                    </label>
                    <Field
                      required
                      name="businessName"
                      type="text"
                      className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                    />
                    <ErrorMessage
                      name="businessName"
                      component="div"
                      className="text-red text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Boat Name
                    </label>
                    <Field
                      required
                      name="boatName"
                      type="text"
                      className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                    />
                    <ErrorMessage
                      name="boatName"
                      component="div"
                      className="text-red text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Business Address
                    </label>
                    {/* Address */}
                    <Field
                      required
                      name="boatName"
                      placeholder="Address"
                      type="text"
                      className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                    />
                    <ErrorMessage
                      name="boatName"
                      component="div"
                      className="text-red text-sm"
                    />
                    {/* Street Atoll / Island */}
                    <div className="grid grid-cols-2 gap-1">
                      <Field
                        required
                        name="boatName"
                        placeholder="Street"
                        type="text"
                        className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                      />
                      <ErrorMessage
                        name="boatName"
                        component="div"
                        className="text-red text-sm"
                      />
                      <Field
                        required
                        name="boatName"
                        placeholder="Atoll/Island"
                        type="text"
                        className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                      />
                      <ErrorMessage
                        name="boatName"
                        component="div"
                        className="text-red text-sm"
                      />
                      <Field
                        required
                        name="boatName"
                        placeholder="Telephone"
                        type="text"
                        className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                      />
                      <ErrorMessage
                        name="boatName"
                        component="div"
                        className="text-red text-sm"
                      />
                      <Field
                        required
                        name="boatName"
                        placeholder="Email"
                        type="text"
                        className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                      />
                      <ErrorMessage
                        name="boatName"
                        component="div"
                        className="text-red text-sm"
                      />
                      <Field
                        required
                        name="boatName"
                        placeholder="URL"
                        type="text"
                        className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                      />
                      <ErrorMessage
                        name="boatName"
                        component="div"
                        className="text-red text-sm"
                      />
                      <Field
                        required
                        name="boatName"
                        placeholder="TIN Number"
                        type="text"
                        className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                      />
                      <ErrorMessage
                        name="boatName"
                        component="div"
                        className="text-red text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Faces of boating */}
              <div className="grid grid-cols-1 gap-3  p-2.5 pb-4 justify-start mb-5 text-left w-full flex-col">
                <h1 className="text font-medium capitalize text-secondary">
                  Faces of Boating
                </h1>
                <div className="grid grid-cols-1 text-sm gap-y-2 w-full">
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Captain
                    </label>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="flex flex-col col-span-4">
                        <Field
                          required
                          name="businessName"
                          type="text"
                          placeholder="Name"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <Field
                          required
                          name="businessName"
                          placeholder="ID / PP Number"
                          type="text"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Chef / Deckhand
                    </label>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="flex flex-col col-span-4">
                        <Field
                          required
                          name="businessName"
                          type="text"
                          placeholder="Name"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <Field
                          required
                          name="businessName"
                          placeholder="ID / PP Number"
                          type="text"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Roomboy / Deckhand
                    </label>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="flex flex-col col-span-4">
                        <Field
                          required
                          name="businessName"
                          type="text"
                          placeholder="Name"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <Field
                          required
                          name="businessName"
                          placeholder="ID / PP Number"
                          type="text"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Crew Member
                    </label>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="flex flex-col col-span-4">
                        <Field
                          required
                          name="businessName"
                          type="text"
                          placeholder="Name"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <Field
                          required
                          name="businessName"
                          placeholder="ID / PP Number"
                          type="text"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Waiter / Deckhand
                    </label>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="flex flex-col col-span-4">
                        <Field
                          required
                          name="businessName"
                          type="text"
                          placeholder="Name"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <Field
                          required
                          name="businessName"
                          placeholder="ID / PP Number"
                          type="text"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Cruise Manager
                    </label>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="flex flex-col col-span-4">
                        <Field
                          required
                          name="businessName"
                          type="text"
                          placeholder="Name"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <Field
                          required
                          name="businessName"
                          placeholder="ID / PP Number"
                          type="text"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Engineer
                    </label>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="flex flex-col col-span-4">
                        <Field
                          required
                          name="businessName"
                          type="text"
                          placeholder="Name"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <Field
                          required
                          name="businessName"
                          placeholder="ID / PP Number"
                          type="text"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-secondary font-medium  capitalize"
                      htmlFor="companyName"
                    >
                      Sales / Reservation / Operations Staff
                    </label>
                    <div className="grid grid-cols-6 gap-1">
                      <div className="flex flex-col col-span-4">
                        <Field
                          required
                          name="businessName"
                          type="text"
                          placeholder="Name"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                      <div className="flex flex-col col-span-2">
                        <Field
                          required
                          name="businessName"
                          placeholder="ID / PP Number"
                          type="text"
                          className="form-control focus:border-none p-1.5 md:p-2 rounded-md focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                        />
                        <ErrorMessage
                          name="businessName"
                          component="div"
                          className="text-red text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm */}
              <div className="grid grid-cols-1 gap-3  p-2.5 pb-4 justify-start mb-5 text-left w-full flex-col">
                <div className="form-check flex  items-center">
                  <div class="relative">
                    <input
                      type="checkbox"
                      id="checkboxLabelTwo"
                      class="sr-only"
                    />
                    <div
                      class="
         box
         flex
         items-center
         justify-center
         w-5
         h-5
         rounded
         border
         mr-4
         "
                    >
                      <span class="opacity-0">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="#3056D3"
                            stroke="#3056D3"
                            stroke-width="0.4"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <label
                    className="form-check-label text-sm text-secondary"
                    for="flexCheckDefault"
                  >
                    We confirm that we agree to the guidelines, terms and
                    conditions to participate the NBAM boating awards
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                <button
                  type="submit"
                  className="px-8 p-2 bg-warning text-secondary uppercase text-sm lg:text-base font-medium hover:shadow-lg hover:brightness-105 "
                >
                  Submit
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}

export default NominateForm;
