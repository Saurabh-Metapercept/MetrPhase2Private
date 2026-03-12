import { CheckCircle } from 'lucide-react';

interface SuccessModalProps {
  onClose: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-[400px] text-center">
        <div className="w-20 h-20 rounded-full border-2 border-[#374151] flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={40} className="text-[#374151]" />
        </div>
        <h3 className="text-lg font-semibold text-[#111827] mb-2">Commit request completed.</h3>
        <p className="text-sm text-[#6B7280] mb-6">
          Files were successfully committed to the New-Docx-Migration-Printer
        </p>
        <button
          onClick={onClose}
          className="w-full h-10 bg-[#5F4050] text-white rounded-lg"
        >
          OK
        </button>
      </div>
    </div>
  );
}
