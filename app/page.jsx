// import Hero from "@/components/preview/Hero";
// import Buy from "@/components/preview/Buy";
// import CopyRight from "@/components/preview/CopyRight";
// import Demo from "@/components/preview/Demo";
// import Features from "@/components/preview/Features";

// import "../public/assets/css/style.css";

// export const metadata = {
//   title: "Preview || Bostami - Professional portfolio NextJS Template",
//   description:
//     "Discover Botami,the most impressive portfolio template for work showcase, blog",
// };
// export default function page() {
//   return (
//     <>
//       <Hero />
//       <Demo />
//       <Features />
//       <Buy />
//       <CopyRight />
//     </>
//   );
// }

import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";
import AboutOne from "@/components/homes/about/AboutOne";
import React from "react";

import MenuTwo from "@/components/homes/menus/MenuTwo";

export const metadata = {
  title: "Minh N. Ta || Portfolio",
  description:
    "Discover new things about me!",
};

export default function Home1() {
  return (
    <>
      <div className="page-wrapper home-1" id="home-1">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <AboutOne />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
