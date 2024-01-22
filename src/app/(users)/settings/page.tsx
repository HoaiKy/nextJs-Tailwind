import dynamic from "next/dynamic";
import React from "react";

const Settings = dynamic(
  () => import("@/components/pages/dashboard/settings/settings")
);

const SettingPage = () => {
  return (
    <div>
      <Settings />
    </div>
  );
};

export default SettingPage;
