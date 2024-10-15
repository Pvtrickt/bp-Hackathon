import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import SubjectModal from "./_components/SubjectModal";
import SideNavBar from "./_components/SideNavbar";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="flex h-screen">
        <SideNavBar />
        <div className="flex flex-grow flex-col rounded-md bg-gray-100">
          <header
            className="bg-bgColour p-10 text-white"
            style={{ boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)" }}
          >
            <h1 className="text-xl"></h1>
          </header>

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
                src="post 1.png"
              />
              <SubjectModal
                courseCode="MATH1311"
                courseName="Maths 1A"
                src="post 1.png"
              />
              <SubjectModal
                courseCode="MATH1231"
                courseName="Maths 1B"
                src="post 1.png"
              />
              <SubjectModal
                courseCode="MATH1231"
                courseName="pol"
                src="post 1.png"
              />
              <SubjectModal
                courseCode="MATH1231"
                courseName="pol"
                src="post 1.png"
              />
              <SubjectModal
                courseCode="MATH1231"
                courseName="pol"
                src="post 1.png"
              />
            </div>
          </main>
        </div>
      </div>
    </HydrateClient>
  );
}
