import { Search, RefreshCw, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import PageHeader from '../common/PageHeader';
import PageContainer from '../common/PageContainer';
import { PROJECT_LIST } from '../../constants/projects';

export default function DocManager() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <PageHeader
        title="DocManager"
        description="Manage documents efficiently"
      />

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 sm:mb-10">
        <div className="relative w-full sm:w-[384px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C4A8C8]" size={18} />
          <input
            type="text"
            placeholder="Search Projects"
            className="w-full h-[42px] pt-2 pr-4 pb-2 pl-10 bg-[#FFF0F7] border border-[#E8D4E8] rounded-[10px] text-[#64748B] placeholder:text-[#C4A8C8] focus:outline-none"
          />
        </div>
        <Button
          variant="outline"
          size="custom"
          className="px-6 py-3 rounded-xl gap-2 min-h-[44px]"
          icon={<RefreshCw size={16} />}
        >
          <span className="font-normal text-[15px]">Refresh</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 mb-20">
        {PROJECT_LIST.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl border border-[#E5E5E5] p-6 w-full lg:w-[351.66px] min-h-[243px] flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div className="w-[48px] h-[48px] bg-[#FFF0F7] rounded-xl flex items-center justify-center">
                <FileText className="text-[#5C3D4F]" size={22} />
              </div>
              <span className="px-3 py-1 bg-[#F5E8F0] text-[#5C3D4F] text-[13px] font-normal rounded-md">{project.status}</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#0F172A] mb-4">{project.name}</h3>
            <div className="mb-auto">
              <p className="text-[13px] text-[#6B7C93] mb-1">Total Users:</p>
              <p className="text-[15px] font-bold text-[#0F172A]">{project.users}</p>
            </div>
            <div className="flex items-center justify-between pt-3">
              <div className="w-[34px] h-[34px] bg-[#6B4458] rounded-full flex items-center justify-center text-white text-[12px] font-medium">U1</div>
              <button
                onClick={() => navigate(`/doc-manager/${project.id}`)}
                className="text-[#6B4458] font-normal text-[13px] hover:underline flex items-center gap-1 min-h-[44px]"
              >
                View details
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-3 pr-2 mt-12">
        <button className="w-[44px] h-[44px] bg-[#E8E8E8] rounded-full flex items-center justify-center hover:bg-[#D8D8D8] transition-colors">
          <ChevronLeft size={18} className="text-[#6B7C93]" />
        </button>
        <button className="w-[44px] h-[44px] bg-[#6B4458] text-white rounded-full flex items-center justify-center font-medium text-[14px]">1</button>
        <button className="w-[44px] h-[44px] bg-[#E8E8E8] rounded-full flex items-center justify-center hover:bg-[#D8D8D8] transition-colors">
          <ChevronRight size={18} className="text-[#6B7C93]" />
        </button>
      </div>
    </PageContainer>
  );
}
