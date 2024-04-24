import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../widgets/footer";
import { TimeSheet } from "./timesheet";
import { Approval } from "./approval";
import { Home } from "./home";
import { Profile } from "./profile";
import { SideNavAdmin } from "../widgets/sidenavAdmin";

export const Admin = ({ setUser, email }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex w-full">
        <SideNavAdmin setUser={setUser} email={email} />
        <Routes>
          <Route path="/" element={<TimeSheet />} />
          <Route path="home" element={<Home />} />
          <Route path="approval" element={<Approval />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
};
