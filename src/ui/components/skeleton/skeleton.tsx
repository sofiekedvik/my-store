import React from "react";

export default function Skeleton() {
  return (
    <div className="h-full w-full">
      <div className="animate-pulse bg-gray-300 h-8 w-32 mb-4 mt-6"></div>
      <div className="animate-pulse bg-gray-300 h-6 w-64 mb-4 mt-6"></div>
      <ul className="flex gap-6 flex-wrap mb-4">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <li
            key={item}
            className="animate-pulse p-2 bg-gray-300 rounded-md flex-[1_0_150px] text-center"
          >
            <p className="text-gray-300">{item}</p>
          </li>
        ))}
      </ul>
      <div className="animate-pulse bg-gray-300 h-6 w-64 mb-4 mt-6"></div>
      <div className="animate-pulse bg-gray-300 h-4 w-36 mb-4"></div>
      <div className="animate-pulse bg-gray-300 h-4 w-24 mb-4"></div>
      <div className="animate-pulse bg-gray-300 h-4 w-56 mb-4"></div>
      <div className="animate-pulse bg-gray-300 h-4 w-32 mb-4"></div>
      <div className="animate-pulse bg-gray-300 h-4 w-24 mb-4"></div>
      <div className="animate-pulse bg-gray-300 h-4 w-20 mb-4"></div>
    </div>
  );
}
