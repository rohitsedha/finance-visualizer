"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

export default function MonthlyChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
