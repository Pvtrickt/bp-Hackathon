import { useRouter } from "next/navigation";

const SideNavBar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("../customise");
  };

  return (
    <aside className="bg-brand-purple-light w-1/6 p-6">
      <div className="mb-8 ml-3.5 text-3xl font-bold text-white">
        <span className="text-white">Schedula</span>
        <span className="font-bold text-white">.</span>
      </div>
      <nav className="space-y-6">
        <a
          href="#"
          className="flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
          onClick={() => router.push("/")}
        >
          <img src="DashBoard.png" alt="Dashboard Icon" className="h-8 w-8" />
          Subject
        </a>
        <a
          href="#"
          className="flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
          onClick={handleClick}
        >
          <img src="explorer.png" alt="explorer Icon" className="h-8 w-8" />
          Calendar
        </a>
        <a
          href="#"
          className="flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
          onClick={handleClick}
        >
          <img src="TaskHub.png" alt="task hub Icon" className="h-8 w-8" />
          Setting
        </a>
        <a
          href="#"
          className="flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
        >
          <img src="Profile.png" alt="profile Icon" className="h-8 w-8" />
          Profile
        </a>
      </nav>
    </aside>
  );
};

export default SideNavBar;
