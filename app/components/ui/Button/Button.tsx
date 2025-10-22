'use client';

import Link from 'next/link';
import { ButtonProps } from './Button.types';

// Icon component (default arrow)
const DefaultIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
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
      <span className="leading-0 font-bold">{text}</span>
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
