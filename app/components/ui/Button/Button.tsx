'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ButtonProps } from './Button.types';

// Icon component (default rectangle icon)
const DefaultIcon = () => (
  <Image src="/rectangle_icon.svg" alt="" width={20} height={20} className="h-2.5 w-2.5" />
);

export default function Button({
  type = 'primary',
  icon = 'default',
  text = 'Click Here',
  url,
  onClick,
  className = '',
}: ButtonProps) {
  // Base styles - matching your CSS requirements
  const baseStyles =
    'font-main flex px-3 py-3 justify-center items-center gap-2.5 font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 border-[2px]';

  // Type-specific styles
  const typeStyles = {
    primary: 'bg-background text-primary border-primary hover:opacity-90 focus:ring-primary',
    inverted:
      'bg-background text-primary border-primary hover:bg-primary hover:text-background focus:ring-primary',
  };

  // Combine styles
  const buttonStyles = `${baseStyles} ${typeStyles[type]} ${className}`;

  // Button content
  const content = (
    <>
      <span className="text-[12px] leading-0 font-bold">{text}</span>
      {icon === 'default' && <DefaultIcon />}
    </>
  );

  // If URL is provided, render as Link
  if (url) {
    return (
      <Link href={url} className={buttonStyles}>
        {content}
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button onClick={onClick} className={buttonStyles} type="button">
      {content}
    </button>
  );
}
