import { useContext } from "react";
import { SidebarToggleContext } from "./Sidebar";

const MenuSidebarItems = ({ icon, text, active, alert }: any) => {
  const { toggle }: any = useContext(SidebarToggleContext);
  return (
    <li
      className={`relative flex items-center py-2 px-1 my-1 font-medium cursor-pointer rounded-md transition-colors
    ${
      active
        ? "bg-gradient-to-tr from-blue-700 to to-blue-300 text-white font-semibold"
        : "hover:bg-blue-50 text-gray-600"
    }
    `}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${toggle ? "w-32 ml-3" : "w-0"}`}>{text}</span>
    </li>
  );
};

export default MenuSidebarItems;
