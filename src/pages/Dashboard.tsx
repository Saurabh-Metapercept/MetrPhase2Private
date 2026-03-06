import { useState } from 'react';
import { FileText, Rocket, Wallet, Bell, BarChart2, Table, Activity, ScrollText, MoreVertical } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { date: '2025-12-01', html5: 12, metrHtml5: 8, metrPdf: 15 },
  { date: '2025-12-05', html5: 18, metrHtml5: 12, metrPdf: 20 },
  { date: '2025-12-10', html5: 15, metrHtml5: 18, metrPdf: 25 },
  { date: '2025-12-15', html5: 22, metrHtml5: 15, metrPdf: 18 },
];

const activities = [
  { project: 'Project Alpha', action: 'Document Migrated', user: 'John Doe', date: '2025-12-15', time: '10:30 AM' },
  { project: 'Project Beta', action: 'Release Published', user: 'Jane Smith', date: '2025-12-14', time: '03:45 PM' },
  { project: 'Project Gamma', action: 'Document Edited', user: 'Mike Johnson', date: '2025-12-13', time: '11:20 AM' },
  { project: 'Project Delta', action: 'Document Created', user: 'Sarah Williams', date: '2025-12-12', time: '09:15 AM' },
];

const MetricCard = ({ bgColor, innerBg, icon: Icon, iconColor, label, value, valueColor }: any) => (
  <div className={`w-[268px] h-[91px] ${bgColor} rounded-[10px] relative overflow-hidden flex items-center justify-end`}>
    <div className={`absolute left-0 w-[193px] h-full ${innerBg} rounded-[10px] flex flex-col justify-center px-4 gap-1 z-10`}>
      <Icon size={18} strokeWidth={2} className={iconColor} />
      <span className="font-bold text-base text-[#0A0A0A]">{label}</span>
    </div>
    <span className={`font-bold text-2xl ${valueColor} pr-4 z-20`}>{value}</span>
  </div>
);

const NotificationsCard = () => (
  <div className="w-[220px] h-[91px] bg-white border border-black/10 rounded-[10px] p-3 relative">
    <div className="absolute top-2 right-2 flex items-center gap-1">
      <Bell size={16} className="text-[#314158]" />
      <span className="bg-[#90A1B9] text-white text-[10px] rounded-full px-1">3</span>
    </div>
    <h3 className="font-bold text-base text-[#314158]">Notifications</h3>
    <p className="text-xs font-light text-[#314158] mt-1">You have 3 unread messages</p>
  </div>
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'activities' | 'release'>('activities');
  const [viewMode, setViewMode] = useState<'chart' | 'table'>('chart');

  return (
    <div className="px-40 py-11">
      <h1 className="font-bold text-2xl text-[#5F4050] mb-6">Dashboard</h1>

      <div className="flex gap-5 mb-6">
        <MetricCard bgColor="bg-[#3EB33E]" innerBg="bg-[#9AF1BA]" icon={FileText} iconColor="text-[#3EB33E]" label="Projects" value="3" valueColor="text-[#FAEBFF]" />
        <MetricCard bgColor="bg-[#C470E0]" innerBg="bg-[#F2CCFF]" icon={Rocket} iconColor="text-[#C470E0]" label="Releases" value="14" valueColor="text-[#FAEBFF]" />
        <div className="w-[276px] h-[93px] bg-[#FFB153] rounded-[10px] relative overflow-hidden flex items-center justify-end">
          <div className="absolute left-0 w-[199px] h-full bg-[#FFC989] rounded-[10px] flex flex-col justify-center px-4 gap-1 z-10">
            <Wallet size={18} className="text-[#FFB153]" />
            <span className="font-bold text-base text-[#0A0A0A]">Credits Remaining</span>
          </div>
          <span className="font-bold text-2xl text-white pr-4 z-20">28%</span>
        </div>
        <NotificationsCard />
      </div>

      <div className="bg-white border border-[#E2E8F0]/60 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-base font-medium text-[#0F172B]">Releases by Output Format</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#FF6900]"></div>
                <span className="text-xs text-[#62748E]">html5</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#00C950]"></div>
                <span className="text-xs text-[#62748E]">metr.html5</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                <span className="text-xs text-[#62748E]">metr.pdf</span>
              </div>
            </div>
            <div className="bg-white/50 border border-[#E2E8F0]/50 rounded-[10px] p-1 flex gap-1">
              <button onClick={() => setViewMode('chart')} className={`${viewMode === 'chart' ? 'bg-white shadow text-[#0F172B]' : 'text-[#62748E]'} rounded-lg px-3 py-1 text-sm flex items-center gap-1`}>
                <BarChart2 size={14} />
                Chart
              </button>
              <button onClick={() => setViewMode('table')} className={`${viewMode === 'table' ? 'bg-white shadow text-[#0F172B]' : 'text-[#62748E]'} rounded-lg px-3 py-1 text-sm flex items-center gap-1`}>
                <Table size={14} />
                Table
              </button>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={256}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="4 4" stroke="#5F4050" opacity={0.3} />
            <XAxis dataKey="date" tick={{ fill: '#64748B' }} />
            <YAxis label={{ value: 'Release Count', angle: -90, position: 'insideLeft', fill: '#64748B' }} tick={{ fill: '#64748B' }} />
            <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #E2E8F0' }} />
            <Line type="monotone" dataKey="html5" stroke="#FF6900" strokeWidth={2} />
            <Line type="monotone" dataKey="metrHtml5" stroke="#00C950" strokeWidth={2} />
            <Line type="monotone" dataKey="metrPdf" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl border border-[#E2E8F0]/60">
        <div className="border-b border-[#E2E8F0] flex">
          <button onClick={() => setActiveTab('activities')} className={`flex-1 ${activeTab === 'activities' ? 'text-[#5F4050] border-b-2 border-[#5F4050]' : 'text-[#45556C]'} text-base py-4 text-center flex items-center justify-center gap-1.5`}>
            <Activity size={15} />
            Recent Activities
          </button>
          <button onClick={() => setActiveTab('release')} className={`flex-1 ${activeTab === 'release' ? 'text-[#5F4050] border-b-2 border-[#5F4050]' : 'text-[#45556C]'} text-base py-4 text-center flex items-center justify-center gap-1.5`}>
            <ScrollText size={15} />
            Recent Release Log
          </button>
        </div>
        <div className="px-6 pb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Project Name</th>
                <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Action</th>
                <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">User</th>
                <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Date</th>
                <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Time</th>
                <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, idx) => (
                <tr key={idx} className="border-b border-[#F1F5F9]">
                  <td className="px-4 py-3 text-[#0F172A] font-medium">{activity.project}</td>
                  <td className="px-4 py-3 text-[#45556C] text-base">{activity.action}</td>
                  <td className="px-4 py-3 text-[#45556C] text-base">{activity.user}</td>
                  <td className="px-4 py-3 text-[#45556C] text-base">{activity.date}</td>
                  <td className="px-4 py-3 text-[#45556C] text-base">{activity.time}</td>
                  <td className="px-4 py-3">
                    <button className="w-7 h-7 rounded-lg border border-[#E2E8F0] flex items-center justify-center hover:bg-gray-50">
                      <MoreVertical size={14} className="text-[#45556C]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
