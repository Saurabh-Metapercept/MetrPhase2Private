import { useState } from 'react';
import { Download, ChevronDown, ChevronRight, File, Folder } from 'lucide-react';
import githubIcon from '../../assets/github.png';

interface CompletionViewProps {
  onGithubClick: () => void;
}

export default function CompletionView({ onGithubClick }: CompletionViewProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root', 'media']));

  const toggleFolder = (folder: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folder)) {
      newExpanded.delete(folder);
    } else {
      newExpanded.add(folder);
    }
    setExpandedFolders(newExpanded);
  };

  return (
    <>
      <div className="text-center py-4 mb-6">
        <p className="text-base text-[#314158]">Your conversion is complete! Thank you for using our service.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button onClick={onGithubClick} className="cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center">
                <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
              </button>
              <h3 className="font-bold text-base text-[#314158]">DITA Output</h3>
            </div>
            <button className="bg-[#16A34A] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm min-h-[44px]">
              <Download size={16} />
              Download
            </button>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleFolder('root')}>
              {expandedFolders.has('root') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <Folder size={16} className="text-[#62748E]" />
              <span className="text-sm">Printer User's Guide</span>
            </div>
            {expandedFolders.has('root') && (
              <>
                <div className="ml-6 flex items-center gap-2">
                  <File size={16} className="text-[#62748E]" />
                  <span className="text-sm">top.txt</span>
                </div>
                <div className="ml-6 flex items-center gap-2 cursor-pointer" onClick={() => toggleFolder('media')}>
                  {expandedFolders.has('media') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  <Folder size={16} className="text-[#62748E]" />
                  <span className="text-sm">media</span>
                </div>
                {expandedFolders.has('media') && (
                  <>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                      <div key={i} className="ml-12 flex items-center gap-2">
                        <File size={16} className="text-[#62748E]" />
                        <span className="text-sm">image{i}.png</span>
                      </div>
                    ))}
                    <div className="ml-12 text-sm text-[#62748E]">... 110 more files</div>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#E2E8F0] p-5">
          <h3 className="font-bold text-base text-[#314158] mb-4">Content Preview</h3>
          <pre className="bg-[#1E293B] text-xs p-4 rounded-lg overflow-auto h-[400px] font-mono">
            <code>
              <span className="text-[#14B8A6]">&lt;?xml version=</span>
              <span className="text-[#10B981]">"1.0"</span>
              <span className="text-[#14B8A6]"> encoding=</span>
              <span className="text-[#10B981]">"UTF-8"</span>
              <span className="text-[#14B8A6]"> standalone=</span>
              <span className="text-[#10B981]">"no"</span>
              <span className="text-[#14B8A6]">?&gt;</span>
              {'\n'}
              <span className="text-[#F97316]">&lt;!DOCTYPE map PUBLIC</span>
              <span className="text-[#10B981]"> "//OASIS//DTD DITA Map//EN" "map.dtd"</span>
              <span className="text-[#F97316]">&gt;</span>
              {'\n'}
              <span className="text-[#F97316]">&lt;map&gt;</span>
              {'\n  '}
              <span className="text-[#F97316]">&lt;title&gt;</span>
              <span className="text-gray-400">Printer User's Guide</span>
              <span className="text-[#F97316]">&lt;/title&gt;</span>
              {'\n  '}
              <span className="text-[#F97316]">&lt;topicref</span>
              <span className="text-[#14B8A6]"> href=</span>
              <span className="text-[#10B981]">"printer_user_s_guide/loading_paper.dita"</span>
              <span className="text-[#F97316]">/&gt;</span>
              {'\n'}
              <span className="text-[#F97316]">&lt;/map&gt;</span>
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
