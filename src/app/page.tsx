import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="flex h-screen">
        <aside className="bg-brand-purple-light h-full w-1/6 p-6">
          <div className="mb-8 ml-3.5 text-3xl font-bold text-white">
            <span className="font-bold text-indigo-800">Task</span>
            <span className="text-white">Findr</span>
          </div>
          <nav className="space-y-6">
            <a
              href="#"
              className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
            >
              <img
                src="DashBoard.png"
                alt="Dashboard Icon"
                className="h-8 w-8"
              />
              DashBoard
            </a>
            <a
              href="#"
              className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
            >
              <img src="explorer.png" alt="explorer Icon" className="h-8 w-8" />
              Explore
            </a>
            <a
              href="#"
              className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
            >
              <img src="TaskHub.png" alt="task hub Icon" className="h-8 w-8" />
              Task Hub
            </a>
            <a
              href="#"
              className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
            >
              <img src="Profile.png" alt="profile Icon" className="h-8 w-8" />
              Profile
            </a>
          </nav>
          <div className="absolute bottom-6 left-20 mb-8 flex flex-col items-center text-white">
            <img
              src="image 1.png"
              alt="User"
              className="w-50 h-50 mb-2 rounded-full"
            />{" "}
            {/* Increased size of image */}
            <span>Sam Goggins</span>
          </div>
        </aside>

        <div className="flex flex-grow flex-col bg-gray-100">
          <header
            className="bg-brand-purple-light p-10 text-white"
            style={{ boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)" }}
          >
            <h1 className="text-xl"></h1>
          </header>

          <main className="m-10 pl-14">
            <div className="mb-6 text-3xl">
              <span className="font-bold text-indigo-800">Welcome, </span>
              <span className="text-gray-500">Sam</span>
            </div>
            <div className="mb-3 text-xl font-bold text-indigo-800">
              I would like to...
            </div>

            <div className="grid grid-cols-3 gap-6 text-center text-white">
              <a
                href="#"
                className="bg-brand-purple-light flex cursor-pointer items-center rounded-3xl p-10 shadow-lg hover:bg-indigo-600"
                style={{
                  width: "300px",
                  height: "160px",
                  boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="text-left">
                  <h2 className="text-3xl">Create Task</h2>
                </div>
                <img src="post 1.png" alt="icon" className="h-20 w-20" />
              </a>
              <a
                href="#"
                className="bg-brand-purple-light flex cursor-pointer items-center rounded-3xl p-10 shadow-lg hover:bg-indigo-600"
                style={{
                  width: "300px",
                  height: "160px",
                  boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="text-left">
                  <h2 className="text-3xl">Explore Tasks</h2>
                </div>
                <img src="search 1.png" alt="icon" className="h-20 w-20" />
              </a>
              <a
                href="#"
                className="bg-brand-purple-light flex cursor-pointer items-center rounded-3xl p-10 shadow-lg hover:bg-indigo-600"
                style={{
                  width: "300px",
                  height: "160px",
                  boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="text-left">
                  <h2 className="text-3xl">View My Tasks</h2>
                </div>
                <img
                  src="brainstorming 1.png"
                  alt="icon"
                  className="h-20 w-20"
                />
              </a>
            </div>

            <div className="mb-3 mt-10 text-xl font-bold text-indigo-800">
              Performance
            </div>

            <div className="grid grid-cols-3 gap-6 text-center text-white">
              <div
                className="flex items-center justify-between rounded-3xl bg-indigo-900 p-10 shadow-lg"
                style={{
                  width: "300px",
                  height: "160px",
                  boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="text-left">
                  <h2 className="text-5xl">47</h2>
                  <p className="text-xl">Tasks</p>
                  <p className="text-xl"> Completed</p>
                </div>
                <img
                  src="stock-market 1.png"
                  alt="icon"
                  className="h-20 w-20"
                />
              </div>
              <div
                className="flex items-center justify-between rounded-3xl bg-indigo-900 p-10 shadow-lg"
                style={{
                  width: "300px",
                  height: "160px",
                  boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="text-left">
                  <h2 className="text-5xl">4/5</h2>
                  <p className="text-xl">Average</p>
                  <p className="text-xl">Rating</p>
                </div>
                <img
                  src="customer-review 1.png"
                  alt="icon"
                  className="h-20 w-20"
                />
              </div>
              <div
                className="flex items-center justify-between rounded-3xl bg-indigo-900 p-10 shadow-lg"
                style={{
                  width: "300px",
                  height: "160px",
                  boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="text-left">
                  <h2 className="text-5xl">2</h2>
                  <p className="text-xl">Tasks</p>
                  <p className="text-xl">In Progress</p>
                </div>
                <img src="loading 1.png" alt="icon" className="h-20 w-20" />
              </div>
              <div
                className="flex items-center justify-between rounded-3xl bg-indigo-900 p-10 shadow-lg"
                style={{
                  width: "300px",
                  height: "160px",
                  boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="text-left">
                  <h2 className="text-5xl">3</h2>
                  <p className="text-xl">Saved</p>
                  <p className="text-xl">Tasks</p>
                </div>
                <img src="heart 1.png" alt="icon" className="h-20 w-20" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </HydrateClient>
  );
}
