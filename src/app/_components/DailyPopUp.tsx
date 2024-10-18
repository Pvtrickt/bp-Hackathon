"use client";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import DailyPreviewDate from "./DailyPreviewDate";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaSortDown } from "react-icons/fa";
import MiniSubjectOption from "./miniSubjectOption";

interface PopUpModalProp {
  onClose: () => void;
}

const DailyPopUp = ({ onClose }: PopUpModalProp) => {
  const [editMode, setEditMode] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [subject1Open, setSubject1Open] = useState(false);
  const [subject2Open, setSubject2Open] = useState(false);
  const [subject3Open, setSubject3Open] = useState(false);
  const [subject4Open, setSubject4Open] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40`}
      onClick={onClose}
    >
      {editMode ? (
        <div
          className="relative flex w-[32%] flex-col items-center justify-center gap-3 overflow-scroll rounded-2xl bg-white p-9"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={onClose}
            className="absolute right-6 top-6 cursor-pointer"
          >
            <RxCross2
              className="text-brand-purple-light text-2xl font-bold"
              style={{ strokeWidth: "0.5" }} // Thicker stroke
            />
          </div>
          <div className="text-brand-purple-dark flex w-full flex-row items-center gap-4 text-left text-2xl font-semibold">
            <h1>Edit Preview</h1>
          </div>

          <div className="flex w-full flex-col text-left">
            <h2 className="text-sm text-gray-600">Today</h2>
            <h1 className="text-xl">Sunday, 8 May 2024</h1>
          </div>
          <div className="flex w-full flex-row content-center items-center justify-center gap-3">
            <DailyPreviewDate Day={"Sun"} Date={8} selected={true} />
            <DailyPreviewDate Day={"Mon"} Date={9} />
            <DailyPreviewDate Day={"Tue"} Date={10} />
            <DailyPreviewDate Day={"Wed"} Date={11} />
            <DailyPreviewDate Day={"Thu"} Date={12} />
            <DailyPreviewDate Day={"Fri"} Date={13} />
            <DailyPreviewDate Day={"Sat"} Date={14} />
          </div>
          <div className="h-full w-full overflow-scroll pt-5">
            <div className="flex flex-row">
              <div className="text-light flex w-[80px] flex-col items-center justify-center gap-3 pr-2 text-xs">
                <input
                  type={"text"}
                  className="border-brand-purple-dark w-full rounded-md border px-2"
                  placeholder="Start time"
                ></input>
                <div className="h-[60px] w-[1px] border border-blue-400"></div>
                <input
                  type={"text"}
                  className="border-brand-purple-dark w-full rounded-md border px-2"
                  placeholder="End time"
                ></input>
              </div>
              <div className="relative flex w-[95%] justify-start rounded-lg bg-blue-200 p-3 text-left text-xs text-blue-600">
                <div className="absolute right-3 top-3 cursor-pointer">
                  <RiDeleteBin6Fill color="grey" />
                </div>
                COMP1511 - Assignment 1A
              </div>
            </div>
          </div>
          {addTask && (
            <div className="flex w-full flex-col gap-4 pt-10">
              <hr className="border-brand-purple-dark"></hr>
              <div className="text-brand-purple-dark text-sm font-semibold">
                <h1
                  onClick={() => {
                    setSubject1Open(!subject1Open);
                  }}
                  className="flex cursor-pointer flex-row"
                >
                  COMP 1511- Programming Fundamentals <FaSortDown />
                </h1>
                {subject1Open && (
                  <div className="flex flex-col gap-1 py-3">
                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />
                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />

                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />
                  </div>
                )}
                <h1
                  onClick={() => {
                    setSubject2Open(!subject2Open);
                  }}
                  className="flex cursor-pointer flex-row"
                >
                  COMP 1511- Software Engineering Fundamentals <FaSortDown />
                </h1>
                {subject2Open && (
                  <div className="flex flex-col gap-1 py-3">
                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />
                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />

                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />
                  </div>
                )}
                <h1
                  onClick={() => {
                    setSubject3Open(!subject3Open);
                  }}
                  className="flex cursor-pointer flex-row"
                >
                  COMP 1511- Data Structures and Algorithms <FaSortDown />
                </h1>
                {subject3Open && (
                  <div className="flex flex-col gap-1 py-3">
                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />
                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />

                    <MiniSubjectOption assignment="Assignment 1A - Programming Languages (individual)" />
                  </div>
                )}
                <h1
                  onClick={() => {
                    setSubject4Open(!subject4Open);
                  }}
                  className="flex cursor-pointer flex-row pb-2"
                >
                  OTHER TASK <FaSortDown />
                </h1>
                {subject4Open && (
                  <div>
                    <input
                      type={"text"}
                      className="border-brand-purple-dark w-full rounded-md border px-2 py-2"
                      placeholder="Insert Task"
                    ></input>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="flex w-full flex-row justify-between pb-4 pt-8">
            <button
              onClick={() => {
                setAddTask(!addTask);
              }}
              className="bg-brand-purple-dark w-[100px] rounded-lg p-2 text-sm text-white"
            >
              Add Task
            </button>
            <button
              onClick={() => {
                setEditMode(!editMode);
              }}
              className="bg-brand-purple-dark w-[100px] rounded-lg p-2 text-sm text-white"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <div
          className="relative flex w-[32%] flex-col items-center justify-center gap-3 rounded-2xl bg-white p-9"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={onClose}
            className="absolute right-6 top-6 cursor-pointer"
          >
            <RxCross2
              className="text-brand-purple-light text-2xl font-bold"
              style={{ strokeWidth: "0.5" }} // Thicker stroke
            />
          </div>
          <div className="text-brand-purple-dark flex w-full flex-row items-center gap-4 text-left text-2xl font-semibold">
            <h1>Daily Preview</h1>
            <MdModeEdit
              className="cursor-pointer"
              onClick={() => {
                setEditMode(!editMode);
              }}
            />
          </div>

          <div className="flex w-full flex-col text-left">
            <h2 className="text-sm text-gray-600">Today</h2>
            <h1 className="text-xl">Sunday, 8 May 2024</h1>
          </div>
          <div className="flex w-full flex-row content-center items-center justify-center gap-3">
            <DailyPreviewDate Day={"Sun"} Date={8} selected={true} />
            <DailyPreviewDate Day={"Mon"} Date={9} />
            <DailyPreviewDate Day={"Tue"} Date={10} />
            <DailyPreviewDate Day={"Wed"} Date={11} />
            <DailyPreviewDate Day={"Thu"} Date={12} />
            <DailyPreviewDate Day={"Fri"} Date={13} />
            <DailyPreviewDate Day={"Sat"} Date={14} />
          </div>
          <div className="h-full w-full overflow-scroll pt-5">
            <div className="flex flex-row">
              <div className="flex w-[80px] flex-col items-center justify-center gap-3 pr-2 text-xs">
                <p>08:00 am</p>
                <div className="h-[60px] w-[1px] border border-blue-400"></div>
                <p>10:00 am</p>
              </div>
              <div className="flex h-[90px] w-[95%] justify-start rounded-lg bg-blue-200 p-3 text-left text-xs text-blue-600">
                COMP1511 - Assignment 1A
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex w-[80px] flex-col items-center justify-center gap-3 pr-2 text-xs">
                <div className="h-[60px] w-[1px] border border-orange-400"></div>
                <p>10:50 am</p>
              </div>
              <div className="flex h-[90px] w-[95%] justify-start rounded-lg bg-orange-200 p-3 text-left text-xs text-orange-600">
                COMP1531 - Assignment 2B
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row justify-end gap-1 pt-8 text-sm">
            <p>Completed?</p>
            <input type="checkbox"></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyPopUp;
