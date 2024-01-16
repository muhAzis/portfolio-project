import React from 'react';
import '../styles/ButtonCTA.css';

interface Props {
  className: string;
  invertColor?: boolean;
  style?: React.CSSProperties;
  action: () => void;
  children: React.ReactNode;
}

const ButtonCTA: React.FC<Props> = ({ className, invertColor = false, style, action, children }) => {
  const buttonStyle: React.CSSProperties = invertColor ? { color: 'var(--clr-text-army)', backgroundColor: 'var(--clr-white)' } : { color: 'var(--clr-text-light)', backgroundColor: 'var(--clr-army)' };

  return (
    <button className={className + ' call-to-action-btn'} onClick={action} style={{ ...buttonStyle, ...style }}>
      {children}
    </button>
  );
};

export default ButtonCTA;
