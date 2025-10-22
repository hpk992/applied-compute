import { InfoBoxProps } from './InfoBox.types';

export default function InfoBox({ subheading, heading, children, className = '' }: InfoBoxProps) {
  return (
    <div className={`flex w-full flex-col gap-16 bg-[#FAFAF9] p-24 max-sm:p-8 ${className}`}>
      <p className="text-primary font-second text-[12px] font-bold">{subheading}</p>
      <h2 className="text-foreground text-[39px] leading-[45px] font-semibold max-sm:text-[34px]">
        {heading}
      </h2>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
