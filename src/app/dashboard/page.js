import { Bell } from 'lucide-react';
import Activities from '../components/Activities';
import DetailsCard from '../components/DetailsCard';
import Piechart from '../components/PieChart';
import Sidebar from '../components/Sidebar';
import TopCards from '../components/TopCards';
import { Searchbar } from '../components/Searchbar';
import Avatar from '../components/Avatar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { CircleDot } from 'lucide-react';
import { Circle } from 'lucide-react';

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/login');
  }

  return (
    <div className="h-[calc(100vh-40px)] pt-[40px] ">
      <div className="flex justify-between px-6 lg:-ml-6 items-center ">
        <h1 className="font-bold text-2xl">Dashboard </h1>
        <div className="flex gap-3 justify-center items-center">
          <Searchbar />
          <Bell />
          <Avatar />
        </div>
      </div>
      <TopCards />
      <div className="lg:-mt-2 p-6 lg:-ml-6 ">
        <div className="rounded-lg overflow-hidden border-solid bg-white border-2 border-gray-200 shadow-md p-10">
          <div className="pb-4 px-3">
            <h1 className="font-bold text-xl">Activities</h1>
            <span className="w-24 font-thin text-sm">May-June 2021</span>
          </div>
          <Activities />
        </div>
      </div>

      <div className="grid gap-8 lg:-mt-2 lg:grid-cols-2 lg:-ml-6 p-6 lg:mb-[40px]">
        <div className="h-[256px] rounded-lg overflow-hidden border-solid px-6 border-2 bg-white border-gray-200 shadow-sm">
          <div className="flex  justify-between px-10 mt-6">
            <h2 className="font-bold text-xl">Top Products</h2>
            <span className="w-22s font-thin text-sm">May-June 2021</span>
            {/* <Piechart /> */}
          </div>
          <div className="flex ">
            <Piechart />
            <div className="flex flex-col mx-auto items-center ">
              <div className="flex items-center mt-3 space-x-4">
                <div className={`w-3 h-3 rounded-full bg-[#98D89E]`}></div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">Basic tee</h3>
                  <p className="text-gray-500 text-sm">55%</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full bg-[#98D89E]`}></div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">Basic tee</h3>
                  <p className="text-gray-500 text-sm">55%</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full bg-[#98D89E]`}></div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">Basic tee</h3>
                  <p className="text-gray-500 text-sm">55%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-[272px] bg-white rounded-lg overflow-hidden border-solid  border-2 border-gray-200 shadow-sm">
          <DetailsCard />
        </div>
      </div>
    </div>
  );
}
