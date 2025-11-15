"use client";
import React, { useState } from "react";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

const Framer = () => {
  const [checked, setChecked] = useState<boolean[]>(
    Array(pages.length).fill(false)
  );
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  // Vérifie si toutes les pages sont cochées
  const allChecked = checked.every(Boolean);

  // Coche/décoche toutes les pages
  const toggleAll = () => {
    setChecked(Array(pages.length).fill(!allChecked));
  };

  const toggle = (idx: number) => {
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const handleDone = () => {
    const checkedPages = pages.filter((_, idx) => checked[idx]);
    setSelectedPages(checkedPages);
  };

  return (
    <div className="w-[370px] mx-auto mt-24 bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-base font-medium">All pages</span>
        <button
          type="button"
          className={`w-6 h-6 rounded-md border transition-colors ${
            allChecked
              ? "bg-[#F3F6FF] border-[#2469F6]"
              : "bg-white border-[#E0E0E0]"
          } flex items-center justify-center`}
          onClick={toggleAll}
          aria-pressed={allChecked}
        >
          {allChecked && (
            <svg
              className="w-4 h-4 text-[#2469F6]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2469F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17L4 12" />
            </svg>
          )}
        </button>
      </div>
      <div className="border-b border-[#E0E0E0] mb-2" />
      <div>
        {pages.map((page, idx) => (
          <div
            key={page}
            className="flex items-center justify-between py-2 px-1"
          >
            <span className="text-[#333] text-base">{page}</span>
            <button
              type="button"
              className={`w-6 h-6 rounded-md border transition-colors ${
                checked[idx]
                  ? "bg-[#F3F6FF] border-[#2469F6]"
                  : "bg-white border-[#E0E0E0]"
              } flex items-center justify-center`}
              onClick={() => toggle(idx)}
              aria-pressed={checked[idx]}
            >
              {checked[idx] && (
                <svg
                  className="w-4 h-4 text-[#2469F6]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2469F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17L4 12" />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="w-full mt-6 h-12 bg-[#FFD12A] text-[#333] font-medium rounded-md text-base shadow transition hover:bg-[#ffe066]"
        onClick={handleDone}
      >
        Done
      </button>
      {selectedPages.length > 0 && (
        <div className="mt-4 text-sm text-gray-700">
          Pages cochées : {selectedPages.join(", ")}
        </div>
      )}
    </div>
  );
};

export default Framer;
