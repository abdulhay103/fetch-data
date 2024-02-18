import React from "react";

export default function Todos() {
  return (
    <div className=" container mx-auto py-10">
      <h1 className=" text-3xl font-bold text-center pb-8">
        Todos With Fatching Data
      </h1>
      <div className=" grid grid-cols-12 gap-6">
        <div className=" col-span-12 lg:col-span-4 2xl:col-span-3 border shadow-md rounded-sm">
          <h4 className=" text-center bg-gray-500 px-6 py-2 text-white font-bold">
            Id-1
          </h4>
          <p className=" text-center px-6 py-3">Title</p>
        </div>
      </div>
    </div>
  );
}