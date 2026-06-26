"use client";

import { Bell, Settings } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onSearch: (value: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="flex items-center justify-between">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Search movies..."
        className="w-1/2 p-3 rounded-full bg-white shadow outline-none text-gray-600"
      />

      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer text-gray-600" />
        <Settings className="cursor-pointer text-gray-600" />
      </div>
    </div>
  );
}