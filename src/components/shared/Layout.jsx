import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import Cookies from "universal-cookie";
import Header from "./Header";
import { apiRequests } from "../../api/ApiRequests";
import { useEffect } from "react";
import TableInput from "../TableInput";
import LoginPage from "../../pages/auth/login/LoginPage";
export default function Layout() {
  const { veriGirisi } = useSelector((state) => state.dataReducer);
  const { key } = useSelector((state) => state.keyReducer);
  const cookies = new Cookies();
  const corpId = cookies.get("corp");
  const [jwtKey, setJwtKey] = useState(null);

  apiRequests(key);
  return (
    <div className="flex flex-row bg-neutral-50 h-screen w-screen overflow-hidden">
      {
        <div className="flex flex-row bg-neutral-100 h-screen w-screen ">
          <Sidebar />
          <div className="flex-1 bg-neutral-100 overflow-y-scroll">
            <Header />
            <div className="p-4 ">{<Outlet />}</div>
          </div>
        </div>
      }
    </div>
  );
}
