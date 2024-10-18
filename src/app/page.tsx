"use client";
import { useState } from "react";
import PopUpModal from "./_components/PopUpModal";
import SideNavBar from "./_components/SideNavbar";
import SubjectModal from "./_components/SubjectModal";
import PageLayout from "./_components/PageLayout";

export default function Home() {
  const [isPopUpModal, setIsPopUpModal] = useState(false);

  const toggleModal = () => {
    setIsPopUpModal(!isPopUpModal);
  };

  return (
    <div>
      {isPopUpModal && <PopUpModal onClose={() => setIsPopUpModal(false)} />}
      <div className="flex h-screen">
        <SideNavBar />
        <div className="flex flex-grow flex-col rounded-md bg-gray-100 font-roboto ">
          <header
            className="bg-brand-purple-light p-10 text-white"
            style={{ boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)" }}
          >
            <h1 className="text-xl"></h1>
          </header>

          <main className="px-20 pt-14">
            <div className="mb-8 text-5xl">
              <span className="font-bold text-brand-purple-dark">Welcome!</span>
            </div>

            <div className="flex flex-col px-10">
              <h2 className="mb-3 text-xl font-bold text-brand-purple-dark">
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
                <input />
              </div>
              <div className="flex gap-x-4 pt-5">
                <div className="flex items-center border-2 border-brand-purple-dark rounded-full px-4 py-2 text-brand-purple-dark font-semibold">
                  <img src="mini clock.png" alt="clock" className="w-5 h-5 mr-2"/>
                  <select id="sortBy" className="bg-transparent outline-none cursor-pointer">
                    <option value="sort">Sort By</option>
                  </select>
                </div>

                <div className="flex items-center border-2 border-brand-purple-dark rounded-full px-4 py-2 text-brand-purple-dark font-semibold">
                  <select id="filter" className="bg-transparent outline-none cursor-pointer">
                    <option value="filter">Filter</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 place-items-center justify-between gap-y-11 px-5 pt-10 text-center text-white">
              {/* gonna all of this to somewhere and integrate API */}
              <SubjectModal
                courseCode="COMP1511"
                courseName="Programming Fundamentals"
              />
              <SubjectModal courseCode="MATH1311" courseName="Maths 1A" />
              <SubjectModal courseCode="MATH1231" courseName="Maths 1B" />
              <SubjectModal courseCode="MATH1231" courseName="pol" />
              <SubjectModal courseCode="MATH1231" courseName="pol" />
              <SubjectModal courseCode="MATH1231" courseName="pol" />
            </div>
            <div>
              <button 
              onClick={toggleModal}
              className="bg-yellow-500 text-white rounded-full px-6 py-2 hover:bg-yellow-600 mt-4 ml-9 mb-10">Select Subjects</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
