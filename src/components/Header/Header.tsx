import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, LayoutDashboard, FileCog, FolderOpen, FileEdit, Send, Menu, X } from 'lucide-react';
import logo from '../../assets/metr-logo.png';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/doc-migration', label: 'DocMigration', icon: FileCog },
    { path: '/doc-manager', label: 'DocManager', icon: FolderOpen },
    { path: '/doc-editor', label: 'DocEditor', icon: FileEdit },
    { path: '/doc-publisher', label: 'DocPublisher', icon: Send },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-['Inter']">
      <header className="bg-white border-b border-black/10 px-4 lg:px-36">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MetR Logo" className="h-8" />
            <span className="font-semibold text-base text-[#0A0A0A]">User Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-[#9810FA] text-xs font-semibold flex items-center justify-center">JD</div>
              <span className="text-sm text-[#0A0A0A] mx-2">John Doe</span>
              <LayoutGrid size={16} className="text-[#6A7282]" />
            </div>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <nav className="border-t border-black/10 hidden lg:flex items-center">
          {navItems.map(({ path, label, icon: Icon }) => (
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
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-black/10 pb-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`${
                  location.pathname === path
                    ? 'text-[#5F4050] bg-[#F5E6ED] font-medium'
                    : 'text-[#6A7282]'
                } text-sm px-4 py-3 flex items-center gap-2 min-h-[44px]`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>
    </div>
  );
}
