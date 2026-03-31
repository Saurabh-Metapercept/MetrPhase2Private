import { Check, X } from 'lucide-react';
import Button from './Button';

interface StatusModalProps {
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
}

export default function StatusModal({ type, title, message, onClose }: StatusModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div 
        className="relative w-[384px] bg-white rounded-[10px] p-8 flex flex-col items-center"
        style={{
          boxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className={`w-[60px] h-[60px] rounded-full border-2 flex items-center justify-center mb-6 ${
          type === 'success' 
            ? 'border-[#5F4050]' 
            : 'border-[#DC2626]'
        }`}>
          {type === 'success' ? (
            <Check size={32} className="text-[#5F4050]" strokeWidth={2.5} />
          ) : (
            <X size={32} className="text-[#DC2626]" strokeWidth={2.5} />
          )}
        </div>

        <h2 className="text-[18px] font-semibold text-[#0F172A] mb-4 text-center">
          {title}
        </h2>

        <p className="text-[14px] text-[#64748B] text-center mb-8 leading-relaxed">
          {message}
        </p>

        <Button
          variant="primary"
          size="custom"
          className="w-[70px] h-[42px]"
          onClick={onClose}
        >
          OK
        </Button>
      </div>
    </div>
  );
}
