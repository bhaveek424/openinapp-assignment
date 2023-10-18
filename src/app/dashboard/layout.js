import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="h-full">
      <div className="hidden   md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gradient-to-r from-[#4285F4] to-[#3C83F9] md:h-calc(100vh - 9rem) md:top-[40px] md:bottom-[40px] md:left-[43px] md:rounded-xl md:z-999 md:px-0.5rem md:py-1.5rem  md:w-[280px]">
        <Sidebar />
      </div>
      <main className="md:pl-[390px]">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
