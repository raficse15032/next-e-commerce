import React from 'react';
import { IconType } from 'react-icons';

interface IconButtonProps {
  icon: IconType;
  size?: number;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  size = 20,
  className = '',
  onClick,
  children,
  variant = 'default',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center space-x-2 transition-all duration-200 rounded-lg';
  
  const variantClasses = {
    default: 'text-gray-600 hover:text-primary p-2',
    primary: 'bg-primary text-white px-4 py-2 hover:bg-primary-dark',
    secondary: 'bg-secondary text-white px-4 py-2 hover:bg-secondary-dark',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 px-4 py-2',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon size={size} />
      {children && <span>{children}</span>}
    </button>
  );
};

export default IconButton;