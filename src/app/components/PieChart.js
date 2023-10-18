'use client';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Cell, Label, Pie, PieChart } from 'recharts';

const COLORS = ['#98D89E', '#EE8484', '#F6DC7D', '#FF8042'];

export default function Piechart() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(
      'https://openinapp-server.vercel.app/piechart',
    );
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  }

  console.log(data.name);

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
    <PieChart width={242} height={200}>
      <Pie
        data={data}
        cx={120}
        cy={100}
        innerRadius={40}
        outerRadius={60}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}

        {data.map((entry, index) => (
          <div key={index} className="flex flex-col">
            <Label value={entry.name} position="center" />
          </div>
        ))}
      </Pie>
    </PieChart>
  );
}
