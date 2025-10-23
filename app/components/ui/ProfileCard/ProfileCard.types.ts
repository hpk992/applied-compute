/**
 * ProfileCard Component Types
 *
 * Defines the interface for team member profile cards.
 * These cards are designed to stack vertically with intelligent border handling.
 */

/**
 * Props for the ProfileCard component
 *
 * @property {string} name - Team member's full name
 * @property {string} title - Job title or role (e.g., "Co-Founder, CEO")
 * @property {string} background - Professional background description
 * @property {string} linkedinUrl - Optional LinkedIn profile URL (not currently displayed)
 * @property {string} className - Optional additional Tailwind CSS classes
 * @property {boolean} isLast - Whether this is the last card in a stack (adds bottom border)
 *
 * @example
 * // Stack of profile cards - only last one gets bottom border
 * <div>
 *   <ProfileCard name="John Doe" title="CEO" background="Ex-Google" isLast={false} />
 *   <ProfileCard name="Jane Smith" title="CTO" background="Ex-Meta" isLast={true} />
 * </div>
 */
export interface ProfileCardProps {
  name: string;
  title: string;
  background: string;
  linkedinUrl?: string;
  className?: string;
  isLast?: boolean;
}
