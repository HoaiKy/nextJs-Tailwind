import Kanban from "@/components/pages/dashboard/kanban/kanban";
import React from "react";

const KanbanPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-no-repeat bg-cover ">
      <Kanban />
    </div>
  );
};

export default KanbanPage;
