import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  asChild?: boolean;
}

interface AnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  asChild?: boolean;
  href: string;
}

type CombinedButtonProps = ButtonProps | AnchorButtonProps;

export const Button: React.FC<CombinedButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100'
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ('href' in props) {
    const { href, ...anchorProps } = props;
    return (
      <a
        href={href}
        className={combinedClassName}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  );
};

export default Button;
