import { Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <input
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