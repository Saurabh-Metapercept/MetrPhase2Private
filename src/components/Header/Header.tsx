import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/navigation';
import logo from '../../assets/metr-logo.svg';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const location = useLocation();

  return (
    <div className="bg-gray-50 min-h-screen font-['Inter']">
      <header className="h-28 bg-white border-b border-black/10 px-36">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MetR Logo" className="h-8" />
            <span className="font-semibold text-base text-[#0A0A0A]">User Dashboard</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-[#9810FA] text-xs font-semibold flex items-center justify-center">JD</div>
            <span className="text-sm text-[#0A0A0A] mx-2">John Doe</span>
            <LayoutGrid size={16} className="text-[#6A7282]" />
          </div>
        </div>
        <nav className="border-t border-black/10 flex items-center">
          {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`${
                location.pathname === path
                  ? 'text-[#5F4050] border-b-2 border-[#5F4050] font-medium'
                  : 'text-[#6A7282]'
              } text-sm px-3 py-2 flex items-center gap-1.5`}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
