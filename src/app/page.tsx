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
      <PageLayout>
        <main className="px-20 pt-14">
          <div className="mb-8 text-5xl">
            <span className="font-bold text-indigo-800">Welcome!</span>
          </div>

          <div className="flex flex-col pb-10">
            <h2 className="mb-3 text-xl font-bold text-indigo-800">
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
          </div>

          <div className="grid grid-cols-3 place-items-center gap-y-11 text-center text-white">
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
            <button onClick={toggleModal}>Generate Timetable</button>
          </div>
        </main>
      </PageLayout>
    </div>
  );
}
