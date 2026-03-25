import { X } from 'lucide-react';

interface DescriptionModalProps {
  description: string;
  onDescriptionChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

export default function DescriptionModal({ description, onDescriptionChange, onCancel, onSubmit }: DescriptionModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[calc(100vw-2rem)] max-w-[400px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-[#314158]">Add description to submit and commit.</h3>
          <button onClick={onCancel} className="min-w-[44px] min-h-[44px] flex items-center justify-center">
            <X size={20} className="text-[#62748E]" />
          </button>
        </div>
          <input
          type="text"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="test description"
          className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 mb-4 min-h-[44px]"
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-[#D1D5DB] rounded-lg text-[#314158] bg-white min-h-[44px]"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-6 py-2 bg-[#5F4050] text-white rounded-lg min-h-[44px]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
