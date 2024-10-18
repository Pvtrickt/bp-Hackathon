"use client";
import { useEffect, useState } from "react";
import PopUpModal from "./_components/PopUpModal";
import SideNavBar from "./_components/SideNavbar";
import SubjectModal from "./_components/SubjectModal";
import fetchMyQuery from "./api/fetchMyQuery";

interface Course {
  course_code: string;
  course_name: string;
}

interface MyQueryResponse {
  courses: Course[];
}

export default function Home() {
  const [isPopUpModal, setIsPopUpModal] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

  const toggleModal = () => {
    setIsPopUpModal(!isPopUpModal);
  };

  useEffect(() => {
    fetchMyQuery()
      .then(({ data, errors }) => {
        if (errors) {
          setError(errors);
        } else {
          setCourses(data.courses);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  //filters the courses based on the search input
  const filteredCourses = courses.filter((course) =>
    course.course_code.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCourseSelection = (course: Course) => {
    const isSelected = selectedCourses.some(
      (selectedCourse) => selectedCourse.course_code === course.course_code,
    );

    if (isSelected) {
      setSelectedCourses(
        selectedCourses.filter(
          (selectedCourse) => selectedCourse.course_code !== course.course_code,
        ),
      );
    } else {
      setSelectedCourses([...selectedCourses, course]); // i dont understand this, might have to ask chatgpt
    }
  };

  const sortedCourses = [
    ...selectedCourses,
    ...filteredCourses.filter(
      (course) =>
        !selectedCourses.some(
          (selectedCourse) => selectedCourse.course_code === course.course_code,
        ),
    ),
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching courses</div>;

  return (
    <div>
      {isPopUpModal && <PopUpModal onClose={() => setIsPopUpModal(false)} />}
      <div className="flex h-full">
        <SideNavBar />
        <div className="font-roboto flex flex-grow flex-col bg-gray-100">
          <header className="w-full border-0 bg-brand-purple-light p-10 text-white">
            <h1 className="text-xl"></h1>
          </header>

          <main className="px-20 pt-9">
            <div className="mb-8 flex flex-col px-10 text-5xl">
              <span className="font-bold text-brand-purple-dark">
                Nebula dreams, Schedula plans
              </span>
            </div>
            <div className="flex flex-col px-10">
              <h2 className="mb-3 text-xl font-bold text-brand-purple-dark">
                Choose your subjects:
              </h2>
              <div className="flex items-center rounded-3xl bg-white px-4 pt-1 shadow-lg focus-within:ring-2 focus-within:ring-brand-purple-dark">
                <img
                  src="magnifying-glass.png"
                  alt="Magnifying Glass"
                  className="flex h-4 w-4"
                />
                <form className="w-full pl-2">
                  <input
                    type="text"
                    placeholder="subject id"
                    className="h-10 w-full rounded-3xl text-xl focus:outline-none focus:ring-0"
                    value={searchTerm}
                    onChange={handleSearchInput}
                  />
                </form>
              </div>
              <div className="flex gap-x-4 pt-5">
                <div className="flex items-center rounded-full border-2 border-brand-purple-dark px-4 py-2 font-semibold text-brand-purple-dark">
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

                <div className="flex items-center rounded-full border-2 border-brand-purple-dark px-4 py-2 font-semibold text-brand-purple-dark">
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
              {sortedCourses.map((course) => (
                <SubjectModal
                  key={course.course_code}
                  courseCode={course.course_code}
                  courseName={course.course_name}
                  isSelected={selectedCourses.some(
                    (selectedCourse) =>
                      selectedCourse.course_code === course.course_code,
                  )}
                  onSelect={() => handleCourseSelection(course)}
                />
              ))}
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

{
  /* <SubjectModal
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
              /> */
}
