interface GitHubCommitCardProps {
  selectedProject: string;
  selectedBranch: string;
  onProjectChange: (project: string) => void;
  onBranchChange: (branch: string) => void;
  onCommit: () => void;
}

export default function GitHubCommitCard({ selectedProject, selectedBranch, onProjectChange, onBranchChange, onCommit }: GitHubCommitCardProps) {
  return (
    <div className="max-w-[600px] mx-auto bg-white rounded-2xl border border-[rgba(226,232,240,0.6)] shadow-[0px_1px_3px_rgba(0,0,0,0.1)] p-6">
      <h2 className="text-lg font-bold text-[#314158] mb-6">Github Commit</h2>
      
      <div className="mb-4">
        <label className="block text-sm text-[#314158] mb-2">
          Select Project <span className="text-[#FF2056]">*</span>
        </label>
        <select
          value={selectedProject}
          onChange={(e) => onProjectChange(e.target.value)}
          className="w-full h-[42px] border border-[#E2E8F0] rounded-lg px-4 text-[#313144]"
        >
          <option>New-Docs-Migration</option>
        </select>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm text-[#314158]">
            Select Branch <span className="text-[#FF2056]">*</span>
          </label>
          <button className="text-xs bg-[#FFF0F0] text-[#E11D48] px-3 py-1 rounded-full">
            Create new branch
          </button>
        </div>
        <select
          value={selectedBranch}
          onChange={(e) => onBranchChange(e.target.value)}
          className="w-full h-[42px] border border-[#E2E8F0] rounded-lg px-4 text-[#313144]"
        >
          <option>main</option>
        </select>
      </div>

      <div className="flex justify-end gap-3">
        <button className="px-6 py-2 border border-[#D1D5DB] rounded-lg text-[#314158] bg-white">
          Sync
        </button>
        <button
          onClick={onCommit}
          className="px-6 py-2 bg-[#5F4050] text-white rounded-lg"
        >
          Commit
        </button>
      </div>
    </div>
  );
}
