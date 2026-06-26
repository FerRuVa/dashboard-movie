"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartItem = {
  name: string;
  value: number;
};

interface Props {
  data: ChartItem[];
  title?: string;
}

export default function GenreChart({ data, title }: Props) {
  return (
    <div>
      <h2 className="font-semibold mb-4 text-gray-600">
        {title ?? "Movies by year"}
      </h2>

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