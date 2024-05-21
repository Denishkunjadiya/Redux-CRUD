import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Validation } from "../../Schema/validation";
import { addStudent } from "../redux/studentSlice";
import { v4 as uuidv4 } from "uuid";
const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { errors, values, handleBlur, handleChange, handleSubmit, handleReset, touched, } = useFormik({
    initialValues: {
      name: "",
      std: "",
      bod: "",
      school: "",
    },
    validationSchema: Validation,
    onSubmit: (values) => {

      dispatch(
        addStudent({
          id: uuidv4(),
          name: values.name,
          bod: values.bod,
          std: values.std,
          school: values.school,
        })
      );
      navigate("/");
    },
  });

  console.log(errors);
  return (
    <div className="px-96">
      <div className="mb-5">
        <h1 className="font-bold text-lg ">Add Student</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="block">
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
                className="bg-white border border-gray-400 w-full rounded px-2 py-1"
              />
              {errors.name && touched.name ? (
                <div className="text-red-500">{errors.name}</div>
              ) : null}
            </div>
            <div className="block">
              <label htmlFor="">Birth of Date</label>
              <br />
              <input
                type="date"
                value={values.bod}
                name="bod"
                onChange={handleChange}
                className="bg-white border border-gray-400 w-full rounded px-2 py-1"
              />
              {errors.bod && touched.bod ? (
                <div className="text-red-500">{errors.bod}</div>
              ) : null}
            </div>
          </div>
          <div className="space-y-4">
            <div className="block">
              <label htmlFor="">Class</label>
              <br />
              <select
                className="form-select appearance-none block w-full px-2 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300  rounded transition ease-in-out m-0"
                name="std"
                value={values.std}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option selected> select class</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              {errors.std && touched.std ? (
                <div className="text-red-500">{errors.std}</div>
              ) : null}
            </div>
            <div className="block">
              <label htmlFor="">School Name</label>
              <br />
              <input
                type="text"
                value={values.school}
                onChange={handleChange}
                name="school"
                className="bg-white border border-gray-400 w-full rounded py-1 px-2"
              />
              {errors.school && touched.school ? (
                <div className="text-red-500">{errors.school}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="mt-5 space-x-2  ">
          <button
            type="submit"
            className="bg-blue-800 text-white px-3 py-1 rounded"
          >
            Save
          </button>
          <Link to="/" className="bg-red-600 text-white px-3 py-1.5 rounded">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Add;
