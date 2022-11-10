import { useState } from "react";
import Sidebar from "../components/interfaces/Lessons/Sidebar/Sidebar";
import Screen from "../components/interfaces/Lessons/VideoScreen/Screen";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";

const Lessons = () => {
  return (
    <>
      <div class="flex">
        <Sidebar />
        <Screen />
      </div>
    </>
  );
};

Lessons.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Lessons;
