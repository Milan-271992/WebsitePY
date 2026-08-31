import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
}

export const LogoIcon: React.FC<{ size?: number; className?: string; transparent?: boolean }> = ({
  size = 46,
  className = '',
  transparent = true,
}) => {
  return (
    <img
      src={transparent ? '/logo-icon-transparent.png' : '/logo-icon.png'}
      alt="XTI Symbol"
      width={size}
      height={Math.round((size * 600) / 880)}
      className={`object-contain shrink-0 ${className}`}
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/logo.png';
      }}
    />
  );
};

const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  subtitleText = '— IT INFRASTRUCTURE —',
  className = '',
}) => {
  const isDarkVariant = variant === 'dark';
  const isFull = variant === 'full';

  const iconSize = size === 'sm' ? 36 : size === 'lg' ? 52 : size === 'xl' ? 68 : 44;
  const titleSize =
    size === 'sm'
      ? 'text-sm sm:text-base'
      : size === 'lg'
      ? 'text-xl sm:text-2xl'
      : size === 'xl'
      ? 'text-2xl sm:text-3xl'
      : 'text-base sm:text-lg lg:text-xl';
  const subSize =
    size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-xs' : 'text-[9px] sm:text-[10px] tracking-widest';

  if (isFull) {
    const fullHeight =
      size === 'sm' ? 'h-10' : size === 'lg' ? 'h-16' : size === 'xl' ? 'h-24' : 'h-12';
    return (
      <img
        src="/logo.png"
        alt="Xtechinfra Technologies"
        className={`${fullHeight} w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {isDarkVariant ? (
        <div className="bg-white/95 p-1.5 rounded-xl shadow-md border border-slate-700/50 flex items-center justify-center shrink-0">
          <img
            src="/logo-icon-transparent.png"
            alt="XTI Logo"
            className="w-9 h-6 sm:w-11 sm:h-7 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/logo.png';
            }}
          />
        </div>
      ) : (
        <LogoIcon size={iconSize} transparent={true} />
      )}

      <div className="flex flex-col">
        <div className="flex items-center leading-none flex-wrap gap-x-1">
          <span
            className={`font-black tracking-tight font-['Plus_Jakarta_Sans'] ${titleSize} ${
              isDarkVariant ? 'text-white' : 'text-[#0A1931]'
            }`}
          >
            XTechInfra
          </span>
          <span
            className={`font-black tracking-tight font-['Plus_Jakarta_Sans'] ${titleSize} ${
              isDarkVariant ? 'text-[#38BDF8]' : 'text-[#0066FF]'
            }`}
          >
            Technologies
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`font-bold uppercase mt-1 ${subSize} ${
              isDarkVariant ? 'text-cyan-300' : 'text-[#0066FF]'
            }`}
          >
            {subtitleText}
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
