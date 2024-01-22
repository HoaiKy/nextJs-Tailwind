import Users from "@/components/pages/dashboard/users/users";
import React from "react";

type Props = {};

const UsersPage = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Users />
    </div>
  );
};

export default UsersPage;
