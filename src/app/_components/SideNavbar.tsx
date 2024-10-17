const SideNavBar = () => {
  return (
    <aside className="h-screen w-[350px] max-w-[350px] bg-brand-purple-light p-6">
      <div className="mb-8 ml-3.5 text-3xl font-bold text-white">
        <span className="font-bold text-indigo-800">Task</span>
        <span className="text-white">Findr</span>
      </div>
      <nav className="space-y-6">
        <a
          href="#"
          className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-indigo-600"
        >
          <img src="DashBoard.png" alt="Dashboard Icon" className="h-8 w-8" />
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
    </aside>
  );
};

export default SideNavBar;
