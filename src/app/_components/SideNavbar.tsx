"use client";
import { useRouter } from "next/navigation";

const SideNavBar = () => {
  const router = useRouter();
  const handleClick = (page: string) => {
    if (page === "Subjects") {
      router.push("/");
    } else if (page === "Calendar") {
      router.push("../calendar");
    } else if (page === "Profile") {
      router.push("../register");
    }
  };

  return (
    <aside className="bg-brand-purple-light w-1/6 p-6">
      <div className="mb-8 ml-3.5 text-3xl font-semibold text-white">
        <span className="text-white">Schedula.</span>
      </div>
      <nav className="space-y-6">
        <a
          href="#"
          className="hover:bg-brand-purple-dark flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white"
          onClick={() => handleClick("Subjects")}
        >
          <img src="DashBoard.png" alt="Dashboard Icon" className="h-8 w-8" />
          Subjects
        </a>
        <a
          href="#"
          className="hover:bg-brand-purple-dark block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white"
          onClick={() => handleClick("Calendar")}
        >
          <img src="Calendar.png" alt="explorer Icon" className="h-8 w-8" />
          Calendar
        </a>
        <a
          href="#"
          className="hover:bg-brand-purple-dark block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white"
        >
          <img src="settings.png" alt="task hub Icon" className="h-8 w-8" />
          Settings
        </a>
        <a
          href="#"
          className="hover:bg-brand-purple-dark block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white"
          onClick={() => handleClick("Profile")}
        >
          <img src="Profile.png" alt="profile Icon" className="h-8 w-8" />
          Profile
        </a>
      </nav>
    </aside>
  );
};

export default SideNavBar;
