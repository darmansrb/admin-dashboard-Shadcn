import React from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { PanelLeft } from "lucide-react";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="h-16 flex items-center justify-between gap-4 p-4 border-b bg-background sticky top-0 z-40">
      {/* Kiri */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {/* {sidebarOpen ? "Hide" : "Open"} Menu */}
          <PanelLeft />
        </Button>
      </div>

      {/* Kanan */}
      <div className="flex items-center gap-3">
        {/* Theme Selector */}
        <ThemeToggle />

        {/* Avatar SN */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs cursor-pointer">
              SN
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
