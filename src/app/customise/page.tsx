"use client";
import CustomiseCard from "../_components/customise-modal";
import SideNavBar from "../_components/SideNavbar";

export default function Home() {
  return (
    <div className="flex h-full bg-gray-100">
      <SideNavBar />
      <div className="flex flex-grow flex-col rounded-md">
        <header className="bg-brand-purple-light p-10 text-white">
          <h1 className="text-xl"></h1>
        </header>

        <main className="flex h-screen flex-col gap-8 overflow-scroll p-16">
          <h1 className="text-brand-purple-dark text-3xl font-semibold">
            Let&apos;s customise your timetable
          </h1>

          <div className="text-brand-purple-dark flex flex-col justify-start">
            <h1 className="text-xl font-semibold">Subjects</h1>
            <p className="text-sm">
              Select the assignments you would like shown on your planner for
              each of your chosen subjects.
            </p>
          </div>
          <CustomiseCard
            subjectCode={"COMP1511"}
            subjectName={"Programming Fundamentals"}
            assignment1={"Problem Sets (15%) (Individual)"}
            assignment2={"Assignments 1 & 2 (45%) (Individual)"}
            assignment3={"Final Exam (40%) (Individual)"}
          />
          <CustomiseCard
            subjectCode={"MATH1131"}
            subjectName={"Mathematics 1A"}
            assignment1={"Weekly Lessons (10%) Individual)"}
            assignment2={"Lab Tests (30%) (Individual)"}
            assignment3={"Assignment (10%) (Individual)"}
            assignment4={"Final Examination (50%) (Individual)"}
          />
          <CustomiseCard
            subjectCode={"MATH1231"}
            subjectName={"Mathematics 2A"}
            assignment1={"Weekly Lessons (10%) Individual)"}
            assignment2={"Lab Tests (30%) (Individual)"}
            assignment3={"Assignment (10%) (Individual)"}
            assignment4={"Final Examination (50%) (Individual)"}
          />
        </main>
      </div>
    </div>
  );
}
