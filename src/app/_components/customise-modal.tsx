"use client";
import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import CustomiseAssignment from "./customise-assignment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface customiseModalProps {
  subjectCode: string;
  subjectName: string;
  assignment1: string;
  assignment2: string;
  assignment3: string;
  assignment4?: string;
}

const CustomiseCard: FC<customiseModalProps> = ({
  subjectCode,
  subjectName,
  assignment1,
  assignment2,
  assignment3,
  assignment4,
}) => {
  const notify = () => toast(`${subjectCode} assessments updated!`);

  return (
    <div className="border-brand-purple-light flex flex-col gap-5 rounded-xl border-2 p-12 pb-1 shadow-xl">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-brand-purple-dark font-mono text-3xl">
            {subjectCode}
          </h1>
          <p className="text-brand-purple-light text-sm font-semibold">
            {subjectName}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          <button className="border-brand-purple-light text-brand-purple-light rounded-full border p-1 px-7">
            Visibility
          </button>
          <button className="border-brand-purple-light text-brand-purple-light rounded-full border p-1 px-7">
            Colour
          </button>
          <FaTrash className="cursor-pointer" />
        </div>
      </div>
      <CustomiseAssignment assignment={assignment1} />
      <CustomiseAssignment assignment={assignment2} />

      <CustomiseAssignment assignment={assignment3} />

      {assignment4 && <CustomiseAssignment assignment={assignment4} />}

      <div className="flex w-full items-center justify-between p-7 pr-10">
        <p className="text-brand-purple-dark text-xs">
          Note: click on an assignment item to remove from timetable generation
        </p>
        <button
          onClick={notify}
          className="rounded-full bg-yellow-400 px-6 py-2 font-semibold text-white"
        >
          Update
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CustomiseCard;
