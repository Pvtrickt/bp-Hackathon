"use client";
import { useState } from "react";
interface SubjectModalProps {
  courseCode: string;
  courseName: string;
  isSelected: boolean;
  onSelect: () => void;
}

const SubjectModal = ({
  courseCode,
  courseName,
  isSelected,
  onSelect,
}: SubjectModalProps) => {
  const [color, setColor] = useState("bg-indigo-900");

  const handleClick = () => {
    onSelect();

    setColor(
      color === "bg-indigo-900" ? "bg-brand-purple-light" : "bg-indigo-900",
    );
  };

  return (
    <div
      className={`flex items-center justify-between p-6 shadow-lg ${color}`}
      onClick={handleClick}
      style={{
        width: "300px",
        height: "200px",
        boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
        backgroundColor: color,
        borderRadius: "30px",
      }}
      onMouseEnter={(e) => ((e.target as HTMLElement).style.cursor = "pointer")}
    >
      <div className="flex w-full flex-col gap-y-1 text-left">
        <h1 className="pt-3 text-4xl">{courseCode}</h1>
        <p className="text-md">{courseName}</p>
        <div className="flex flex-row gap-1 pb-3">
          <img src="stars.png" alt="stars" className="h-6 w-6" />
          <img src="stars.png" alt="stars" className="h-6 w-6" />
          <img src="stars.png" alt="stars" className="h-6 w-6" />
          <img src="stars.png" alt="stars" className="h-6 w-6" />
        </div>
        <div className="flex w-full flex-row justify-between">
          <button className="mb-4 mt-3 rounded-full bg-white px-4 py-1 text-sm text-black">
            term 1
          </button>
          <button className="mb-4 mt-3 rounded-full bg-white px-4 py-1 text-sm text-black">
            term 2
          </button>
          <button className="mb-4 mt-3 rounded-full bg-white px-4 py-1 text-sm text-black">
            term 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectModal;
