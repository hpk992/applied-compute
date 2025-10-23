/**
 * ProfileCard Component
 *
 * Displays team member information in a bordered card format.
 * Designed to stack vertically with smart border handling to avoid double borders.
 *
 * Features:
 * - Name and title displayed on left
 * - Background/experience on right
 * - Intelligent borders: non-last cards omit bottom border to prevent overlap
 * - Last card in stack gets all four borders for clean bottom edge
 * - Uses Suisse Intl Mono font for consistency
 *
 * Border Logic:
 * - Non-last cards: top, left, right borders only
 * - Last card: all four borders (top, right, bottom, left)
 * - This prevents double borders when cards are stacked
 *
 * @example
 * // In a loop - automatically handles borders
 * {teamMembers.map((member, index) => (
 *   <ProfileCard
 *     key={index}
 *     name={member.name}
 *     title={member.title}
 *     background={member.background}
 *     isLast={index === teamMembers.length - 1}
 *   />
 * ))}
 */

import { ProfileCardProps } from './ProfileCard.types';

export default function ProfileCard({
  name,
  title,
  background,
  className = '',
  isLast = false,
}: ProfileCardProps) {
  // Smart border handling: last card gets all borders, others omit bottom
  const borderClasses = isLast
    ? 'border-2 border-foreground-100'
    : 'border-t-2 border-l-2 border-r-2 border-foreground-100';

  return (
    <div className={`flex items-center justify-between p-6 ${borderClasses} ${className}`}>
      <div className="flex flex-row">
        {/* Name and title section - fixed width for alignment */}
        <div className="flex w-40 flex-col">
          <h3 className="text-foreground-100 font-second text-sm font-bold">{name}</h3>
          <p className="text-foreground-100 font-second text-sm">{title}</p>
        </div>

        {/* Background/experience section */}
        <div className="text-sm">
          <span className="text-foreground-200 font-second text-[12px] font-bold">Background:</span>
          <br />
          <span className="text-foreground-200 font-second text-[12px] font-normal">
            {background}
          </span>
        </div>
      </div>
    </div>
  );
}
