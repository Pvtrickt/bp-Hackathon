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
          className="relative flex w-[32%] flex-col items-center justify-center gap-3 overflow-auto rounded-2xl bg-white p-9"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={onClose}
            className="absolute right-6 top-6 cursor-pointer"
          >
            <RxCross2
              className="text-2xl font-bold text-brand-purple-light"
              style={{ strokeWidth: "0.5" }} // Thicker stroke
            />
          </div>
          <div className="flex w-full flex-row items-center gap-4 text-left text-2xl font-semibold text-brand-purple-dark">
            <h1>Edit Preview</h1>
          </div>

          <div className="flex w-full flex-col text-left">
            <h2 className="text-sm text-gray-600">Today</h2>
            <h1 className="text-xl">Sunday, 3 March 2024</h1>
          </div>
          <div className="flex w-full flex-row content-center items-center justify-center gap-3">
            <DailyPreviewDate Day={"Sun"} Date={3} selected={true} />
            <DailyPreviewDate Day={"Mon"} Date={4} />
            <DailyPreviewDate Day={"Tue"} Date={5} />
            <DailyPreviewDate Day={"Wed"} Date={6} />
            <DailyPreviewDate Day={"Thu"} Date={7} />
            <DailyPreviewDate Day={"Fri"} Date={8} />
            <DailyPreviewDate Day={"Sat"} Date={9} />
          </div>
          <div className="flex h-[300px] w-full flex-col gap-y-2 overflow-auto pt-5">
            <div className="flex flex-row">
              <div className="text-light flex w-[80px] flex-col items-center justify-center gap-3 pr-2 text-xs">
                <input
                  type={"text"}
                  className="w-full rounded-md border border-brand-purple-dark px-2"
                  placeholder="10:00"
                ></input>
                <div className="h-[60px] w-[1px] border border-blue-400"></div>
              </div>
              <div className="relative flex w-[95%] justify-start rounded-lg bg-blue-200 p-3 text-left text-xs text-blue-600">
                <div className="absolute right-3 top-3 cursor-pointer">
                  <RiDeleteBin6Fill color="grey" />
                </div>
                COMP1511 - Weekly Labs
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-light flex w-[80px] flex-col items-center justify-center gap-3 pr-2 text-xs">
                <div className="flex w-full rounded-md border border-red-500 px-2">
                  <span className="ml-1 flex text-red-500">12:00</span>
                </div>
                <div className="h-[60px] w-[1px] border border-blue-400"></div>
              </div>
              <div className="relative flex w-[95%] justify-start rounded-lg bg-blue-200 p-3 text-left text-xs text-blue-600">
                <div className="absolute right-3 top-3 cursor-pointer">
                  <RiDeleteBin6Fill color="grey" />
                </div>
                DEADLINE: COMP1511 Weekly Labs
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-light flex w-[80px] flex-col items-center justify-center gap-3 pr-2 text-xs">
                <input
                  type={"text"}
                  className="w-full rounded-md border border-brand-purple-dark px-2"
                  placeholder="2:00"
                ></input>
                <div className="h-[60px] w-[1px] border border-blue-400"></div>
                <input
                  type={"text"}
                  className="w-full rounded-md border border-brand-purple-dark px-2"
                  placeholder="4:00"
                ></input>
              </div>
              <div className="relative flex w-[95%] justify-start rounded-lg bg-amber-200 p-3 text-left text-xs text-amber-600">
                <div className="absolute right-3 top-3 cursor-pointer">
                  <RiDeleteBin6Fill color="grey" />
                </div>
                MATH1131 - Weekly Labs
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-light flex w-[80px] flex-col items-center justify-center gap-3 pr-2 text-xs">
                <input
                  type={"text"}
                  className="w-full rounded-md border border-brand-purple-dark px-2"
                  placeholder="6:00"
                ></input>
                <div className="h-[60px] w-[1px] border border-blue-400"></div>
                <input
                  type={"text"}
                  className="w-full rounded-md border border-brand-purple-dark px-2"
                  placeholder="8:00"
                ></input>
              </div>
              <div className="relative flex w-[95%] justify-start rounded-lg bg-lime-200 p-3 text-left text-xs text-lime-600">
                <div className="absolute right-3 top-3 cursor-pointer">
                  <RiDeleteBin6Fill color="grey" />
                </div>
                MATH1231 - Weekly Labs
              </div>
            </div>
          </div>
          {addTask && (
            <div className="flex w-full flex-col gap-4 pt-10">
              <hr className="border-brand-purple-dark"></hr>
              <div className="text-sm font-semibold text-brand-purple-dark">
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
                      className="w-full rounded-md border border-brand-purple-dark px-2 py-2"
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
              className="w-[100px] rounded-lg bg-brand-purple-dark p-2 text-sm text-white"
            >
              Add Task
            </button>
            <button
              onClick={() => {
                setEditMode(!editMode);
              }}
              className="w-[100px] rounded-lg bg-brand-purple-dark p-2 text-sm text-white"
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
              className="text-2xl font-bold text-brand-purple-light"
              style={{ strokeWidth: "0.5" }} // Thicker stroke
            />
          </div>
          <div className="flex w-full flex-row items-center gap-4 text-left text-2xl font-semibold text-brand-purple-dark">
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
            <DailyPreviewDate Day={"Sun"} Date={3} selected={true} />
            <DailyPreviewDate Day={"Mon"} Date={4} />
            <DailyPreviewDate Day={"Tue"} Date={5} />
            <DailyPreviewDate Day={"Wed"} Date={6} />
            <DailyPreviewDate Day={"Thu"} Date={7} />
            <DailyPreviewDate Day={"Fri"} Date={8} />
            <DailyPreviewDate Day={"Sat"} Date={9} />
          </div>
          <div className="h-[300px] h-full w-full overflow-auto pt-5">
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
            <div className="flex flex-row">
              <div className="flex w-[80px] flex-col items-center justify-center gap-3 pr-2 text-xs">
                <div className="h-[60px] w-[1px] border border-orange-400"></div>
                <p>10:50 am</p>
              </div>
              <div className="flex h-[90px] w-[95%] justify-start rounded-lg bg-orange-200 p-3 text-left text-xs text-orange-600">
                COMP1531 - Assignment 2B
              </div>
            </div>
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
