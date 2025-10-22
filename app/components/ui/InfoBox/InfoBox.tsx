import { InfoBoxProps } from './InfoBox.types';

export default function InfoBox({ subheading, heading, children, className = '' }: InfoBoxProps) {
  return (
    <div className={`bg-background-100 flex w-full flex-col gap-16 p-24 ${className}`}>
      <p className="text-primary text-sm">{subheading}</p>
      <h2 className="text-foreground-main text-2xl font-bold">{heading}</h2>
      <div className="text-foreground gap-16">{children}</div>
    </div>
  );
}
