import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Validation } from "../../Schema/validation";
import { editStudent } from "../redux/studentSlice";

const Edit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const student = useSelector((state) => state.students);
  const editStudents = student?.find((item) => item.id === Number(params?.id));
  const { name, std, bod, school } = editStudents;

  const [value, setValue] = useState({
    name,
    bod,
    school,
    std,
  });

  const editHandle = () => {
    setValue({ name: "", std: "", bod: "", school: "" });
    dispatch(
      editStudent({
        id: params.id,
        name: value.name,
        bod: value.bod,
        std: value.std,
        school: value.school,
      })
    );
    navigate("/");
  };

  return (
    <div className="sm:px-32 lg:px-40 px-1">
      <div className="mb-5">
        <h1 className="font-bold text-lg ">Edit Student</h1>
      </div>
      <form onSubmit={editHandle}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="block">
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                value={value.name}
                name="name"
                onChange={(e) => setValue({ ...value, name: e.target.value })}
                className="bg-white border border-gray-400 w-full rounded px-2 py-1"
              />
            </div>
            <div className="block">
              <label htmlFor="">Birth of Date</label>
              <br />
              <input
                type="date"
                value={value.bod}
                name="bod"
                onChange={(e) => setValue({ ...value, bod: e.target.value })}
                className="bg-white border border-gray-400 w-full rounded px-2 py-1"
              />
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
                value={value.std}
                onChange={(e) => setValue({ ...value, std: e.target.value })}
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
            </div>
            <div className="block">
              <label htmlFor="">School Name</label>
              <br />
              <input
                type="text"
                value={value.school}
                onChange={(e) => setValue({ ...value, school: e.target.value })}
                name="school"
                className="bg-white border border-gray-400 w-full rounded py-1 px-2"
              />
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

export default Edit;
