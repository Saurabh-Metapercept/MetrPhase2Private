interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  value: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  width?: string;
  height?: string;
}

export default function Input({ 
  type = 'text',
  value, 
  onChange, 
  label, 
  required,
  placeholder,
  className = '',
  width = 'w-full',
  height = 'h-[44px]'
}: InputProps) {
  return (
    <div className="mb-5">
      {label && (
        <label className="block text-[14px] font-normal text-[#1E293B] mb-2">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${width} ${height} px-4 border border-[#CBD5E1] rounded-md text-[14px] text-[#1E293B] focus:outline-none focus:border-[#5F4050] ${className}`}
      />
    </div>
  );
}
