'use client';
import { CalendarClock } from 'lucide-react';
import { Settings } from 'lucide-react';
import { UserCircle } from 'lucide-react';
import { Tags } from 'lucide-react';
import { PieChart } from 'lucide-react';
import Link from 'next/link';
import { cn } from '../lib/utils';
import { usePathname } from 'next/navigation';

export const routes = [
  {
    label: 'Dashboard',
    icon: PieChart,
    href: '/dashboard',
    color: 'text-white',
  },
  {
    label: 'Transactions',
    icon: Tags,
    href: '/conversation',
    color: 'text-white',
  },
  {
    label: 'Schedules',
    icon: CalendarClock,
    color: 'text-white',
    href: '/image',
  },
  {
    label: 'Users',
    icon: UserCircle,
    color: 'text-white',
    href: '/video',
  },
  {
    label: 'Settings',
    icon: Settings,
    color: 'text-white',
    href: '/music',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex absolute left-[17.86%]  flex-col py-[60px] justify-between h-full text-white  ">
      <div className=" flex flex-col gap-4">
        <h1 className=" font-bold text-4xl ">Board.</h1>
        <div className="space-y-4 pt-7  ">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group py-2 flex  w-full justify-start text-[18px] cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href ? 'font-bold' : '',
              )}>
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 -pl-2 mr-5', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-sm">
          <Link href="#">Help</Link>
        </h1>
        <h1 className="text-sm">
          <Link href="#">Contact Us</Link>
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
