import React from 'react';

interface IProps {
  className?: string,
  label: string,
  disabled: boolean,
}

const Button: React.FC<IProps> = ({ className, label, disabled }) => (
  <button
    type="button"
    className={className}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
