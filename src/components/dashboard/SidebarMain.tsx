import React from "react";
import SidebarDashboard from "./Sidebar";
import MenuSidebarItems from "./MenuSidebarItems";
import { LayoutDashboard, MailCheck, ReceiptText, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMain = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <SidebarDashboard>
      <Link href={"/dashboard"}>
        {" "}
        <MenuSidebarItems
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          
          alert={true}
        />
      </Link>
      <Link href={"/dashboard/billing"}>
        {" "}
        <MenuSidebarItems
          icon={<ReceiptText size={20} />}
          text="Billings"
          alert
        />
      </Link>
      <Link href={"/dashboard/reviewreplier"}>
        {" "}
        <MenuSidebarItems
          icon={<Star size={20} />}
          text="Review Replier"
          alert
        />
      </Link>
      <Link href={"/dashboard/mailreplier"}>
        {" "}
        <MenuSidebarItems
          icon={<MailCheck size={20} />}
          text="Email Replier"
          alert
        />
      </Link>
    </SidebarDashboard>
  );
};

export default SidebarMain;
