import { Banknote } from 'lucide-react';
import { Users } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { Tags } from 'lucide-react';
import { Wallet } from 'lucide-react';

const TopCards = () => {
  return (
    <div className="grid gap-[17px] mt-4 lg:grid-cols-4 lg:-ml-6 p-6 ">
      <div className="lg:col-span-[272px] bg-white rounded-xl overflow-hidden border-solid  border-2 border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="mb-2 w-12 h-12 text-white rounded-full bg-[#7FCD93] flex items-center justify-center">
            <Banknote />
          </div>
          <p className="text-gray-700 text-sm">Total Revenues</p>
          <div className="flex justify-between">
            <div className="font-bold text-xl mb-2">$2,129,430</div>
            <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mr-2 mb-2">
              +2.5%
            </span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-[272px] bg-white rounded-xl overflow-hidden border-solid  border-2 border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="mb-2 w-12 h-12 text-white  rounded-full bg-[#DEBF85] flex items-center justify-center">
            <Tags />
          </div>
          <p className="text-gray-700 text-sm">Total Transactions</p>
          <div className="flex justify-between">
            <div className="font-bold text-xl mb-2">1,520</div>
            <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mr-2 mb-2">
              +1.7%
            </span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-[272px] bg-white rounded-xl overflow-hidden border-solid  border-2 border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="mb-2 w-12 h-12 text-white rounded-full bg-[#ECA4A4] flex items-center justify-center">
            <ThumbsUp />
          </div>
          <p className="text-gray-700 text-sm">Total Likes</p>
          <div className="flex justify-between">
            <div className="font-bold text-xl mb-2">9,721</div>
            <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mr-2 mb-2">
              +1.4%
            </span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-[272px] bg-white rounded-xl overflow-hidden border-solid  border-2 border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="mb-2 w-12 h-12 text-white rounded-full bg-[#A9B0E5] flex items-center justify-center">
            <Users />
          </div>
          <p className="text-gray-700 text-sm">Total Users</p>
          <div className="flex justify-between">
            <div className="font-bold text-xl mb-2">9,721</div>
            <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mr-2 mb-2">
              +4.2%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
