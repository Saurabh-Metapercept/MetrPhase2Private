interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label?: string;
  required?: boolean;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string; // IMPORTANT: name attribute groups radios together
  className?: string;
}

export default function RadioGroup({
  label,
  required,
  options,
  value,
  onChange,
  name,
  className = ''
}: RadioGroupProps) {
  return (
    <div className={className}>
      {label && (
        <label className="font-semibold text-sm block mb-3">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="flex gap-10">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="cursor-pointer"
            />
            <span className="text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
