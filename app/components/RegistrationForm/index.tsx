"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      dateOfBirth: "",
      program: "",
      education: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      dateOfBirth: Yup.date().required("Required"),
      program: Yup.string().required("Required"),
      education: Yup.string().required("Required"),
      phoneNumber: Yup.string()
        .required("Required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, "Must be at least 10 characters")
        .max(10, "Must not exceed 10 characters"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      // Simulate a successful registration
      console.log("Registration successful", values);
      setIsSubmitted(true);
    },
  });

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        <span className="highlight">Bon Appétit</span> Cuisine & Patisserie
        School Registration
      </h2>
      {isSubmitted ? (
        <div className="text-green-500">Registration successful!</div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 p-2 block w-full border rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              className="mt-1 p-2 block w-full border rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
              <div className="text-red-500 text-sm">
                {formik.errors.dateOfBirth}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="program"
              className="block text-sm font-medium text-gray-700"
            >
              Program
            </label>
            <select
              id="program"
              name="program"
              className="mt-1 p-2 block w-full border rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.program}
            >
              <option value="" label="Select program" />
              <option value="Cuisine" label="Cuisine" />
              <option value="Patisserie" label="Patisserie" />
              <option value="Barista" label="Barista" />
            </select>
            {formik.touched.program && formik.errors.program ? (
              <div className="text-red-500 text-sm">
                {formik.errors.program}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="education"
              className="block text-sm font-medium text-gray-700"
            >
              Latest Education
            </label>
            <input
              id="education"
              name="education"
              type="text"
              className="mt-1 p-2 block w-full border rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education}
            />
            {formik.touched.education && formik.errors.education ? (
              <div className="text-red-500 text-sm">
                {formik.errors.education}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className="mt-1 p-2 block w-full border rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="mt-1 p-2 block w-full border rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-500 text-sm">
                {formik.errors.address}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;