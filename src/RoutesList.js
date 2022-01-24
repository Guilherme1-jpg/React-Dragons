import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RequireAuth } from "./RequireAuth";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

export const RoutesList = {
  LOGIN: "/",
  HOME: "/Home",
};

export default function UserRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.LOGIN} element={<Login />} />
        <Route
          path={RoutesList.HOME}
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
