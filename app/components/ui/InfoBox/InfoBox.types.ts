/**
 * InfoBox Component Types
 *
 * Defines the interface for the InfoBox component, which displays content
 * in a structured layout with subheading, heading, and flexible content area.
 */

/**
 * Props for the InfoBox component
 *
 * @property {React.ReactNode} subheading - Small label text displayed above heading (orange, uppercase) - can be string or JSX for responsive text
 * @property {string} heading - Main heading text (large, bold)
 * @property {React.ReactNode} children - Content area (paragraphs, lists, buttons, etc.)
 * @property {string} className - Optional additional Tailwind CSS classes
 *
 * @example
 * <InfoBox
 *   subheading="Our Mission"
 *   heading="Building the future of AI"
 * >
 *   <p>Content goes here...</p>
 * </InfoBox>
 *
 * @example
 * // Responsive subheading
 * <InfoBox
 *   subheading={
 *     <>
 *       <span className="max-sm:hidden">The Office of </span>
 *       Applied Compute® • 25th October, 2025
 *     </>
 *   }
 *   heading="Agent workforces are coming"
 * >
 *   <p>Content...</p>
 * </InfoBox>
 */
export interface InfoBoxProps {
  subheading: React.ReactNode;
  heading: string;
  children: React.ReactNode;
  className?: string;
}
