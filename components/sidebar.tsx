"use client";

import {LayoutDashboard, List, Settings, HelpCircle, LogOut, User2 } from "lucide-react";
import SidebarItem from "./sidebaritem";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between p-4">
      
      {/* TOP */}
      <div>
        {/* USER */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/user.jpg"
            alt="user"
            className="w-16 h-16 rounded-full mb-2"
          />
          <h2 className="font-semibold">Tu Nombre</h2>
          <p className="text-sm text-gray-500">correo@email.com</p>
        </div>

        {/* MENU */}
        <nav className="space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Inicio" href="/dashboard" active />
          <SidebarItem icon={List} label="Películas" href="/movies" />
          <SidebarItem icon={User2} label="Usuarios" href="/users" />
        </nav>

        {/* SETTINGS */}
        <div className="mt-6 space-y-2">
          <SidebarItem icon={Settings} label="Settings" href="/settings" />
          <SidebarItem icon={HelpCircle} label="Help" href="/help" />
        </div>
      </div>

      {/* LOGOUT */}
      <div>
        <SidebarItem icon={LogOut} label="Log Out" href="/logout" />
      </div>
    </aside>
  );
}