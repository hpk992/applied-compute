/**
 * Button Component
 *
 * A flexible, reusable button component with support for different visual styles,
 * icons, navigation, and selective border removal.
 *
 * Features:
 * - Two visual variants: primary (white bg) and inverted (orange bg)
 * - Optional triangle icon
 * - Can render as Next.js Link (for navigation) or HTML button (for actions)
 * - Selective border removal for layout flexibility
 * - Full TypeScript support
 *
 * @example
 * // Navigation button with icon
 * <Button type="primary" icon="default" text="Join us" url="/signup" />
 *
 * @example
 * // Action button without icon
 * <Button type="inverted" icon="none" text="Submit" onClick={handleSubmit} />
 *
 * @example
 * // Button with custom borders
 * <Button text="Click" removeBorders={['top', 'bottom']} />
 */

'use client';

import Link from 'next/link';
import { ButtonProps } from './Button.types';

/**
 * DefaultIcon - Triangle SVG icon displayed on the right side of button text
 * Uses currentColor to inherit text color from button variant
 */
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
  removeBorders = [],
}: ButtonProps) {
  // Base styles - Core layout and interaction styles
  const baseStyles =
    'font-main flex px-3 py-3 justify-between items-center gap-2.5 font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer relative hover:z-10 focus:z-10 active:z-10';

  // Build border classes dynamically based on removeBorders prop
  // Only adds border for sides NOT included in the removeBorders array
  const borderClasses = [];
  if (!removeBorders.includes('top')) borderClasses.push('border-t-[2px]');
  if (!removeBorders.includes('right')) borderClasses.push('border-r-[2px]');
  if (!removeBorders.includes('bottom')) borderClasses.push('border-b-[2px]');
  if (!removeBorders.includes('left')) borderClasses.push('border-l-[2px]');

  // Add conditional borders that appear on interactive states for removed borders
  const conditionalBorders = [];
  if (removeBorders.includes('top'))
    conditionalBorders.push('hover:border-t-[2px] focus:border-t-[2px] active:border-t-[2px]');
  if (removeBorders.includes('right'))
    conditionalBorders.push('hover:border-r-[2px] focus:border-r-[2px] active:border-r-[2px]');
  if (removeBorders.includes('bottom'))
    conditionalBorders.push('hover:border-b-[2px] focus:border-b-[2px] active:border-b-[2px]');
  if (removeBorders.includes('left'))
    conditionalBorders.push('hover:border-l-[2px] focus:border-l-[2px] active:border-l-[2px]');

  // Type-specific styles for different button variants
  const typeStyles = {
    primary: 'bg-background text-primary border-primary hover:opacity-90 focus:ring-primary',
    inverted:
      'bg-primary text-background border-primary hover:bg-primary hover:text-background focus:ring-primary',
    primaryHover:
      'bg-background text-primary border-primary focus:ring-primary hover:bg-primary hover:text-background',
    invertedHover:
      'bg-primary text-background border-primary hover:bg-background hover:text-primary focus:ring-primary',
  };

  // Combine all style classes
  const buttonStyles = `${baseStyles} ${borderClasses.join(' ')} ${conditionalBorders.join(' ')} ${typeStyles[type]} ${className}`;

  // Button content structure
  const content = (
    <>
      <span className="font-second text-[12px] leading-0 font-bold">{text}</span>
      {icon === 'default' && <DefaultIcon />}
    </>
  );

  // Render as Next.js Link if URL is provided (for navigation)
  if (url) {
    return (
      <Link href={url} className={buttonStyles}>
        {content}
      </Link>
    );
  }

  // Otherwise, render as HTML button (for actions/events)
  return (
    <button onClick={onClick} className={buttonStyles} type="button">
      {content}
    </button>
  );
}
