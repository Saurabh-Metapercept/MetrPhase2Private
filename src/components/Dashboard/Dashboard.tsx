import { useState } from 'react';
import { Bell, BarChart2, Table as TableIcon, Activity, ScrollText } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import MetricCard from '../common/MetricCard';
import Table from '../common/Table';
import PageHeader from '../common/PageHeader';
import PageContainer from '../common/PageContainer';
import { CHART_DATA, TABLE_DATA, ACTIVITIES, RELEASES } from '../../constants/dashboardData';
import { ACTIVITY_COLUMNS, RELEASE_COLUMNS } from '../../constants/tableColumns';
import projectIcon from '../../assets/Project-icon.svg';
import releasesIcon from '../../assets/Releases-icon.svg';
import creditIcon from '../../assets/Credit-Remaining-icon.svg';

const NotificationsCard = () => (
  <div className="w-[220px] h-[91px] bg-white border border-black/10 rounded-[10px] p-3 relative flex-shrink-0">
    <div className="absolute top-2 right-2 flex items-center gap-0.5">
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
    <PageContainer>
      <PageHeader 
        title="Dashboard" 
        description="" 
      />

      <div className="flex gap-5 mb-6 w-fit">
        <MetricCard bgColor="bg-[#3EB33E]" innerBg="bg-[#9AF1BA]" icon={projectIcon} label="Projects" value="3" valueColor="text-[#FAEBFF]" />
        <MetricCard bgColor="bg-[#C470E0]" innerBg="bg-[#F2CCFF]" icon={releasesIcon} label="Releases" value="14" valueColor="text-[#FAEBFF]" />
        <div className="w-[276px] h-[93px] bg-[#FFB153] rounded-[10px] relative overflow-hidden flex-shrink-0">
          <div className="absolute left-0 w-[199px] h-full bg-[#FFC989] rounded-[10px] flex flex-col justify-center px-4 gap-1 z-10">
            <span className="font-bold text-base text-[#0A0A0A]">Credits Remaining</span>
            <img src={creditIcon} alt="Credits" className="w-[31px] h-[31px]" />
          </div>
          <div className="absolute right-0 w-[61px] h-full flex items-center justify-center z-20">
            <span className="font-bold text-[21px] leading-[28px] text-white">28%</span>
          </div>
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
                <TableIcon size={14} />
                Table
              </button>
            </div>
          </div>
        </div>
        {viewMode === 'chart' ? (
          <ResponsiveContainer width="100%" height={256}>
            <LineChart data={CHART_DATA} margin={{ top: 5, right: 50, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="4 4" stroke="#5F4050" opacity={0.3} />
              <XAxis dataKey="date" tick={{ fill: '#64748B' }} />
              <YAxis label={{ value: 'Release Count', angle: -90, position: 'insideLeft', fill: '#64748B', style: { textAnchor: 'middle' } }} tick={{ fill: '#64748B' }} />
              <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #E2E8F0' }} />
              <Line type="monotone" dataKey="html5" stroke="#FF6900" strokeWidth={2} />
              <Line type="monotone" dataKey="metrHtml5" stroke="#00C950" strokeWidth={2} />
              <Line type="monotone" dataKey="metrPdf" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="bg-[#FFFFFF66] rounded-2xl p-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="font-bold text-sm text-[#314158] px-4 py-3 text-left">DATE</th>
                  <th className="font-bold text-sm text-[#314158] px-4 py-3 text-left">
                    <span className="bg-[#F5E6ED] px-3 py-1 rounded">HTML5</span>
                  </th>
                  <th className="font-bold text-sm text-[#314158] px-4 py-3 text-left">
                    <span className="bg-[#F5E6ED] px-3 py-1 rounded">METR.HTML5</span>
                  </th>
                  <th className="font-bold text-sm text-[#314158] px-4 py-3 text-left">
                    <span className="bg-[#F5E6ED] px-3 py-1 rounded">METR.PDF</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_DATA.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#E2E8F0]">
                    <td className="px-4 py-3 text-[#314158] text-sm">{row.date}</td>
                    <td className="px-4 py-3 text-[#314158] text-sm">{row.html5}</td>
                    <td className="px-4 py-3 text-[#314158] text-sm">{row.metrHtml5}</td>
                    <td className="px-4 py-3 text-[#314158] text-sm">{row.metrPdf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
          {activeTab === 'activities' ? (
            <Table columns={ACTIVITY_COLUMNS} data={ACTIVITIES} />
          ) : (
            <Table columns={RELEASE_COLUMNS} data={RELEASES} />
          )}
        </div>
      </div>
    </PageContainer>
  );
}
