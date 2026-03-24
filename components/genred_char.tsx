"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Ene", value: 20 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 40 },
  { name: "Abr", value: 35 },
  { name: "May", value: 50 },
  { name: "Jun", value: 50 },
  { name: "Jul", value: 50 },
  { name: "Ago", value: 50 },
  { name: "Sep", value: 50 },
  { name: "Oct", value: 50 },
  { name: "Nov", value: 50 },
  { name: "Dic", value: 50 }
];

export default function GenreChart() {
  return (
    <div>
      <h2 className="font-semibold mb-4 text-gray-600">Genre distribution</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}