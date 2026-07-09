"use client";

import { usePathname } from "next/navigation";

import SidebarItem from "./sidebar_item";
import { menuItems, bottomMenuItems } from "./menu";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between p-4">

      {/* Parte superior */}
      <div>

        {/* Usuario */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/user.jpg"
            alt="Usuario"
            className="w-16 h-16 rounded-full mb-2"
          />

          <h2 className="font-semibold">
            Tu Nombre
          </h2>

          <p className="text-sm text-gray-500">
            correo@email.com
          </p>
        </div>

        {/* Menú principal */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
            />
          ))}
        </nav>
      </div>

      {/* Menú inferior */}
      <div className="space-y-2">
        {bottomMenuItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={pathname === item.href}
          />
        ))}
      </div>

    </aside>
  );
}