/**
 * Button Component
 *
 * Flexible button with multiple variants, optional icon, and support for both navigation (Link) and actions (onClick).
 * Designed for connected button groups with shared borders.
 *
 * @example
 * <Button type="primary" text="Join us" url="/signup" />
 * <Button type="inverted" icon="none" text="Submit" onClick={handleSubmit} />
 */

'use client';

import Link from 'next/link';
import { ButtonProps } from './Button.types';

// Triangle icon that inherits button text color
const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    className="h-2.5 w-2.5"
  >
    <path d="M10 0H0L10 10V0Z" fill="currentColor" />
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
  const baseStyles =
    'font-main flex px-3 py-3 justify-between items-center gap-2.5 font-medium transition-all duration-200 ease-in-out cursor-pointer relative border-2 border-r-0 last:border-r-2 ';

  const typeStyles = {
    primary: 'bg-background text-primary border-primary',
    inverted: 'bg-primary text-background border-primary hover:bg-primary hover:text-background',
    primaryHover:
      'bg-background text-primary border-primary hover:bg-primary hover:text-background hover:ring-2 hover:ring-inset active:ring-0',
    invertedHover:
      'bg-primary text-background border-background-200 hover:bg-background hover:text-primary hover:ring-primary hover:ring-2 hover:ring-inset active:ring-0',
  };

  const buttonStyles = `${baseStyles} ${typeStyles[type]} ${className}`;

  const content = (
    <>
      <span className="font-second text-[12px] leading-0 font-bold">{text}</span>
      {icon === 'default' && <DefaultIcon />}
    </>
  );

  if (url) {
    return (
      <Link href={url} className={buttonStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles} type="button">
      {content}
    </button>
  );
}
