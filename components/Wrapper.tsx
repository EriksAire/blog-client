import React from 'react';

interface WrapperProps {
  children?: any;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className='box-border w-100% mt-8 mx-auto max-w-800'>{children}</div>
  );
};
