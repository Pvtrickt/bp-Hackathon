"use client";
import { useState } from "react";
import PopUpModal from "./_components/PopUpModal";
import SideNavBar from "./_components/SideNavbar";
import SubjectModal from "./_components/SubjectModal";

export default function Home() {
  const [isPopUpModal, setIsPopUpModal] = useState(false);

  const toggleModal = () => {
    setIsPopUpModal(!isPopUpModal);
  };

  return (
    <div>
      {isPopUpModal && <PopUpModal onClose={() => setIsPopUpModal(false)} />}
      <div className="flex h-full">
        <SideNavBar />
        <div className="font-roboto flex flex-grow flex-col bg-gray-100">
          <header className="bg-brand-purple-light w-full border-0 p-10 text-white">
            <h1 className="text-xl"></h1>
          </header>

          <main className="px-20 pt-9">
            <div className="mb-8 text-5xl">
              <span className="text-brand-purple-dark font-bold">
                Welcome, your personal AI scheduling assistant
              </span>
            </div>
            <div className="flex flex-col px-10">
              <h2 className="text-brand-purple-dark mb-3 text-xl font-bold">
                Choose your subjects:
              </h2>
              <div className="flex items-center rounded-3xl bg-white px-4 pt-1 shadow-lg">
                <img
                  src="magnifying-glass.png"
                  alt="Magnifying Glass"
                  className="flex h-4 w-4"
                />
                <form className="w-full pl-2">
                  <input
                    type="text"
                    placeholder="subject id"
                    className="h-10 w-full rounded-3xl"
                  />
                </form>
              </div>
              <div className="flex gap-x-4 pt-5">
                <div className="border-brand-purple-dark text-brand-purple-dark flex items-center rounded-full border-2 px-4 py-2 font-semibold">
                  <img
                    src="mini clock.png"
                    alt="clock"
                    className="mr-2 h-5 w-5"
                  />
                  <select
                    id="sortBy"
                    className="cursor-pointer bg-transparent outline-none"
                  >
                    <option value="sort">Sort By</option>
                  </select>
                </div>

                <div className="border-brand-purple-dark text-brand-purple-dark flex items-center rounded-full border-2 px-4 py-2 font-semibold">
                  <select
                    id="filter"
                    className="cursor-pointer bg-transparent outline-none"
                  >
                    <option value="filter">Filter</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid h-[500px] grid-cols-3 place-items-center justify-between gap-y-11 overflow-auto px-5 pt-10 text-center text-white">
              <SubjectModal
                courseCode="COMP1511"
                courseName="Programming Fundamentals"
              />
              <SubjectModal courseCode="MATH1311" courseName="Maths 1A" />
              <SubjectModal courseCode="MATH1231" courseName="Maths 1B" />
              <SubjectModal
                courseCode="COMP2521"
                courseName="Data Structures and Algorithms"
              />
              <SubjectModal
                courseCode="COMP3311"
                courseName="Database Systems"
              />
              <SubjectModal
                courseCode="COMP1521"
                courseName="Computer System Fundamentals"
              />
              <SubjectModal
                courseCode="COMP3231"
                courseName="Operating Systems"
              />
              <SubjectModal
                courseCode="COMP6080"
                courseName="Web Front-end Programming"
              />
              <SubjectModal
                courseCode="COMP3121"
                courseName="Algorithm Design and Analysis"
              />
            </div>
            <div>
              <button
                onClick={toggleModal}
                className="mb-10 ml-9 mt-4 rounded-full bg-yellow-500 px-6 py-2 text-white hover:bg-yellow-600"
              >
                Select Subjects
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
