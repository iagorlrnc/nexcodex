import React from 'react';
import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 36, showText = true }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src={logoImg}
        alt="NexCodex"
        style={{ height: size, width: 'auto' }}
        className="object-contain transform transition-transform hover:scale-105 duration-300"
      />
      {showText && (
        <span className="font-sans font-bold tracking-tight text-xl text-text-dark flex items-center">
          Nex<span className="text-primary">Codex</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
