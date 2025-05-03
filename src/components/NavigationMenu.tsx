
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { 
  User, 
  GraduationCap, 
  Users, 
  Smile, 
  ChartBar, 
  MessageCircle 
} from "lucide-react";

const NavigationMenu = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <User className="h-5 w-5" />,
    },
    {
      title: "Assessment",
      path: "/assessment",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "Careers",
      path: "/careers",
      icon: <ChartBar className="h-5 w-5" />,
    },
    {
      title: "Parent Guide",
      path: "/parents",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Support",
      path: "/support",
      icon: <Smile className="h-5 w-5" />,
    },
    {
      title: "Chat Assistant",
      path: "/chat",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      title: "Reports",
      path: "/reports",
      icon: <ChartBar className="h-5 w-5" />,
    }
  ];

  return (
    <>
      <Sidebar>
        <SidebarHeader className="px-6 py-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-future-purple text-white rounded-lg p-1">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="font-display font-semibold text-xl">Future Found</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      className={`w-full ${location.pathname === item.path ? "bg-primary/10 text-primary" : ""}`}
                    >
                      <Link to={item.path} className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="fixed top-4 left-4 z-40 lg:hidden">
        <SidebarTrigger />
      </div>
    </>
  );
};

export default NavigationMenu;
