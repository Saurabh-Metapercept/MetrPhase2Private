import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'custom';
  size?: 'sm' | 'md' | 'lg' | 'custom';
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  className = '',
  children,
  onClick,
  disabled,
   icon,
  type = 'button'
}: ButtonProps) {
  
  const baseStyles = 'rounded-lg flex items-center justify-center transition-colors font-medium';
  
  const variantStyles = {
    primary: 'bg-[#5F4050] text-white hover:bg-[#4a3340] disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-[#F5E6ED] text-[#314158] hover:bg-[#ead4df]',
    ghost: 'bg-white border border-[#E2E8F0] text-[#314158] hover:bg-gray-50',
    outline: 'bg-[#FFF0F7] text-[#5F4050] border border-[#E8D4E8] hover:bg-[#FFE5F3]',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    custom: ''
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    custom: ''
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {icon && <span className={children ? 'mr-2' : ''}>{icon}</span>}
      {children}
    </button>
  );
}
