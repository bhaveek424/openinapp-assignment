import { Search } from 'lucide-react';

export function Searchbar() {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="flex justify-center w-full h-[50px] bg-white rounded-lg">
          <div className="flex justify-center w-[90%] h-[50px] bg-white rounded-lg">
            <input
              className="w-[90%] h-[50px] bg-white rounded-lg hidden sm:block"
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className=" flex justify-center text-[#858585] items-center  pr-6">
            <Search classname="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
