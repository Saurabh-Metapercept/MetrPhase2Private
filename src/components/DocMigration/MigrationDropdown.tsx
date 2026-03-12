import { ChevronDown } from 'lucide-react';
import { migrationOptions } from './constants';

interface MigrationDropdownProps {
  selectedType: string;
  dropdownOpen: boolean;
  onToggle: () => void;
  onSelect: (type: string) => void;
}

export default function MigrationDropdown({ selectedType, dropdownOpen, onToggle, onSelect }: MigrationDropdownProps) {
  return (
    <div className="relative mb-6">
      <button
        onClick={onToggle}
        className="w-[260px] h-[42px] bg-[#F5E6ED] rounded-lg px-[18px] py-[11px] flex items-center justify-between text-[#313144] text-base"
      >
        {selectedType}
        <ChevronDown size={16} className="text-[#313144]" />
      </button>
      {dropdownOpen && (
        <div className="absolute top-[42px] left-0 w-[260px] bg-white border border-[#E2E8F0] rounded-b-lg shadow-lg z-20">
          {migrationOptions.map((option) => (
            <div
              key={option}
              onClick={() => onSelect(option)}
              className="px-[18px] py-[11px] hover:bg-[#F5E6ED] cursor-pointer text-[#313144] text-base"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
