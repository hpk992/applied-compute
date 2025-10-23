/**
 * DynamicHeader Component
 *
 * A responsive header that dynamically shows/hides based on scroll direction:
 * - Hides when scrolling down
 * - Shows when scrolling up
 * - Always visible at the top of the page
 *
 * Features:
 * - Mobile and desktop layouts
 * - Smooth CSS transitions
 * - Scroll direction detection with throttling for performance
 * - Responsive navigation buttons
 *
 * @example
 * <DynamicHeader />
 */

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/ui/Button';

export default function DynamicHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show header when at top of page
          if (currentScrollY <= 50) {
            setIsVisible(true);
          }
          // Show header when scrolling up
          else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
          }
          // Hide header when scrolling down (but not at the very top)
          else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* ================================================================== */}
      {/* DESKTOP FIXED HEADER                                               */}
      {/* Only visible on desktop (≥640px), shows navigation buttons        */}
      {/* ================================================================== */}
      <header
        className={`bg-background fixed top-0 z-20 hidden w-full transition-transform duration-300 ease-in-out sm:block ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex w-full justify-end p-4">
          <Button type="primary" icon="default" text="Join us" />
          <Button type="primary" icon="default" text="Get in touch" removeBorders={['left']} />
        </div>
      </header>

      {/* ================================================================== */}
      {/* MOBILE FIXED HEADER                                                */}
      {/* Always visible on mobile, only buttons slide up/down               */}
      {/* ================================================================== */}
      <header className="fixed top-0 z-20 w-full sm:hidden">
        {/* Mobile logo - always visible */}
        <div className="bg-background relative z-30 pt-16">
          <Image
            className="bg-background w-full px-4"
            src="/logo-Applied-Compute.png"
            alt="Applied Compute Logo"
            width={300}
            height={49}
          />
        </div>

        {/* Mobile navigation buttons - slide up/down with background */}
        <div
          className={`bg-background relative z-20 w-full px-4 transition-transform duration-300 ease-in-out ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex w-full">
            <Button
              type="primary"
              icon="default"
              text="Join us"
              className="w-full"
              removeBorders={['top']}
            />
            <Button
              type="primary"
              icon="default"
              text="Get in touch"
              removeBorders={['left', 'top']}
              className="w-full"
            />
          </div>
        </div>
      </header>
    </>
  );
}
