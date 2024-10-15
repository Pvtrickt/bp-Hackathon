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

          <aside className="bg-bgColour w-1/6 h-full p-6">
            <div className="text-white text-3xl font-bold mb-8 ml-3.5">
              <span className="text-indigo-800 font-bold">Task</span>
              <span className="text-white">Findr</span>
            </div>
            <nav className="space-y-6">
              <a href="#" className="block text-white py-2 px-4 rounded hover:bg-indigo-600 text-center text-xl flex items-center gap-4">
                <img src="DashBoard.png" alt="Dashboard Icon" className="w-8 h-8" />
                DashBoard
              </a>
              <a href="#" className="block text-white py-2 px-4 rounded hover:bg-indigo-600 text-center text-xl flex items-center gap-4">
                <img src="explorer.png" alt="explorer Icon" className="w-8 h-8" />
                Explore
              </a>
              <a href="#" className="block text-white py-2 px-4 rounded hover:bg-indigo-600 text-center text-xl flex items-center gap-4">
                <img src="TaskHub.png" alt="task hub Icon" className="w-8 h-8" />
                Task Hub
              </a>
              <a href="#" className="block text-white py-2 px-4 rounded hover:bg-indigo-600 text-center text-xl flex items-center gap-4">
                <img src="Profile.png" alt="profile Icon" className="w-8 h-8" />
                Profile
              </a>
            </nav>
            <div className="absolute bottom-6 left-20 text-white flex flex-col items-center mb-8">
              <img src="image 1.png" alt="User" className="rounded-full w-50 h-50 mb-2"/> {/* Increased size of image */}
              <span>Sam Goggins</span>
            </div>
          </aside>
          

          <div className="flex flex-col flex-grow bg-gray-100">

            <header className="bg-bgColour p-10 text-white" style={{ boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)' }}>
              <h1 className="text-xl"></h1>
            </header>

            <main className="pl-14 m-10">
              <div className="text-3xl mb-6">
                <span className="text-indigo-800 font-bold">Welcome, </span>
                <span className="text-gray-500">Sam</span>
              </div>
              <div className="text-indigo-800 text-xl font-bold mb-3">I would like to...</div>

              <div className="grid grid-cols-3 gap-6 text-white text-center">
                <a href="#" className="bg-bgColour p-10 rounded-3xl shadow-lg hover:bg-indigo-600 cursor-pointer flex items-center" style={{ width: '300px', height: '160px', boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)' }}>
                  <div className="text-left">
                    <h2 className="text-3xl">Create Task</h2>
                  </div>
                  <img src="post 1.png" alt="icon" className="w-20 h-20"/>
                </a>
                <a href="#" className="bg-bgColour p-10 rounded-3xl shadow-lg hover:bg-indigo-600 cursor-pointer flex items-center" style={{ width: '300px', height: '160px', boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)' }}>
                  <div className="text-left">
                    <h2 className="text-3xl">Explore Tasks</h2>
                  </div>
                  <img src="search 1.png" alt="icon" className="w-20 h-20"/>
                </a>
                <a href="#" className="bg-bgColour p-10 rounded-3xl shadow-lg hover:bg-indigo-600 cursor-pointer flex items-center" style={{ width: '300px', height: '160px', boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)' }}>
                  <div className="text-left">
                    <h2 className="text-3xl">View My Tasks</h2>
                  </div>
                  <img src="brainstorming 1.png" alt="icon" className="w-20 h-20"/>
                </a>
              </div>

              <div className="text-indigo-800 text-xl font-bold mb-3 mt-10">Performance</div>

              <div className="grid grid-cols-3 gap-6 text-white text-center">
                <div className="bg-indigo-900 p-10 rounded-3xl shadow-lg flex items-center justify-between" style={{ width: '300px', height: '160px', boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)' }}>
                  <div className="text-left">
                    <h2 className="text-5xl">47</h2>
                    <p className="text-xl">Tasks</p><p className='text-xl'> Completed</p>
                  </div>
                  <img src="stock-market 1.png" alt="icon" className="w-20 h-20"/>
                </div>
                <div className="bg-indigo-900 p-10 rounded-3xl shadow-lg flex items-center justify-between" style={{ width: '300px', height: '160px', boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)' }}>
                  <div className="text-left">
                    <h2 className="text-5xl">4/5</h2>
                    <p className="text-xl">Average</p><p className="text-xl">Rating</p>
                  </div>
                  <img src="customer-review 1.png" alt="icon" className="w-20 h-20"/>
                </div>
                <div className="bg-indigo-900 p-10 rounded-3xl shadow-lg flex items-center justify-between" style={{ width: '300px', height: '160px', boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)' }}>
                  <div className="text-left">
                    <h2 className="text-5xl">2</h2>
                    <p className="text-xl">Tasks</p><p className="text-xl">In Progress</p>
                  </div>
                  <img src="loading 1.png" alt="icon" className="w-20 h-20"/>
                </div>
                <div className="bg-indigo-900 p-10 rounded-3xl shadow-lg flex items-center justify-between" style={{ width: '300px', height: '160px', boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)' }}>
                  <div className="text-left">
                    <h2 className="text-5xl">3</h2>
                    <p className="text-xl">Saved</p><p className='text-xl'>Tasks</p>
                  </div>
                  <img src="heart 1.png" alt="icon" className="w-20 h-20"/>
                </div>
              </div>
              
            </main>
          </div>
        </div>
    </HydrateClient>
  );
}
