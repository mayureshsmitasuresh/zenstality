"use client"
import SidebarMain from "@/components/dashboard/SidebarMain";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <div className="flex">
      {/* Sidebar (visible on desktop, hidden on mobile by default) */}
      <SidebarMain />

      {/* Main Content */}
      <div className="flex-1 max-h-screen overflow-y-scroll overflow-x-hidden">
        {/* Page Content */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
