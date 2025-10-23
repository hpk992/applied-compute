import Image from 'next/image';
import { ProfileCardProps } from './ProfileCard.types';

export default function ProfileCard({
  name,
  title,
  background,
  className = '',
  isLast = false,
}: ProfileCardProps) {
  const borderClasses = isLast
    ? 'border-2 border-foreground-100'
    : 'border-t-2 border-l-2 border-r-2 border-foreground-100';

  return (
    <div className={`flex items-center justify-between p-6 ${borderClasses} ${className}`}>
      <div className="flex flex-row">
        <div className="flex w-[160px] flex-col">
          <h3 className="text-foreground-100 font-second text-sm font-bold">{name}</h3>
          <p className="text-foreground-100 font-second text-sm">{title}</p>
        </div>
        <div className="text-sm">
          <span className="text-foreground-200 font-second text-[12px] font-bold">Background:</span>
          <br />
          <span className="text-foreground-200 font-second text-[12px] font-normal">
            {background}
          </span>
        </div>
      </div>
    </div>
  );
}
