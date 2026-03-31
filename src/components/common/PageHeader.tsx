interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-[25px]">
      <h1 className="font-bold text-2xl text-[#5F4050] leading-[150%]">{title}</h1>
      <p className="text-base text-[#5F4050] leading-[150%]">{description}</p>
    </div>
  );
}
