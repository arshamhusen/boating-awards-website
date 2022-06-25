import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { XIcon } from "@heroicons/react/solid";
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
            <XIcon className="h-5 w-5 text-primary mr-2" />
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
                      className="text-sm text-gray capitalize"
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
                      className="text-sm text-gray capitalize"
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
                      className="text-sm text-gray capitalize"
                      htmlFor="companyName"
                    >
                      Business Address
                    </label>
                    <div className="grid grid-cols-1 gap-y-2">
                      <div className="w-full">
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
                      </div>
                      <div>
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
                      </div>
                    </div>
                  </div>
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
