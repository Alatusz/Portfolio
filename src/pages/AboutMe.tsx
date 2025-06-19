// AboutMe.tsx - Main Component
import React from "react";
import MBTICard from "../component/About-Me/MBTI-Card";
import BioCard from "../component/About-Me/Bio-Card";
import InterestsCrad from "../component/About-Me/Interest-Card";
import EducationTimeline from "../component/About-Me/Education-Timeline-Card";
import PersonalInfo3DCarousel from "../component/About-Me/PersonalInfo3DCarousel";

const AboutMe: React.FC = () => {
  const educationTimeline = [
    {
      title: "Rambhai Barni Rajabhat University",
      location: "Chanthaburi, Thailand",
      level: "Bachelor's Degree",
      major: "Computer Science",
      period: "2021-2025",
      gpa: "3.45",
    },
    {
      title: "Borai Wittayakom School",
      location: "Trat, Thailand",
      level: "High School",
      major: "Science Mathematics",
      period: "2015-2023",
      gpa: "3.45",
    },
    {
      title: "Ban Tak Waeng Community School",
      location: "Trat, Thailand",
      level: "Primary School",
      major: "None",
      period: "2009-2015",
      gpa: "3.45",
    },
  ];

  return (
    <div className="main-card-container">
      {/* Main Content */}
      <BioCard />
      <PersonalInfo3DCarousel />
      {/* <PersonalInfoCard personalInfo={personalInfo} /> */}
      <MBTICard />

      <InterestsCrad />
      <EducationTimeline educationTimeline={educationTimeline} />
    </div>
  );
};

export default AboutMe;
