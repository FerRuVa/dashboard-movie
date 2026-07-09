import {
  LayoutDashboard,
  List,
  User2,
  Settings,
  LogOut,
} from "lucide-react";

export const menuItems = [
  {
    label: "Inicio",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Películas",
    href: "/movies",
    icon: List,
  },
  {
    label: "Usuarios",
    href: "/users",
    icon: User2,
  },
];

export const bottomMenuItems = [
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Cerrar sesión",
    href: "/logout",
    icon: LogOut,
  },
];