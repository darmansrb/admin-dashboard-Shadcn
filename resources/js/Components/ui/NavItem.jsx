import React from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/Components/ui/tooltip";

export default function NavItem({
  icon,
  label,
  badge,
  active,
  setActive,
  sidebarOpen,
}) {
  const isActive = active === label;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={() => setActive(label)}
            className={`flex items-center justify-between text-sm p-2 rounded cursor-pointer hover:bg-muted transition-all ${isActive ? "bg-muted font-semibold" : ""
              }`}
          >
            <div className="flex items-center gap-2">
              {icon}
              {sidebarOpen && <span>{label}</span>}
            </div>
            {badge && sidebarOpen && (
              <span className="text-xs rounded-full px-2 transition-colors bg-black text-white dark:bg-white dark:text-black">
                {badge}
              </span>
            )}
          </div>
        </TooltipTrigger>
        {!sidebarOpen && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}
