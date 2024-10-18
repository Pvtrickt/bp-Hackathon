"use client";
import { RxCross2 } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import DailyPreviewDate from "./DailyPreviewDate";
import { check } from "prettier";

interface PopUpModalProp {
  onClose: () => void;
}

const DailyPopUp = ({ onClose }: PopUpModalProp) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40`}
      onClick={onClose}
    >
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
          <MdModeEdit />
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
    </div>
  );
};

export default DailyPopUp;
