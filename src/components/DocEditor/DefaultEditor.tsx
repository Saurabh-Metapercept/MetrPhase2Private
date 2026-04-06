import { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FileText, Home, Undo, Redo, Bold, Italic, Underline, Strikethrough, List, ListOrdered, AlignLeft, Indent, Table, Code, Link, Image, Superscript, PilcrowSquare } from 'lucide-react';

export default function DefaultEditor() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root', 'printer_user_x_guide', 'adjusting_print_quality', 'checking_the_number_c']));

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) newExpanded.delete(path);
    else newExpanded.add(path);
    setExpandedFolders(newExpanded);
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">

      {/* LEFT PANEL - 200px wide */}
      <div
        className="flex flex-col bg-white shrink-0"
        style={{ width: 200, borderRight: '1px solid #E5E7EB' }}
      >
        {/* Header: 199×41, bg #F5E6ED */}
        <div
          className="flex items-center justify-center shrink-0"
          style={{ width: 199, height: 41, background: '#F5E6ED' }}
        >
          <span
            style={{
              fontFamily: 'Inter', fontWeight: 700, fontSize: 14,
              lineHeight: '150%', textAlign: 'center', color: '#5F4050',
              whiteSpace: 'pre-line',
            }}
          >{'DITAMAP\nPrinter'}</span>
        </div>

        {/* File Tree: pt-1, scrollable */}
        <div className="flex-1 overflow-y-auto" style={{ paddingTop: 4 }}>
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

      {/* CENTER PANEL */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Toolbar: height 41px, bg #F5E6ED, border-bottom */}
        <div
          className="flex items-center shrink-0 overflow-x-auto"
          style={{
            height: 41, background: '#F5E6ED',
            borderBottom: '1px solid #E5E7EB',
            paddingLeft: 12, gap: 0,
          }}
        >
          {/* Group 1: Undo, Table */}
          <ToolBtn><Undo size={16} /></ToolBtn>
          <ToolBtn><Table size={16} /></ToolBtn>
          <Divider left={78} />
          {/* Group 2: Bold, Italic, Underline, Strikethrough, ListOrdered, List, AlignLeft, Indent */}
          <ToolBtn><Bold size={16} /></ToolBtn>
          <ToolBtn><Italic size={16} /></ToolBtn>
          <ToolBtn><Underline size={16} /></ToolBtn>
          <ToolBtn><Strikethrough size={16} /></ToolBtn>
          <Divider />
          <ToolBtn><ListOrdered size={16} /></ToolBtn>
          <ToolBtn><List size={16} /></ToolBtn>
          <ToolBtn><AlignLeft size={16} /></ToolBtn>
          <Divider />
          <ToolBtn><Indent size={16} /></ToolBtn>
          <ToolBtn><Code size={16} /></ToolBtn>
          <Divider />
          <ToolBtn><Redo size={16} /></ToolBtn>
          <ToolBtn><Image size={16} /></ToolBtn>
          <Divider />
          <ToolBtn><Link size={16} /></ToolBtn>
          <ToolBtn><Superscript size={16} /></ToolBtn>
          <Divider />
          <ToolBtn><PilcrowSquare size={16} /></ToolBtn>
          <div className="flex-1" />
          <ToolBtn><Home size={16} /></ToolBtn>
        </div>

        {/* Empty State */}
        <div
          className="flex-1 flex flex-col items-center justify-center bg-white"
          style={{ gap: 8 }}
        >
          {/* Illustration placeholder matching Figma 550×337 */}
          <div style={{ width: 550, height: 337, position: 'relative', overflow: 'hidden' }}>
            <svg width="550" height="337" viewBox="0 0 550 337" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Body */}
              <ellipse cx="200" cy="200" rx="160" ry="140" fill="#F5E6ED" opacity="0.4"/>
              {/* Torso */}
              <rect x="130" y="160" width="140" height="110" rx="8" fill="#5F4050"/>
              {/* Head */}
              <ellipse cx="200" cy="130" rx="45" ry="50" fill="#FEC3C1"/>
              {/* Hair */}
              <ellipse cx="200" cy="100" rx="48" ry="30" fill="#283237"/>
              {/* Eyes */}
              <circle cx="185" cy="125" r="6" fill="#283237"/>
              <circle cx="215" cy="125" r="6" fill="#283237"/>
              {/* Smile */}
              <path d="M185 145 Q200 158 215 145" stroke="#283237" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* Left arm */}
              <rect x="80" y="165" width="50" height="18" rx="9" fill="#FEC3C1"/>
              {/* Right arm */}
              <rect x="370" y="165" width="50" height="18" rx="9" fill="#FEC3C1"/>
              {/* Legs */}
              <rect x="155" y="265" width="35" height="60" rx="8" fill="#283237"/>
              <rect x="210" y="265" width="35" height="60" rx="8" fill="#283237"/>
              {/* Laptop */}
              <rect x="290" y="180" width="200" height="130" rx="6" fill="#5F4050"/>
              <rect x="298" y="188" width="184" height="110" rx="4" fill="#F9FAFA"/>
              {/* Screen lines */}
              <rect x="310" y="200" width="80" height="8" rx="2" fill="#F5E6ED"/>
              <rect x="310" y="214" width="120" height="8" rx="2" fill="#F5E6ED"/>
              <rect x="310" y="228" width="100" height="8" rx="2" fill="#F5E6ED"/>
              <rect x="310" y="242" width="60" height="8" rx="2" fill="#F5E6ED"/>
              {/* Laptop base */}
              <rect x="270" y="308" width="240" height="12" rx="4" fill="#D0D1D2"/>
            </svg>
          </div>
          <p
            style={{
              fontFamily: 'Inter', fontWeight: 400, fontSize: 20,
              lineHeight: '30px', letterSpacing: '-0.449219px',
              color: '#5F4050',
            }}
          >
            Please select a valid XML file.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL - 200px wide */}
      <div
        className="flex flex-col bg-white shrink-0"
        style={{ width: 200, borderLeft: '1px solid #E5E7EB' }}
      >
        {/* Tab bar: height 64px, border-bottom */}
        <div
          className="relative shrink-0"
          style={{ width: 199, height: 64, borderBottom: '1px solid #E5E7EB' }}
        >
          {/* DocManager tab: top row, left:8, top:8, 89.93×25.5 */}
          <button
            className="absolute"
            style={{
              left: 8, top: 8, width: 89.93, height: 25.5,
              background: '#FFFFFF',
              border: '1px solid #D1D5DC', borderBottom: 'none',
              borderRadius: '4px 4px 0 0',
              fontFamily: 'Inter', fontWeight: 500, fontSize: 11,
              lineHeight: '16px', letterSpacing: '0.0644531px',
              textAlign: 'center', color: '#1E2939',
            }}
          >DocManager</button>
          {/* DocPublisher tab: left:8, top:37.5, 93.44×25.5 */}
          <button
            className="absolute"
            style={{
              left: 8, top: 37.5, width: 93.44, height: 25.5,
              background: '#F9FAFB',
              border: '1px solid #E5E7EB', borderBottom: 'none',
              borderRadius: '4px 4px 0 0',
              fontFamily: 'Inter', fontWeight: 500, fontSize: 11,
              lineHeight: '16px', letterSpacing: '0.0644531px',
              textAlign: 'center', color: '#6A7282',
            }}
          >DocPublisher</button>
          {/* DocStyler tab: left:105.44, top:37.5, 74.73×25.5 */}
          <button
            className="absolute"
            style={{
              left: 105.44, top: 37.5, width: 74.73, height: 25.5,
              background: '#F9FAFB',
              border: '1px solid #E5E7EB', borderBottom: 'none',
              borderRadius: '4px 4px 0 0',
              fontFamily: 'Inter', fontWeight: 500, fontSize: 11,
              lineHeight: '16px', letterSpacing: '0.0644531px',
              textAlign: 'center', color: '#6A7282',
            }}
          >DocStyler</button>
        </div>

        {/* Action buttons row: height 35px, padding 8px 0 0 12px, gap 12px */}
        <div
          className="flex flex-row shrink-0"
          style={{
            width: 199, height: 35,
            padding: '8px 0 0 12px', gap: 12,
            borderBottom: '1px solid #F3F4F6',
          }}
        >
          <button
            style={{
              width: 84, height: 20,
              background: '#F5E6ED', borderRadius: 2, border: 'none',
              fontFamily: 'Inter', fontWeight: 500, fontSize: 12,
              lineHeight: '18px', textAlign: 'center', color: '#5F4050',
              cursor: 'pointer',
            }}
          >Add Child Tag</button>
          <button
            style={{
              width: 83, height: 20,
              background: '#F5E6ED', borderRadius: 3, border: 'none',
              fontFamily: 'Inter', fontWeight: 500, fontSize: 12,
              lineHeight: '18px', textAlign: 'center', color: '#4A5565',
              cursor: 'pointer',
            }}
          >Add Attribute</button>
        </div>

        {/* Empty state */}
        <div className="flex-1 flex flex-col items-center justify-center" style={{ position: 'relative' }}>
          {/* Icon circle: 80×80, centered */}
          <div style={{ position: 'relative', marginBottom: 16 }}>
            <div
              className="flex items-center justify-center"
              style={{ width: 80, height: 80, background: '#F5E6ED', borderRadius: '50%' }}
            >
              <FileText size={40} color="#5F4050" strokeWidth={3.33} />
            </div>
            {/* Search badge: 28×28, top:-4, left:56 */}
            <div
              className="absolute flex items-center justify-center"
              style={{
                width: 28, height: 28,
                background: '#F5E6ED', borderRadius: '50%',
                top: -4, left: 56,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="#5F4050" strokeWidth="1.33"/>
                <path d="M10 10L13.5 13.5" stroke="#5F4050" strokeWidth="1.33" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <p
            style={{
              fontFamily: 'Inter', fontWeight: 400, fontSize: 12,
              lineHeight: '18px', textAlign: 'center', color: '#99A1AF',
            }}
          >Please select a valid tag.</p>
        </div>
      </div>
    </div>
  );
}

function ToolBtn({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="hover:bg-white/40 rounded"
      style={{
        width: 28, height: 28,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
        padding: '6px 6px 0px',
        border: 'none', background: 'transparent', cursor: 'pointer',
        color: '#4A5565', flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}

function Divider({ left }: { left?: number }) {
  return (
    <div
      style={{
        width: 1, height: 20,
        background: '#E5E7EB',
        marginLeft: left ? 0 : 4, marginRight: 4,
        flexShrink: 0,
      }}
    />
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
  // Figma indent: level 0 → icon at left:4, level 1 → left:18, level 2 → left:32, level 3 → left:46
  // Each level adds 14px. Text starts at: level 0 → 38px, level 1 → 52px, level 2 → 66px, level 3 → 80px
  const chevronLeft = level * 14 + 4;
  const iconLeft = level * 14 + 18;
  const textLeft = level * 14 + 38;

  return (
    <>
      <div
        className="relative hover:bg-gray-50 cursor-pointer"
        style={{ width: 199, height: 18.5 }}
        onClick={onToggle}
      >
        {isFolder && (
          <>
            <span className="absolute" style={{ left: chevronLeft, top: 3.25, width: 12, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {expanded
                ? <ChevronDown size={12} color="#6A7282" />
                : <ChevronRight size={12} color="#6A7282" />}
            </span>
            <span className="absolute" style={{ left: iconLeft, top: 2.25, width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Folder size={14} color="#5F4050" />
            </span>
          </>
        )}
        {isFile && (
          <span className="absolute" style={{ left: iconLeft, top: 2.25, width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={14} color="#2B7FFF" />
          </span>
        )}
        <span
          className="absolute truncate"
          style={{
            left: textLeft, top: 1,
            fontFamily: 'Inter', fontWeight: 400, fontSize: 11,
            lineHeight: '16px', letterSpacing: '0.0644531px',
            color: isFile ? '#008236' : '#1E2939',
            maxWidth: `${199 - textLeft - 4}px`,
          }}
        >
          {label}
        </span>
      </div>
      {isFolder && expanded && children}
    </>
  );
}
