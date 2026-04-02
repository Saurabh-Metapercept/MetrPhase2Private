import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
  required?: boolean;
  className?: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

export default function Select({ 
  value, 
  onChange, 
  options, 
  label, 
  required,
  className = '',
  width = 'w-[200px]',
  height = 'h-[42px]',
  placeholder
}: SelectProps) {
  const selectElement = (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${width} ${height} px-4 pr-10 bg-white border border-[#E2E8F0] rounded-lg text-[#313144] appearance-none cursor-pointer focus:outline-none focus:border-[#5F4050] truncate ${className}`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none" size={16} />
    </div>
  );

  if (!label) {
    return selectElement;
  }

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm font-medium text-[#0F172A]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {selectElement}
    </div>
  );
}
