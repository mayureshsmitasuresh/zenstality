"use client";
const NavbarDashboard = ({ toggleSidebar }: any) => {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-20 lg:hidden">
      <div className="flex justify-between items-center">
        {/* Hamburger Menu (visible on mobile) */}
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Title */}
        <h1 className="text-xl font-bold">Dashboard</h1>

        {/* User Actions */}
        <div className="hidden md:inline-block">
          <button className="p-2 hover:bg-gray-100 rounded">Profile</button>
          <button className="p-2 hover:bg-gray-100 rounded">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
