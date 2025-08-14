import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`border border-white/10 rounded-xl bg-white/5 p-6 shadow dark:bg-slate-900/60 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
