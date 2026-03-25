import { useState } from 'react';
import { ArrowLeft, GitBranch, ArrowLeftRight, Info, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const mockFiles = [
  { path: 'src/index.ts', additions: 5, deletions: 2 },
  { path: 'src/utils.ts', additions: 3, deletions: 1 },
];

function generateDiffContent() {
  return [
    { type: 'normal' as const, lineNum: 1, content: 'const x = 1;' },
    { type: 'remove' as const, lineNum: 2, content: 'const y = 2;' },
    { type: 'add' as const, lineNum: 2, content: 'const y = 42;' },
    { type: 'normal' as const, lineNum: 3, content: 'export { x, y };' },
  ];
}
import unifiedViewIcon from '../../assets/unified-view-icon.png';
import splitViewIcon from '../../assets/split-view-icon.png';

type CompareState = 'idle' | 'loading' | 'results';
type ViewMode = 'unified' | 'split';

export default function CompareBranches() {
  const navigate = useNavigate();
  const [baseBranch, setBaseBranch] = useState('main');
  const [targetBranch, setTargetBranch] = useState('test_1');
  const [compareState, setCompareState] = useState<CompareState>('idle');
  const [viewMode, setViewMode] = useState<ViewMode>('unified');
  const [expandedFiles, setExpandedFiles] = useState<Set<string>>(new Set());


  const handleCompare = () => {
    if (baseBranch === targetBranch) return;
    setCompareState('loading');
    setTimeout(() => {
      setCompareState('results');
    }, 2000);
  };

  const toggleFileExpand = (filePath: string) => {
    const newExpanded = new Set(expandedFiles);
    if (newExpanded.has(filePath)) {
      newExpanded.delete(filePath);
    } else {
      newExpanded.add(filePath);
    }
    setExpandedFiles(newExpanded);
  };

  return (
    <div className="px-4 sm:px-10 lg:px-40 py-6 lg:py-11 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft size={20} className="text-[#5F4050]" />
        </button>
        <h1 className="text-2xl font-bold text-[#5F4050]">Compare Branches</h1>
      </div>

      {/* ── Compare box ── */}
      <div className="flex justify-center mb-8">
        <div
          className="bg-white border border-[rgba(226,232,240,0.6)] rounded-[14px] w-full max-w-[857.7px] flex items-center justify-center px-4 sm:px-6 py-4 sm:h-[74px]"
          style={{
            boxShadow: '0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">

            {/* Base */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-[#0F172A] whitespace-nowrap">Base:</label>
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={baseBranch}
                  onChange={(e) => setBaseBranch(e.target.value)}
                  className="w-full sm:w-[200px] h-[38px] px-4 pr-10 bg-white border border-[#E2E8F0] rounded-lg text-[#313144] appearance-none cursor-pointer focus:outline-none focus:border-[#5F4050]"
                >
                  <option value="main">main</option>
                  <option value="dev">dev</option>
                  <option value="staging">staging</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" size={16} />
              </div>
            </div>

            {/* Arrow */}
            <ArrowLeftRight size={20} className="text-[#64748B] shrink-0 hidden sm:block" />

            {/* Target */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-[#0F172A] whitespace-nowrap">Target:</label>
              <div className="relative flex-1 sm:flex-none">
                <select
                  value={targetBranch}
                  onChange={(e) => setTargetBranch(e.target.value)}
                  className="w-full sm:w-[240px] h-[38px] px-4 pr-10 bg-white border border-[#E2E8F0] rounded-lg text-[#313144] appearance-none cursor-pointer focus:outline-none focus:border-[#5F4050]"
                >
                  <option value="test_1">test_1</option>
                  <option value="test_2">test_2</option>
                  <option value="feature-x">feature-x</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" size={16} />
              </div>
            </div>

            {/* Compare button */}
            <button
              onClick={handleCompare}
              disabled={baseBranch === targetBranch}
              className="w-full sm:w-[132px] h-[38px] bg-[#5F4050] text-white rounded-[10px] flex items-center justify-center gap-2 hover:bg-[#4a3340] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap min-h-[44px]"
            >
              <GitBranch size={16} />
              Compare
            </button>

          </div>
        </div>
      </div>

      {compareState === 'idle' && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <Info size={32} className="text-gray-500" />
          </div>
          <h3 className="text-lg font-bold text-[#314158] mb-2">There isn't anything to compare.</h3>
          <p className="text-sm text-[#62748E]">Select different branches to compare files and view changes.</p>
        </div>
      )}

      {compareState === 'loading' && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#5F4050] rounded-full animate-spin mb-4"></div>
          <p className="text-base text-[#314158] font-medium">Fetching Data</p>
        </div>
      )}

      {compareState === 'results' && (
        <div className="max-w-[1236px] mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm text-[#64748B]">Files changed ({mockFiles.length})</h3>
            <button
              onClick={() => setViewMode(viewMode === 'unified' ? 'split' : 'unified')}
              className="px-4 py-2 bg-white border border-[#E2E8F0] rounded-lg text-sm text-[#314158] hover:bg-gray-50 flex items-center gap-2 min-h-[44px]"
            >
              <img
                src={viewMode === 'unified' ? splitViewIcon : unifiedViewIcon}
                alt={viewMode === 'unified' ? 'Split View' : 'Unified View'}
                className="w-4 h-4"
              />
              {viewMode === 'unified' ? 'Split View' : 'Unified View'}
            </button>
          </div>

          <div className="bg-white rounded-lg border border-[#E2E8F0] mb-6">
            {mockFiles.map((file) => (
              <div key={file.path}>
                <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 border-b border-[#E2E8F0] last:border-b-0">
                  <button
                    onClick={() => toggleFileExpand(file.path)}
                    className="text-sm text-[#0EA5E9] hover:underline text-left flex-1 truncate mr-4 min-h-[44px] flex items-center"
                  >
                    {file.path}
                  </button>
                  <div className="flex gap-1 ml-4">
                    {Array.from({ length: Math.min(file.additions, 5) }).map((_, i) => (
                      <div key={`add-${i}`} className="w-2 h-2 bg-green-500 rounded-sm"></div>
                    ))}
                    {Array.from({ length: Math.min(file.deletions, 5) }).map((_, i) => (
                      <div key={`del-${i}`} className="w-2 h-2 bg-red-500 rounded-sm"></div>
                    ))}
                  </div>
                </div>

                {expandedFiles.has(file.path) && (
                  <div className="border-t border-[#E2E8F0] bg-[#F6F8FA]">
                    {viewMode === 'unified' ? (
                      <UnifiedDiffView baseBranch={baseBranch} targetBranch={targetBranch} />
                    ) : (
                      <SplitDiffView baseBranch={baseBranch} targetBranch={targetBranch} />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function UnifiedDiffView({ baseBranch, targetBranch }: { baseBranch: string; targetBranch: string }) {
  const diff = generateDiffContent();

  return (
    <div className="p-2 sm:p-4">
      <div className="bg-white border border-[#D0D7DE] rounded-lg overflow-hidden">
        <div className="bg-[#F6F8FA] px-3 py-2 border-b border-[#D0D7DE] font-semibold text-xs flex items-center gap-2">
          <ChevronDown size={14} />
          <span>{baseBranch}...{targetBranch}</span>
        </div>
        <div className="font-mono text-xs overflow-x-auto">
          {diff.map((line, index) => (
            <div
              key={index}
              className={`flex ${
                line.type === 'add'
                  ? 'bg-[#e6ffed]'
                  : line.type === 'remove'
                  ? 'bg-[#ffeef0]'
                  : 'bg-white'
              }`}
            >
              <div className="w-12 px-2 py-1 text-right text-[#57606A] select-none border-r border-[#D0D7DE] bg-[#F6F8FA]">
                {line.lineNum}
              </div>
              <div className="flex-1 px-2 py-1">
                <span
                  className={
                    line.type === 'add'
                      ? 'text-[#1A7F37]'
                      : line.type === 'remove'
                      ? 'text-[#CF222E]'
                      : 'text-[#24292F]'
                  }
                >
                  {line.type === 'add' && '+ '}
                  {line.type === 'remove' && '- '}
                  {line.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SplitDiffView({ baseBranch, targetBranch }: { baseBranch: string; targetBranch: string }) {
  const diff = generateDiffContent();

  return (
    <div className="p-4 overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 min-w-0">
        <div className="bg-white border border-[#D0D7DE] rounded-lg overflow-hidden">
          <div className="bg-[#F6F8FA] px-3 py-2 border-b border-[#D0D7DE] font-semibold text-xs">
            Base: {baseBranch}
          </div>
          <div className="font-mono text-xs">
            {diff
              .filter((line) => line.type !== 'add')
              .map((line, index) => (
                <div
                  key={index}
                  className={`flex ${line.type === 'remove' ? 'bg-[#ffeef0]' : 'bg-white'}`}
                >
                  <div className="w-12 px-2 py-1 text-right text-[#57606A] select-none border-r border-[#D0D7DE] bg-[#F6F8FA]">
                    {line.lineNum}
                  </div>
                  <div className="flex-1 px-2 py-1">
                    <span className={line.type === 'remove' ? 'text-[#CF222E]' : 'text-[#24292F]'}>
                      {line.content}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white border border-[#D0D7DE] rounded-lg overflow-hidden">
          <div className="bg-[#F6F8FA] px-3 py-2 border-b border-[#D0D7DE] font-semibold text-xs">
            Target: {targetBranch}
          </div>
          <div className="font-mono text-xs">
            {diff
              .filter((line) => line.type !== 'remove')
              .map((line, index) => (
                <div
                  key={index}
                  className={`flex ${line.type === 'add' ? 'bg-[#e6ffed]' : 'bg-white'}`}
                >
                  <div className="w-12 px-2 py-1 text-right text-[#57606A] select-none border-r border-[#D0D7DE] bg-[#F6F8FA]">
                    {line.lineNum}
                  </div>
                  <div className="flex-1 px-2 py-1">
                    <span className={line.type === 'add' ? 'text-[#1A7F37]' : 'text-[#24292F]'}>
                      {line.content}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}