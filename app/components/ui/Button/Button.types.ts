/**
 * Button Component Types
 *
 * This file defines TypeScript types and interfaces for the Button component.
 */

/** Button visual style variants */
export type ButtonType = 'primary' | 'inverted' | 'primaryHover' | 'invertedHover';

/** Icon display options for the button */
export type ButtonIcon = 'default' | 'none';

/** Border sides that can be selectively removed */
export type BorderSide = 'top' | 'right' | 'bottom' | 'left';

/**
 * Props for the Button component
 *
 * @property {ButtonType} type - Visual style: 'primary' (white bg, orange text) or 'inverted' (orange bg, white text)
 * @property {ButtonIcon} icon - Show icon: 'default' (triangle icon) or 'none' (no icon)
 * @property {string} text - Button text content
 * @property {string} url - Optional URL for navigation (renders as Next.js Link)
 * @property {Function} onClick - Optional click handler (only used when no URL is provided)
 * @property {string} className - Additional Tailwind CSS classes
 * @property {BorderSide[]} removeBorders - Array of border sides to remove (e.g., ['top', 'right'])
 *
 * @example
 * // Primary button with icon and URL
 * <Button type="primary" icon="default" text="Get Started" url="/signup" />
 *
 * @example
 * // Inverted button without icon, with click handler
 * <Button type="inverted" icon="none" text="Cancel" onClick={() => console.log('clicked')} />
 *
 * @example
 * // Button with removed borders
 * <Button text="Bordered" removeBorders={['top', 'bottom']} />
 */
export interface ButtonProps {
  type?: ButtonType;
  icon?: ButtonIcon;
  text?: string;
  url?: string;
  onClick?: () => void;
  className?: string;
  removeBorders?: BorderSide[];
}
