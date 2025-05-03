
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import NavigationMenu from "./NavigationMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <NavigationMenu />
        <main className="flex-1 p-6 lg:px-8 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
