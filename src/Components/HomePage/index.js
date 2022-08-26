import React from "react";
import { Outlet } from "react-router";

function HomePageOutlet() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default HomePageOutlet;
