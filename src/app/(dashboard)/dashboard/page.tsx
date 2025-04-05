// app/dashboard/page.tsx
import Analytics from "@/components/dashboard/Analytics";
import React from "react";

const Dashboard = async () => {
  return (
    <div>
      {" "}
      <section>
        <Analytics />
      </section>
      
    </div>
  );
};

export default Dashboard;
