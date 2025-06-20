import React, { useState } from "react";
import type { IconType } from "react-icons";

import {
  FaBirthdayCake,
  FaBookOpen,
  FaBrain,
  FaClock,
  FaFilm,
  FaUser,
  FaUserSecret,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaPalette,
  FaUtensils,
  FaCoffee,
  FaGamepad,
  FaMusic,
  FaTrophy,
  FaCloudRain,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

type PersonalInfo = {
  icon: IconType;
  label: string;
  value: string;
  color: string;
};

const PersonalInfo3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const personalInfo: PersonalInfo[] = [
    {
      icon: FaUser,
      label: "Full Name",
      value: "Patipat Trisuk",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: FaBirthdayCake,
      label: "Birthday",
      value: "April 13, 2004",
      color: "from-pink-500 to-rose-400",
    },
    {
      icon: FaClock,
      label: "Age",
      value: "21 years old",
      color: "from-purple-500 to-indigo-400",
    },
    {
      icon: FaBrain,
      label: "MBTI",
      value: "INFJ",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Chanthaburi, Thailand",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: FaGraduationCap,
      label: "Education",
      value: "RBRU University - Computer Science",
      color: "from-indigo-500 to-blue-400",
    },
    {
      icon: FaUserSecret,
      label: "Role",
      value: "Frontend Developer",
      color: "from-gray-500 to-slate-400",
    },
    {
      icon: FaUserSecret,
      label: "Goal",
      value: "Full Stack Developer",
      color: "from-yellow-500 to-amber-400",
    },
    {
      icon: FaPalette,
      label: "Favorite Color",
      value: "Blue, Dark Blue, Light Blue",
      color: "from-blue-600 to-sky-400",
    },
    {
      icon: FaUtensils,
      label: "Favorite Food",
      value: "Green Curry",
      color: "from-green-600 to-lime-400",
    },
    {
      icon: FaCoffee,
      label: "Favorite Drink",
      value: "Matcha",
      color: "from-green-500 to-teal-400",
    },
    {
      icon: FaFilm,
      label: "Favorite Movie",
      value: "Green Book",
      color: "from-violet-500 to-purple-400",
    },
    {
      icon: FaGamepad,
      label: "Favorite Anime",
      value: "My Hero Academia",
      color: "from-orange-500 to-red-400",
    },
    {
      icon: FaBookOpen,
      label: "Favorite Book",
      value: "-Eighty Six-",
      color: "from-amber-500 to-yellow-400",
    },
    {
      icon: FaGamepad,
      label: "Favorite Game",
      value: "PUBG, Valorant, APEX",
      color: "from-red-600 to-pink-400",
    },
    {
      icon: FaMusic,
      label: "Favorite Music",
      value: "Pops",
      color: "from-pink-500 to-purple-400",
    },
    {
      icon: FaTrophy,
      label: "Favorite Sport",
      value: "E-Sports",
      color: "from-cyan-500 to-blue-400",
    },
    {
      icon: FaCloudRain,
      label: "Favorite Weather",
      value: "Rainy",
      color: "from-slate-500 to-gray-400",
    },
  ];

  const totalCards = personalInfo.length;

  const getCardStyle = (index: number): React.CSSProperties => {
    // Calculate difference, ensuring it wraps around correctly for circular logic
    let diff = index - currentIndex;
    if (diff < -totalCards / 2) diff += totalCards;
    if (diff > totalCards / 2) diff -= totalCards;

    // Define positions for the active card, previous, and next
    const positions: {
      [key: number]: { x: number; z: number; scale: number; opacity: number };
    } = {
      0: { x: 0, z: 0, scale: 1, opacity: 1 }, // Current card (center)
      1: { x: 200, z: -100, scale: 0.8, opacity: 0.7 }, // Next card (right)
      "-1": { x: -200, z: -100, scale: 0.8, opacity: 0.7 }, // Previous card (left)
    };

    const style = positions[diff];

    if (style) {
      return {
        transform: `translate3d(${style.x}px, 0, ${style.z}px) scale(${style.scale})`,
        opacity: style.opacity,
        zIndex: Math.floor(100 - style.z),
        pointerEvents: "auto", // Enable pointer events for visible cards
      };
    }

    // For cards that are not immediately visible, hide them and disable pointer events
    return {
      transform: `translate3d(0, 0, -500px) scale(0.5)`,
      opacity: 0,
      zIndex: -1,
      pointerEvents: "none",
    };
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  // Helper to get the visible cards based on currentIndex
  const getVisibleCardIndices = () => {
    const visible: number[] = [];
    visible.push(currentIndex); // Current card

    // Previous card
    const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
    visible.push(prevIndex);

    // Next card
    const nextIndex = (currentIndex + 1) % totalCards;
    visible.push(nextIndex);

    return visible;
  };

  const visibleCardIndices = getVisibleCardIndices();

  return (
    <div className="bg-transparent center margin-content flex-col min-h-[1000px] overflow-hidden">
      <div className="text-center mb-16 z-10">
        <h3 className="text-header-gradient-purple mb-4">
          Personal Information
        </h3>
        <p className="text-slate-300 text-xl">
          Learn more about me and my interests
        </p>
      </div>
      <div className="relative w-full max-w-6xl h-96 flex items-center justify-center">
        <div
          className="relative w-full h-full"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {personalInfo.map((info, index) => {
            const IconComponent = info.icon;

            return (
              <>
                {visibleCardIndices.includes(index) && (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out cursor-pointer"
                    style={getCardStyle(index)}
                  >
                    <div
                      className={`
                    relative w-80 h-64 rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105
                    bg-gradient-to-br ${info.color} 
                    ${index == currentIndex ? "ring-4 ring-white/30" : ""}
                  `}
                    >
                      {/* Glassmorphism overlay */}
                      <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>

                      {/* Card content */}
                      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
                        <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm">
                          <IconComponent className="text-4xl" />
                        </div>
                        <h5 className="text-lg font-semibold mb-2 opacity-90">
                          {info.label}
                        </h5>
                        <p className="text-sm font-medium leading-relaxed">
                          {info.value}
                        </p>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-16 z-10">
        <button
          onClick={prevCard}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 text-white hover:scale-110"
        >
          <FaChevronLeft />
        </button>

        <div className="flex items-center gap-2">
          {personalInfo.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 text-white hover:scale-110"
        >
          <FaChevronRight />
        </button>
      </div>
      {/* Card counter */}
      <div className="mt-4 text-white/60 text-sm">
        {currentIndex + 1} of {totalCards}
      </div>
    </div>
  );
};

export default PersonalInfo3DCarousel;
