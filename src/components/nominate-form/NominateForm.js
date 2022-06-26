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
    <div>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-y-2 bg-lightgray p-2.5">
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
          <span className="text-xs text-primary">
            Above categories are eligible for NBAM members, and they mayb submit their / crew who have performed for Business
            and is currently employed in the business. Should be currently working on a liveaboard / Yacht and not less 3 years working on the same vessel.
            Legal foreign employees can be nominated.
          </span>

          {/* {selectedCategoriesRender(selected)} */}
        </div>
        {/* Applicant Details */}
        <div className="grid grid-cols-1 gap-y-2 ">
          <FormikProvider value={formik}>
            <Form>
              {/* Applicant details */}
              <div className="grid grid-cols-1 gap-3 bg-lightgray p-2.5 pb-4 justify-start mb-5 text-left w-full flex-col">
                <h1 className="text font-medium capitalize text-secondary">
                  Applicant details
                </h1>
                <div className="grid grid-cols-1 text-sm gap-y-2 w-full">
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-primary  capitalize"
                      htmlFor="companyName"
                    >
                      Business Name
                    </label>
                    <Field
                      required
                      name="businessName"
                      type="text"
                      className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                    />
                    <ErrorMessage
                      name="businessName"
                      component="div"
                      className="text-red text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-primary  capitalize"
                      htmlFor="companyName"
                    >
                      Boat Name
                    </label>
                    <Field
                      required
                      name="boatName"
                      type="text"
                      className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
                    />
                    <ErrorMessage
                      name="boatName"
                      component="div"
                      className="text-red text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-primary  capitalize"
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
                      className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                        className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                        className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                        className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                        className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                        className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                        className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
              <div className="grid grid-cols-1 gap-3 bg-lightgray p-2.5 pb-4 justify-start mb-5 text-left w-full flex-col">
                <h1 className="text font-medium capitalize text-secondary">
                  Faces of Boating
                </h1>
                <div className="grid grid-cols-1 text-sm gap-y-2 w-full">
                  <div className="grid grid-cols-1 gap-y-1 w-full">
                    <label
                      className="text-sm text-primary  capitalize"
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                      className="text-sm text-primary  capitalize"
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                      className="text-sm text-primary  capitalize"
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                      className="text-sm text-primary  capitalize"
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                      className="text-sm text-primary  capitalize"
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                      className="text-sm text-primary  capitalize"
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                      className="text-sm text-primary  capitalize"
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                      className="text-sm text-primary  capitalize"
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                          className="form-control focus:border-none p-1.5 focus:ring-none focus:outline-primary  border-borderGray lg:border-white "
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
                  <input className="form-check-input appearance-none h-8 w-8 border border-gray rounded-sm bg-white checked:bg-primary checked:border-primaryLight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label text-sm text-secondary" for="flexCheckDefault">
                    We confirm that we agree to the guidelines, terms and conditions to participate the NBAM boating awards
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
