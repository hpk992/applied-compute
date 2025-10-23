/**
 * InfoBox Component
 *
 * A content container with a structured layout including a subheading, main heading,
 * and flexible content area. Used for major sections of content on the page.
 *
 * Features:
 * - Light beige background (#FAFAF9)
 * - 96px padding (24rem) on desktop, 32px (8rem) on mobile
 * - Orange subheading label
 * - Large heading text
 * - Flexible content area for any React children
 * - Responsive text sizing
 *
 * @example
 * <InfoBox
 *   subheading="The Office of Applied Compute® • 25th October, 2025"
 *   heading="Agent workforces are coming"
 * >
 *   <p>Content paragraphs...</p>
 *   <Button text="Get Started" />
 * </InfoBox>
 */

import { InfoBoxProps } from './InfoBox.types';

export default function InfoBox({ subheading, heading, children, className = '' }: InfoBoxProps) {
  return (
    <div className={`flex w-full flex-col gap-16 bg-[#FAFAF9] p-24 max-sm:p-8 ${className}`}>
      {/* Subheading - Orange label text */}
      <p className="text-primary font-second text-[12px] font-bold">{subheading}</p>

      {/* Main heading - Large, prominent text */}
      <h2 className="text-foreground-100 text-[39px] leading-[45px] font-semibold max-sm:text-[34px]">
        {heading}
      </h2>

      {/* Content area - Accepts any React children */}
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
