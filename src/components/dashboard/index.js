import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../widgets/footer";
import { Home } from "./home";
import { SideNav } from "../widgets/sidenav";
import { Admin } from "../admin";

export const DashBoard = () => {
  return (
    <div className="min-h-screen bg-white">
      <SideNav />
      <div className="ml-72 border-cyan-500 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
