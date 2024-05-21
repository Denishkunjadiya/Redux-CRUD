import React from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../redux/studentSlice";

const List = () => {
  const student = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteStudent({ id: id }));
  };
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Student List</h1>
        <Link
          to="/add"
          className="bg-black text-white rounded px-2 py-1 text-sm"
        >
          ADD
        </Link>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-xs uppercase font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-xs uppercase font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Birth of date
                  </th>
                  <th
                    scope="col"
                    className="text-xs uppercase font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    std
                  </th>
                  <th
                    scope="col"
                    className="text-xs uppercase font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    school
                  </th>
                  <th
                    colSpan={2}
                    className="text-xs uppercase font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {student.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {item.bod}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {item.std}
                    </td>
                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                      {item.school}
                    </td>
                    <td className="flex px-6 py-4 space-x-2">
                      <Link
                        to={`/edit/${item.id}`}
                        className="bg-blue-800 text-white px-1 py-1 rounded"
                      >
                        <MdEdit />
                      </Link>
                      <Link
                        to=""
                        className="bg-red-600 text-white px-1 py-1 rounded"
                        onClick={() => handleRemove(item.id)}
                      >
                        <MdDelete />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
