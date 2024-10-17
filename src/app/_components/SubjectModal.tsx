"use client";
import { useState } from "react";
interface SubjectModalProps {
  courseCode: string;
  courseName: string;
}

const SubjectModal = ({ courseCode, courseName }: SubjectModalProps) => {
  const [isModalSelected, setIsModalSelected] = useState(false);
  const [color, setColor] = useState("bg-indigo-900");

  const toggleModal = () => {
    setIsModalSelected(!isModalSelected);
  };

  const changeColor = () => {
    setColor(
      color === "bg-indigo-900" ? "bg-brand-purple-light" : "bg-indigo-900",
    );
  };
  return (
    <div
      className={`flex items-center justify-between rounded-3xl p-6 shadow-lg ${color}`}
      onClick={changeColor}
      style={{
        width: "300px",
        height: "160px",
        boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
        backgroundColor: color,
      }}
    >
      <div className="flex w-full flex-col gap-y-1 text-left">
        <h1 className="text-4xl">{courseCode}</h1>
        <p className="text-md">{courseName}</p>
        <div className="flex flex-row gap-1">
          <img src="stars.png" alt="stars" className="h-6 w-6" />
          <img src="stars.png" alt="stars" className="h-6 w-6" />
          <img src="stars.png" alt="stars" className="h-6 w-6" />
          <img src="stars.png" alt="stars" className="h-6 w-6" />
        </div>
        <div className="flex w-full flex-row justify-between">
          <button className="rounded-lg bg-white text-black px-4 py-1 my-2">term 1</button>
          <button className="rounded-lg bg-white text-black px-4 py-1 my-2">term 2</button>
          <button className="rounded-lg bg-white text-black px-4 py-1 my-2">term 3</button>
        </div>
      </div>
    </div>
  );
};

export default SubjectModal;
