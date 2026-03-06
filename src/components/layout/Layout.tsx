import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, LayoutDashboard, FileCog, FolderOpen, FileEdit, Send, Copyright } from 'lucide-react';
import logo from '../../assets/metr-logo.png';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/doc-migration', label: 'DocMigration', icon: FileCog },
    { path: '/doc-manager', label: 'DocManager', icon: FolderOpen },
    { path: '/doc-editor', label: 'DocEditor', icon: FileEdit },
    { path: '/doc-publisher', label: 'DocPublisher', icon: Send },
  ];

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
      </header>

      <main>{children}</main>

      <footer className="bg-white/50 border-t border-[#E2E8F0]/60 py-4 px-8">
        <div className="flex justify-center items-center gap-1 text-sm text-[#45556C]">
          <Copyright size={13} className="text-[#45556C]" />
          <span>2025</span>
          <span className="font-medium">Metapercept Technology Services LLP</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}
