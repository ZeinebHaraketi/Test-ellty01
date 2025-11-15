"use client";
import React, { useState } from "react";

const Desktop = () => {
  const items = Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
  }));

  const [checked, setChecked] = useState<number[]>([2, 3, 4, 5, 6]);

  function toggle(id: number) {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div className="box-border relative w-[105px] h-[425px] bg-[#ededed] border-2 border-dashed border-[#9747FF] rounded-lg py-2 flex flex-col gap-4">
      {items.map((item) => {
        const isChecked = checked.includes(item.id);
        return (
          <div
            key={item.id}
            className="flex justify-center items-center h-[45px]"
          >
            <div
              className={`w-[35px] h-[35px] rounded-md border transition-colors flex items-center justify-center cursor-pointer relative ${
                isChecked
                  ? "bg-[#2469F6] border-[#2469F6]"
                  : "bg-white border-[#bdbdbd]"
              }`}
              onClick={() => toggle(item.id)}
              tabIndex={0}
              role="button"
              aria-pressed={isChecked}
            >
              {isChecked && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17L4 12" />
                </svg>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Desktop;
