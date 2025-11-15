'use client';
import React from 'react';

const Button = () => {
  return (
    <div className="box-border w-[380px] h-[200px] border border-dashed border-[#9747FF] rounded-[5px] flex flex-col items-center justify-center gap-4">
      {/* Button Default */}
      <button className="w-[340px] h-10 flex flex-row justify-center items-center py-2.5 px-5 gap-2.5 bg-[#FFCE22] rounded-sm">
        <span className="w-full text-center font-montserrat font-normal text-[14px] leading-[130%] text-[#1F2128]">
          Done
        </span>
      </button>

      {/* Button Variant2 */}
      <button className="w-[340px] h-10 flex flex-row justify-center items-center py-2.5 px-5 gap-2.5 bg-[#FFD84D] rounded-sm">
        <span className="w-full text-center font-montserrat font-normal text-[14px] leading-[130%] text-[#1F2128]">
          Done
        </span>
      </button>

      {/* Button Variant3 */}
      <button className="w-[340px] h-10 flex flex-row justify-center items-center py-2.5 px-5 gap-2.5 bg-[#FFCE22] rounded-sm">
        <span className="w-full text-center font-montserrat font-normal text-[14px] leading-[130%] text-[#1F2128]">
          Done
        </span>
      </button>
    </div>
  );
};

export default Button;