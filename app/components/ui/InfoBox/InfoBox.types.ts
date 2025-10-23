/**
 * InfoBox Component Types
 *
 * Defines the interface for the InfoBox component, which displays content
 * in a structured layout with subheading, heading, and flexible content area.
 */

/**
 * Props for the InfoBox component
 *
 * @property {string} subheading - Small label text displayed above heading (orange, uppercase)
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
 */
export interface InfoBoxProps {
  subheading: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}
