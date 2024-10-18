const SideNavBar = () => {
  return (
    <aside className="bg-brand-purple-light h-screen w-1/6 p-6">
      <div className="mb-8 ml-3.5 text-3xl font-semibold text-white">
        <span className="text-white">Schedula</span>
      </div>
      <nav className="space-y-6">
        <a
          href="#"
          className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-brand-purple-dark"
        >
          <img src="DashBoard.png" alt="Dashboard Icon" className="h-8 w-8" />
          Subjects
        </a>
        <a
          href="#"
          className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-brand-purple-dark"
        >
          <img src="Calendar.png" alt="explorer Icon" className="h-8 w-8" />
          Calendar
        </a>
        <a
          href="#"
          className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-brand-purple-dark"
        >
          <img src="settings.png" alt="task hub Icon" className="h-8 w-8" />
          Settings
        </a>
        <a
          href="#"
          className="block flex items-center gap-4 rounded px-4 py-2 text-center text-xl text-white hover:bg-brand-purple-dark"
        >
          <img src="Profile.png" alt="profile Icon" className="h-8 w-8" />
          Profile
        </a>
      </nav>
    </aside>
  );
};

export default SideNavBar;
