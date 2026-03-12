import { useRef } from 'react';
import { Upload, File, X } from 'lucide-react';

interface UploadSectionProps {
  selectedFile: { name: string; size: string } | null;
  policyChecked: boolean;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPolicyChange: (checked: boolean) => void;
  onReset: () => void;
  onUpload: () => void;
}

export default function UploadSection({ selectedFile, policyChecked, onFileSelect, onPolicyChange, onReset, onUpload }: UploadSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white rounded-2xl border border-[rgba(226,232,240,0.6)] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-[33px]">
      <label className="block text-base text-[#0F172B] mb-4">
        Upload input source file <span className="text-[#FF2056]">*</span>
      </label>

      {!selectedFile ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="h-[228px] border-2 border-dashed border-[#CAD5E2] rounded-2xl flex flex-col items-center justify-center cursor-pointer p-[50px]"
        >
          <div className="w-16 h-16 rounded-full bg-[#FFEDD4] flex items-center justify-center mb-4">
            <Upload size={32} className="text-[#F54900]" />
          </div>
          <p className="text-base text-[#314158] mb-1">Click to upload or drag and drop</p>
          <p className="text-sm text-[#62748E]">Accepted file format: .docx only.</p>
          <input
            ref={fileInputRef}
            type="file"
            onChange={onFileSelect}
            className="hidden"
            accept=".docx"
          />
        </div>
      ) : (
        <>
          <div className="bg-[#F1F5F9] rounded-lg p-4 flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <File size={20} className="text-[#2563EB]" />
              <div>
                <p className="text-sm font-medium text-[#314158]">{selectedFile.name}</p>
                <p className="text-xs text-[#62748E]">{selectedFile.size}</p>
              </div>
            </div>
            <button onClick={onReset} className="text-[#62748E] hover:text-[#314158]">
              <X size={20} />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              checked={policyChecked}
              onChange={(e) => onPolicyChange(e.target.checked)}
              className="w-4 h-4 border border-[#D1D5DB] rounded"
            />
            <label className="text-sm text-[#314158]">
              Refer to document conversion policy page
            </label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={onReset}
              className="px-6 py-2 border border-[#D1D5DB] rounded-lg text-[#314158] bg-white"
            >
              Reset
            </button>
            <button
              onClick={onUpload}
              disabled={!policyChecked}
              className="px-6 py-2 bg-[#2563EB] text-white rounded-lg disabled:opacity-50"
            >
              Upload
            </button>
          </div>
        </>
      )}
    </div>
  );
}
