import { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FileText, Home, Undo, Redo, Bold, Italic, Underline, Strikethrough, List, ListOrdered, AlignLeft, Indent, Table, Code, Link, Image, Superscript, PilcrowSquare } from 'lucide-react';

export default function DefaultEditor() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root', 'printer_user_x_guide', 'adjusting_print_quality', 'checking_the_number_c']));

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      {/* LEFT PANEL - File Tree */}
      <div className="w-full md:w-[200px] bg-white border-b md:border-b-0 md:border-r border-[#E5E7EB] flex flex-col md:max-h-screen">
        {/* Header */}
        <div className="h-[42px] bg-[#F5E6ED] flex flex-col items-center justify-center">
          <div className="text-[14px] font-bold text-[#5F4050] leading-[150%]">DITAMAP</div>
          <div className="text-[14px] font-bold text-[#5F4050] leading-[150%]">Printer</div>
        </div>

        {/* File Tree */}
        <div className="flex-1 overflow-y-auto pt-1 max-h-[200px] md:max-h-none">
          <TreeItem level={0} label="Docx-Migration" isFolder expanded={expandedFolders.has('root')} onToggle={() => toggleFolder('root')}>
            <TreeItem level={1} label="media" isFolder />
          </TreeItem>

          <TreeItem level={0} label="printer_user_x_guide" isFolder expanded={expandedFolders.has('printer_user_x_guide')} onToggle={() => toggleFolder('printer_user_x_guide')}>
            <TreeItem level={1} label="adjusting_print_quality" isFolder expanded={expandedFolders.has('adjusting_print_quality')} onToggle={() => toggleFolder('adjusting_print_quality')}>
              <TreeItem level={2} label="adjusting_print_quality.c..." isFile />
              <TreeItem level={2} label="checking_the_number_c..." isFolder expanded={expandedFolders.has('checking_the_number_c')} onToggle={() => toggleFolder('checking_the_number_c')}>
                <TreeItem level={3} label="checking_the_numbe..." isFile />
                <TreeItem level={3} label="checking_the_numbe..." isFolder />
                <TreeItem level={3} label="checking_the_sheet_..." isFolder />
                <TreeItem level={3} label="checking_the_sheet_..." isFolder />
                <TreeItem level={3} label="checking_the_numbe..." isFile />
              </TreeItem>
              <TreeItem level={2} label="cleaning_the_paper_gu..." isFile />
              <TreeItem level={2} label="cleaning_the_print_hea..." isFolder>
                <TreeItem level={3} label="cleaning_the_print_he..." isFile />
              </TreeItem>
            </TreeItem>

            <TreeItem level={1} label="print_head_alignment" isFolder>
              <TreeItem level={2} label="aligning_the_print_he..." isFolder>
                <TreeItem level={3} label="print_head_alignmen..." isFile />
              </TreeItem>
            </TreeItem>

            <TreeItem level={1} label="print_head_maintenance" isFolder>
              <TreeItem level={2} label="power_cleaning" isFolder />
              <TreeItem level={2} label="print_head_cleaning" isFolder>
                <TreeItem level={3} label="print_head_maintena..." isFile />
              </TreeItem>
              <TreeItem level={2} label="print_head_nozzle_che..." isFile />
            </TreeItem>
          </TreeItem>
        </div>
      </div>

      {/* CENTER PANEL - Editor */}
      <div className="flex-1 flex flex-col bg-white min-h-[400px] md:min-h-0">
        {/* Toolbar */}
        <div className="h-[48px] border-b border-[#E5E7EB] flex items-center px-4 gap-1 sm:gap-2 overflow-x-auto">
          <button className="p-1 hover:bg-gray-100 rounded"><Undo size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Table size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Bold size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Italic size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Underline size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Strikethrough size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><ListOrdered size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><List size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><AlignLeft size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Indent size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Code size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Redo size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Image size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Link size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><Superscript size={16} className="text-[#6A7282]" /></button>
          <button className="p-1 hover:bg-gray-100 rounded"><PilcrowSquare size={16} className="text-[#6A7282]" /></button>
          <div className="flex-1"></div>
          <button className="p-1 hover:bg-gray-100 rounded"><Home size={16} className="text-[#6A7282]" /></button>
        </div>

        {/* Editor Body - Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white">
          <div className="mb-6">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" fill="#F5E6ED" opacity="0.3"/>
              <path d="M70 120 Q100 80 130 120" stroke="#5F4050" strokeWidth="3" fill="none"/>
              <circle cx="85" cy="95" r="8" fill="#5F4050"/>
              <circle cx="115" cy="95" r="8" fill="#5F4050"/>
              <rect x="60" y="140" width="80" height="40" rx="5" fill="#5F4050" opacity="0.2"/>
            </svg>
          </div>
          <p className="text-[20px] text-[#5F4050] font-normal tracking-[-0.449px] leading-[30px]">
            Please select a valid XML file.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL - Properties */}
      <div className="w-full md:w-[200px] bg-white border-t md:border-t-0 md:border-l border-[#E5E7EB] flex flex-col">
        {/* Tab Bar */}
        <div className="h-[64px] border-b border-[#E5E7EB] px-2 pt-2">
          <div className="flex flex-col gap-1">
            <button className="bg-white border border-[#D1D5DC] border-b-0 rounded-t px-3 py-1 text-[11px] font-medium text-[#1E2939]">
              DocManager
            </button>
            <div className="flex gap-1">
              <button className="bg-[#F9FAFB] border border-[#E5E7EB] border-b-0 rounded-t px-2 py-1 text-[11px] font-medium text-[#6A7282]">
                DocPublisher
              </button>
              <button className="bg-[#F9FAFB] border border-[#E5E7EB] border-b-0 rounded-t px-2 py-1 text-[11px] font-medium text-[#6A7282]">
                DocStyler
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="h-auto min-h-[44px] border-b border-[#F3F4F6] flex items-center gap-2 px-3 py-2 flex-wrap">
          <button className="bg-[#F5E6ED] rounded-sm px-2 py-1 text-[12px] font-medium text-[#5F4050] min-h-[32px]">
            Add Child Tag
          </button>
          <button className="bg-[#F5E6ED] rounded px-2 py-1 text-[12px] font-medium text-[#4A5565] min-h-[32px]">
            Add Attribute
          </button>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative mb-4">
            <div className="w-[80px] h-[80px] rounded-full bg-[#F5E6ED] flex items-center justify-center">
              <FileText size={40} className="text-[#5F4050]" strokeWidth={3.33} />
            </div>
            <div className="absolute -top-1 -right-1 w-[28px] h-[28px] rounded-full bg-[#F5E6ED] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#5F4050" strokeWidth="2"/>
                <path d="M10 10L14 14" stroke="#5F4050" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <p className="text-[12px] text-[#99A1AF] text-center">
            Please select a valid tag.
          </p>
        </div>
      </div>
    </div>
  );
}

interface TreeItemProps {
  level: number;
  label: string;
  isFolder?: boolean;
  isFile?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
}

function TreeItem({ level, label, isFolder, isFile, expanded, onToggle, children }: TreeItemProps) {
  return (
    <>
      <div 
        className="flex items-center min-h-[36px] w-full hover:bg-gray-50 cursor-pointer"
        style={{ paddingLeft: `${level * 14 + 4}px` }}
        onClick={onToggle}
      >
        {isFolder && (
          <>
            {expanded ? <ChevronDown size={12} className="text-[#6A7282] mr-1" /> : <ChevronRight size={12} className="text-[#6A7282] mr-1" />}
            <Folder size={14} className="text-[#5F4050] mr-1" />
          </>
        )}
        {isFile && (
          <>
            <span className="w-[12px] mr-1"></span>
            <FileText size={14} className="text-[#2B7FFF] mr-1" />
          </>
        )}
        <span className="text-[11px] text-[#1E2939] leading-[16px] tracking-[0.064px] truncate">
          {label}
        </span>
      </div>
      {isFolder && expanded && children}
    </>
  );
}
