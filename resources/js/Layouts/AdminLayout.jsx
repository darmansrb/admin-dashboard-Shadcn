import React, { useState } from 'react'
import Navbar from '@/Components/ui/Navbar';
import Sidebar from '@/Components/ui/Sidebar';

export function AdminLayout({ children }) {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
  const [sidebarOpen, setSidebarOpen] = useState(isDesktop);
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-muted text-foreground">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <Sidebar
        sidebarOpen={sidebarOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <div className="flex-1 w-full">
        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}