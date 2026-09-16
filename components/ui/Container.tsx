import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  cleanPadding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  cleanPadding = false,
}) => {
  return (
    <div
      className={`mx-auto max-w-[1440px] ${
        cleanPadding ? '' : 'px-4 sm:px-8 md:px-12 lg:px-16'
      } ${className}`}
    >
      {children}
    </div>
  );
};
