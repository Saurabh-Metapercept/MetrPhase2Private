interface MetricCardProps {
  bgColor: string;
  innerBg: string;
  icon: string;
  label: string;
  value: string;
  valueColor: string;
}

export default function MetricCard({ bgColor, innerBg, icon, label, value, valueColor }: MetricCardProps) {
  return (
    <div className={`w-[268px] h-[91px] ${bgColor} rounded-[10px] relative overflow-hidden flex items-center flex-shrink-0`}>
      <div className={`absolute left-0 w-[193px] h-full ${innerBg} rounded-[10px] flex flex-col justify-center px-4 gap-1 z-10`}>
        <span className="font-bold text-base text-[#0A0A0A]">{label}</span>
        <img src={icon} alt={label} className="w-[31px] h-[31px]" />
      </div>
      <span className={`font-bold text-2xl ${valueColor} absolute right-4 z-20`}>{value}</span>
    </div>
  );
}
