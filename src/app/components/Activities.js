'use client';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export default function Activities() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(
        'https://openinapp-server.vercel.app/barchart',
      );
      const json = await response.json();

      setData(json);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="flex flex-row justify-center">
        <Loader2 className="animate-spin h-4 w-4" />
      </div>
    );

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <Legend
          iconType="circle"
          verticalAlign="top"
          height={36}
          align="right"
          margin={{ top: 0, right: 4, left: 0, bottom: 5 }}
        />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="pv" barSize={35} fill="#98D89E" radius={[4, 4, 0, 0]} />
        <Bar dataKey="uv" barSize={35} fill="#EE8484" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
