import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '', ...props }) => {
  return (
    <span
      className={`bg-purple-600/20 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold inline-block ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
