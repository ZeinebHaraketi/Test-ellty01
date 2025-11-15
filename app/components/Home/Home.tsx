"use client";
import React, { useState } from "react";
import styles from "./Home.module.css";

const variants = [
  "default",
  "variant2",
  "variant3",
  "variant4",
  "variant5",
  "variant6",
  "variant7",
  "variant8",
];

const getTop = (index: number) => 20 + index * 62; // 42px height + 20px gap

const HomePage = () => {
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    variant: variants[i],
  }));

  const [checked, setChecked] = useState<number[]>([2, 3, 4, 5, 6]);

  function toggle(id: number) {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => {
        const isChecked = checked.includes(item.id);
        return (
          <div
            key={item.id}
            className={`${styles.row} ${styles[item.variant]}`}
            style={{ top: getTop(index) }}
          >
            <span className={styles.label}>All pages</span>
            <div
              className={`${styles.checkbox} ${isChecked ? "checked" : ""}`}
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

export default HomePage;