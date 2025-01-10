import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center  mt-12 mb-4">
      {/* --- 1st BUTTON --- */}
      <button
        className="px-[0.8rem] py-4 text-[0.785rem] text-gray-400 bg-paginationBg border-t-[0.1rem] border-l-[0.1rem]  border-b-[0.1rem]  border-gray-400 rounded-l-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-semibold"
        disabled
      >
        First
      </button>

      {/* --- PAGE NUMBERS --- */}
      <button className="px-[0.8rem] py-4 text-[0.785rem] font-semibold text-[#23A6F0] bg-white border border-gray-400 border-t-[0.1rem] border-l-[0.1rem]  border-b-[0.1rem] hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
        1
      </button>
      <button className="px-[0.8rem] py-4 text-[0.785rem] font-semibold text-white bg-[#23A6F0]  border-t-[0.1rem] border-l-[0.1rem]  border-b-[0.1rem] border-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-400">
        2
      </button>
      <button className="px-[0.8rem] py-4 text-[0.785rem] font-semibold text-[#23A6F0] bg-white border border-gray-400 border-t-[0.1rem] border-l-[0.1rem]  border-b-[0.1rem] hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
        3
      </button>
      {/* --- NEXT BUTTON --- */}
      <button className="px-[0.8rem] py-4 text-[0.785rem] font-semibold text-[#23A6F0] bg-white border-[0.1rem] border-gray-400 rounded-r-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Next
      </button>
    </div>
  );
};

export default Pagination;