import Header from "@/components/homes/headers/Header";
import MenuTwo from "@/components/homes/menus/MenuTwo";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";

import Volunteers from "@/components/homes/volunteers/Volunteer";

import React from "react";
export const metadata = {
  title: "Minh N. Ta || Awards",
  description:
    "",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper home-1" id={"projects"}>
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <Volunteers />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
