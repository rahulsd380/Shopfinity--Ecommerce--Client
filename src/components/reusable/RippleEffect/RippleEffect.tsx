import React, { ReactNode } from 'react';
import Ripples from 'react-ripples';

interface RippleEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  during?: number;
  className?: string;
}

const RippleEffect = ({ children, during = 1500, className, ...props }: RippleEffectProps) => {
  return (
    <Ripples placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} during={during} {...props}>
      <div className={className}>
        {children}
      </div>
    </Ripples>
  );
};

export default RippleEffect;
