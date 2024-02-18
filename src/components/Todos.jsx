"use client";
import { getTodos } from "@/redux/actions/todosActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Todos() {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div className=" container mx-auto py-10">
      <h1 className=" text-3xl font-bold text-center pb-8">
        Todos With Fatching Data
      </h1>
      <div className=" grid grid-cols-12 gap-6">
        {isLoading && (
          <div className=" col-span-12 lg:col-span-4 2xl:col-span-3 border shadow-md rounded-sm overflow-hidden">
            <h4 className=" text-center bg-gray-500 px-6 py-2 text-white font-bold">
              State
            </h4>
            <p className=" text-center px-6 py-3">Loading...</p>
          </div>
        )}
        {error && (
          <div className=" col-span-12 lg:col-span-4 2xl:col-span-3 border shadow-md rounded-sm overflow-hidden">
            <h4 className=" text-center bg-gray-500 px-6 py-2 text-white font-bold">
              State
            </h4>
            <p className=" text-center px-6 py-3">{error.message}</p>
          </div>
        )}
        {todos &&
          todos.map((todo) => (
            <div
              key={todo.id}
              className=" col-span-12 lg:col-span-4 2xl:col-span-3 border shadow-md rounded-sm overflow-hidden"
            >
              <h4 className=" text-center bg-gray-500 px-6 py-2 text-white font-bold">
                {todo.id}
              </h4>

              <p className=" text-center px-6 py-3">{todo.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
