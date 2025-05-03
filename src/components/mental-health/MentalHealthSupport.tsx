
import React from "react";
import WellbeingMeter from "./WellbeingMeter";
import MentalHealthTabs from "./MentalHealthTabs";

const MentalHealthSupport = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Wellbeing Support</h1>
        <p className="text-gray-600">
          Resources and tools to help maintain your mental health and motivation
        </p>
      </div>

      {/* Wellbeing Meter */}
      <WellbeingMeter />

      {/* Tabbed Content */}
      <MentalHealthTabs />
    </div>
  );
};

export default MentalHealthSupport;
