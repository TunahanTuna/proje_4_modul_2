import React from "react";
import { ConfigProvider, Tabs } from "antd";
import DashboardSideBar from "./DashboardSideBar";
import { sidebarTabsHelpers } from "../../lib/constants/constants";

export default function SideBarTabs() {
  const items = sidebarTabsHelpers.sidebarItemsObject;
  return (
    <div>
      <ConfigProvider
        theme={{
          token: tokenHelper,
        }}
      >
        <Tabs centered items={items} animated={true} />
      </ConfigProvider>
    </div>
  );
}

const tokenHelper = {
  colorPrimary: "#FFFFFF",
  colorText: "#FFFFFF",
  fontSize: "bold",
  colorBgTextActive: "#FFFFFF",
  colorBgTextHover: "#FFFFFF",
};
