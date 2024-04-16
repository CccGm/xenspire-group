import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../widgets/footer";
import { TimeSheet } from "./timesheet";
import { SideNav } from "../widgets/sidenav";
import { Approval } from "./approval";
import { DashboardTimeSheet } from "./dashboardTimeSheet";

export const Admin = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <SideNav /> */}
      {/* <div className="ml-72"> */}
      <div>
        <Routes>
          <Route path="/" element={<TimeSheet />} />
          <Route path="approval" element={<Approval />} />
          <Route path="dashboard" element={<DashboardTimeSheet />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
