"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useState } from "react";

export const SidebarToggleContext = createContext({});

const SidebarDashboard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <aside className="h-screen ">
      <nav className="h-full bg-white border-r shadow-md flex flex-col text-gray-900">
        <div className="flex justify-between items-center p-4 pb-2 h-20">
          <h1
            className={`font-bold italic text-3xl overflow-hidden transition-all 
            ${toggle ? "w-52" : "w-0"}
            `}
          >
            Zenstality
          </h1>
          <button
            onClick={() => setToggle(!toggle)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {toggle ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarToggleContext.Provider value={{ toggle }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarToggleContext.Provider>

        <div className="border-t flex p-3">
          <div className=""><UserButton /></div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all 
                ${toggle ? " w-52 ml-3" : "w-0"}
              `}
          >
            <div className="leading-4">
              <h3 className="font-semibold text-xl">{user?.firstName}</h3>
              <div className="text-xs">
                {user?.emailAddresses[0].emailAddress}
              </div>
            </div>
            <MoreVertical className="text-blue-700 cursor-pointer" size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarDashboard;
