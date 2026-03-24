"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
}

export default function SidebarItem({
  icon: Icon,
  label,
  href,
  active = false,
}: SidebarItemProps) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition
        ${
          active
            ? "bg-blue-100 text-blue-600"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Icon size={20} />
        <span>{label}</span>
      </div>
    </Link>
  );
}