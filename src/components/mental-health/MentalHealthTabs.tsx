
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SupportResources from "./SupportResources";
import StressManagement from "./StressManagement";
import MotivationStrategies from "./MotivationStrategies";
import OvercomingSetbacks from "./OvercomingSetbacks";

const MentalHealthTabs = () => {
  return (
    <Tabs defaultValue="resources" className="w-full">
      <TabsList>
        <TabsTrigger value="resources">Support Resources</TabsTrigger>
        <TabsTrigger value="stress">Stress Management</TabsTrigger>
        <TabsTrigger value="motivation">Motivation Tools</TabsTrigger>
        <TabsTrigger value="setbacks">Handling Setbacks</TabsTrigger>
      </TabsList>

      <TabsContent value="resources" className="space-y-6 mt-6">
        <SupportResources />
      </TabsContent>

      <TabsContent value="stress" className="mt-6">
        <StressManagement />
      </TabsContent>

      <TabsContent value="motivation" className="mt-6">
        <MotivationStrategies />
      </TabsContent>

      <TabsContent value="setbacks" className="mt-6">
        <OvercomingSetbacks />
      </TabsContent>
    </Tabs>
  );
};

export default MentalHealthTabs;
