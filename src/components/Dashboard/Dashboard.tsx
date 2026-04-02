import { useState } from 'react';
import { Bell, BarChart2, Table as TableIcon, Activity, ScrollText } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import projectIcon from '../../assets/Project-Icon.png';
import releasesIcon from '../../assets/Releases-Icon.png';
import creditIcon from '../../assets/Credit-Remaining-Icon.png';

const chartData = [
  { date: '2025-12-01', html5: 12, metrHtml5: 8, metrPdf: 15 },
  { date: '2025-12-05', html5: 18, metrHtml5: 12, metrPdf: 20 },
  { date: '2025-12-10', html5: 15, metrHtml5: 18, metrPdf: 25 },
  { date: '2025-12-15', html5: 22, metrHtml5: 15, metrPdf: 18 },
];

const tableData = [
  { date: '2025-12-01', html5: 0, metrHtml5: 0, metrPdf: 0 },
  { date: '2025-12-05', html5: 0, metrHtml5: 0, metrPdf: 0 },
  { date: '2025-12-10', html5: 1, metrHtml5: 15, metrPdf: 0.5 },
  { date: '2025-12-15', html5: 0, metrHtml5: 0, metrPdf: 0 },
];

const activities = [
  { project: 'Project Alpha', action: 'Document Migrated', user: 'John Doe', date: '2025-12-15', time: '10:30 AM' },
  { project: 'Project Beta', action: 'Release Published', user: 'Jane Smith', date: '2025-12-14', time: '03:45 PM' },
  { project: 'Project Gamma', action: 'Document Edited', user: 'Mike Johnson', date: '2025-12-13', time: '11:20 AM' },
  { project: 'Project Delta', action: 'Document Created', user: 'Sarah Williams', date: '2025-12-12', time: '09:15 AM' },
];

const releases = [
  { title: 'Default Publisher', projectName: 'Docx', outputFormat: 'html5', ditaVersion: '3.6.1', createdAt: '2025-07-07 11:11 AM' },
  { title: 'Default Publisher of Printer Docx to HTML', projectName: 'Docx', outputFormat: 'html5', ditaVersion: '3.6.1', createdAt: '2025-06-11 12:44 PM' },
  { title: 'Custom Publisher HTML with changes in Checking paper', projectName: 'Printer', outputFormat: 'metr.html5', ditaVersion: '3.6.1', createdAt: '2025-06-05 3:28 PM' },
  { title: 'Custom Publisher HTML with changes in Checking paper', projectName: 'Printer', outputFormat: 'metr.html5', ditaVersion: '3.6.1', createdAt: '2025-06-05 3:22 PM' },
  { title: 'Custom Publisher HTML', projectName: 'Printer', outputFormat: 'metr.pdf', ditaVersion: '3.6.1', createdAt: '2025-06-05 3:14 PM' },
];

const MetricCard = ({ bgColor, innerBg, icon, label, value, valueColor }: any) => (
  <div className={`w-full sm:w-[268px] h-[91px] ${bgColor} rounded-[10px] relative overflow-hidden flex items-center`}>
    <div className={`absolute left-0 w-[72%] sm:w-[193px] h-full ${innerBg} rounded-[10px] flex flex-col justify-center px-4 gap-1 z-10`}>
      <span className="font-bold text-base text-[#0A0A0A]">{label}</span>
      <img src={icon} alt={label} className="w-[31px] h-[31px]" />
    </div>
    <span className={`font-bold text-2xl ${valueColor} absolute right-4 z-20`}>{value}</span>
  </div>
);

const NotificationsCard = () => (
  <div className="w-full sm:w-[220px] h-[91px] bg-white border border-black/10 rounded-[10px] p-3 relative">
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
>>>>>>> upstream/krishnab1
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
    <div className="px-4 sm:px-10 lg:px-40 py-6 lg:py-11">
      <h1 className="font-bold text-2xl text-[#5F4050] mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-row gap-4 sm:gap-5 mb-6">
        <MetricCard bgColor="bg-[#3EB33E]" innerBg="bg-[#9AF1BA]" icon={projectIcon} label="Projects" value="3" valueColor="text-[#FAEBFF]" />
        <MetricCard bgColor="bg-[#C470E0]" innerBg="bg-[#F2CCFF]" icon={releasesIcon} label="Releases" value="14" valueColor="text-[#FAEBFF]" />
        <div className="w-full xl:w-[276px] h-[93px] bg-[#FFB153] rounded-[10px] relative overflow-hidden">
          <div className="absolute left-0 w-[72%] sm:w-[199px] h-full bg-[#FFC989] rounded-[10px] flex flex-col justify-center px-4 gap-1 z-10">
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
>>>>>>> upstream/krishnab1
            <span className="font-bold text-base text-[#0A0A0A]">Credits Remaining</span>
            <img src={creditIcon} alt="Credits" className="w-[31px] h-[31px]" />
          </div>
          <div className="absolute right-0 w-[61px] h-full flex items-center justify-center z-20">
            <span className="font-bold text-[21px] leading-[28px] text-white">28%</span>
          </div>
        </div>
        <NotificationsCard />
      </div>

      <div className="bg-white border border-[#E2E8F0]/60 rounded-2xl p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <span className="text-base font-medium text-[#0F172B]">Releases by Output Format</span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
              <button onClick={() => setViewMode('chart')} className={`${viewMode === 'chart' ? 'bg-white shadow text-[#0F172B]' : 'text-[#62748E]'} rounded-lg px-3 py-1 text-sm flex items-center gap-1 min-h-[36px]`}>
                <BarChart2 size={14} />
                Chart
              </button>
              <button onClick={() => setViewMode('table')} className={`${viewMode === 'table' ? 'bg-white shadow text-[#0F172B]' : 'text-[#62748E]'} rounded-lg px-3 py-1 text-sm flex items-center gap-1 min-h-[36px]`}>
                <Table size={14} />
              <button onClick={() => setViewMode('table')} className={`${viewMode === 'table' ? 'bg-white shadow text-[#0F172B]' : 'text-[#62748E]'} rounded-lg px-3 py-1 text-sm flex items-center gap-1`}>
                <TableIcon size={14} />
>>>>>>> upstream/krishnab1
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
          <div className="bg-[#FFFFFF66] rounded-2xl p-2 sm:p-6 overflow-x-auto">
            <table className="w-full border-collapse min-w-[400px]">
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
          <button onClick={() => setActiveTab('activities')} className={`flex-1 ${activeTab === 'activities' ? 'text-[#5F4050] border-b-2 border-[#5F4050]' : 'text-[#45556C]'} text-sm sm:text-base py-4 text-center flex items-center justify-center gap-1.5 min-h-[44px]`}>
            <Activity size={15} />
            <span className="hidden sm:inline">Recent </span>Activities
          </button>
          <button onClick={() => setActiveTab('release')} className={`flex-1 ${activeTab === 'release' ? 'text-[#5F4050] border-b-2 border-[#5F4050]' : 'text-[#45556C]'} text-sm sm:text-base py-4 text-center flex items-center justify-center gap-1.5 min-h-[44px]`}>
            <ScrollText size={15} />
            <span className="hidden sm:inline">Recent </span>Release Log
          </button>
        </div>
        <div className="px-2 sm:px-6 pb-6 overflow-x-auto">
          {activeTab === 'activities' ? (
            <table className="w-full border-collapse min-w-[600px]">
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
                {ACTIVITIES.map((activity, idx) => (
                  <tr key={idx} className="border-b border-[#F1F5F9]">
                    <td className="px-4 py-3 text-[#0F172A] font-medium">{activity.project}</td>
                    <td className="px-4 py-3 text-[#45556C] text-base">{activity.action}</td>
                    <td className="px-4 py-3 text-[#45556C] text-base">{activity.user}</td>
                    <td className="px-4 py-3 text-[#45556C] text-base">{activity.date}</td>
                    <td className="px-4 py-3 text-[#45556C] text-base">{activity.time}</td>
                    <td className="px-4 py-3">
                      <button className="w-8 h-8 min-w-[44px] min-h-[44px] rounded-lg border border-[#E2E8F0] flex items-center justify-center hover:bg-gray-50">
                        <MoreVertical size={14} className="text-[#45556C]" />
                      </button>
                      <Button
                        variant="custom"
                        size="custom"
                        className="w-7 h-7 rounded-lg border border-[#E2E8F0] hover:bg-gray-50"
                        icon={<MoreVertical size={14} className="text-[#45556C]" />}
                      />
>>>>>>> upstream/krishnab1
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Release Title</th>
                  <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Project Name</th>
                  <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Output Format</th>
                  <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">DITA OT Version</th>
                  <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Created At</th>
                  <th className="font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-left">Download</th>
                </tr>
              </thead>
              <tbody>
                {RELEASES.map((release, idx) => (
                  <tr key={idx} className="border-b border-[#F1F5F9]">
                    <td className="px-4 py-3 text-[#0F172A] font-medium">{release.title}</td>
                    <td className="px-4 py-3 text-[#45556C] text-base">{release.projectName}</td>
                    <td className="px-4 py-3 text-[#45556C] text-base">{release.outputFormat}</td>
                    <td className="px-4 py-3 text-[#45556C] text-base">{release.ditaVersion}</td>
                    <td className="px-4 py-3 text-[#45556C] text-base">{release.createdAt}</td>
                    <td className="px-4 py-3">
                      <Button
                        variant="custom"
                        size="custom"
                        className="w-8 h-8 rounded-lg bg-[#5F4050] hover:bg-[#4a3340]"
                        icon={<Download size={16} className="text-white" />}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Table columns={ACTIVITY_COLUMNS} data={ACTIVITIES} />
          ) : (
            <Table columns={RELEASE_COLUMNS} data={RELEASES} />
          )}
        </div>
      </div>
    </PageContainer>
  );
}
