import { useState } from "react";

interface PopUpModalProp {
  onClose: () => void;
}

const PopUpModal = ({ onClose }: PopUpModalProp) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40`}
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center justify-center bg-emerald-400 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Select Subjects:</h1>
        <div className="flex flex-col bg-red-300">
          <li className="flex bg-blue-200">
            <h1>COMP1511</h1>
            <h2>Programming Fundamentals</h2>
          </li>
          <li>
            <h1>COMP1511</h1>
            <h2>Programming Fundamentals</h2>
          </li>
          <li>
            <h1>COMP1511</h1>
            <h2>Programming Fundamentals</h2>
          </li>
          <button className="flex">Generate Timetable</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
