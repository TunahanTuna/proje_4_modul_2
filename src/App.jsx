import { useState } from "react";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout.jsx";

import { DASHBOARD_SIDEBAR_LINKS } from "./lib/constants/navigation";
import { useSelector } from "react-redux";
import LoginPage from "./pages/auth/login/LoginPage.jsx";

function App() {
  const [count, setCount] = useState(0);
  const { key } = useSelector((state) => state.keyReducer);

  return (
    <Routes>
      {key ? (
        <Route path="/" element={<Layout />}>
          {DASHBOARD_SIDEBAR_LINKS.map((routes, key) =>
            routes.key == "bilanco" ? (
              <Route
                index
                key={key}
                path={routes.path}
                element={routes.component}
              />
            ) : (
              <Route key={key} path={routes.path} element={routes?.component}>
                {routes &&
                  routes?.subMenus &&
                  routes.subMenus.map((dt) => (
                    <Route key={dt.key} path={dt.path} element={dt.component}>
                      {dt &&
                        dt.subMenus &&
                        dt.subMenus.map((data) => (
                          <Route
                            key={data?.key}
                            path={data?.path}
                            element={data?.component}
                          />
                        ))}
                    </Route>
                  ))}
              </Route>
            )
          )}

          <Route path="*" element={<div>boş sayfa</div>} />
        </Route>
      ) : (
        <Route index path="/" element={<LoginPage />}></Route>
      )}
    </Routes>
  );
}

export default App;
