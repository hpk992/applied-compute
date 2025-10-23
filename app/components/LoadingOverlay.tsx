/**
 * LoadingOverlay Component
 *
 * Full-screen loading overlay displayed on initial page load.
 * Features animated logo movement and fade-out transition.
 *
 * Timeline:
 * - 0ms: Orange overlay appears with logos
 * - 50ms: Second logo (p2) starts animating
 * - 500ms: Animation delay completes
 * - 500-3000ms: Second logo slides from right to left (2.5s duration)
 * - 3000ms: Fade-out begins (300ms duration)
 * - 3300ms: Component unmounts and is removed from DOM
 *
 * Animation Details:
 * - First logo (p1): Static at bottom-left
 * - Second logo (p2): Slides from right (calc(100% - 226px)) to left (-1px)
 * - Easing: cubic-bezier(0.19, 1, 0.22, 1) - "Expo Out" (fast start, slow end)
 * - Duration: 2.5 seconds with 0.5 second delay
 *
 * @example
 * // Add to page.tsx
 * <LoadingOverlay />
 */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true); // Controls component mount/unmount
  const [opacity, setOpacity] = useState(1); // Controls fade-out transition
  const [hasStarted, setHasStarted] = useState(false); // Triggers logo animation

  useEffect(() => {
    // Trigger logo movement shortly after component mounts
    // requestAnimationFrame ensures browser is ready for smooth animation
    requestAnimationFrame(() => {
      setTimeout(() => {
        setHasStarted(true); // Starts the logo slide animation
      }, 50);
    });

    // Begin fade-out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 3000);

    // Remove component from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3300); // 3000ms display + 300ms fade

    // Cleanup timers on unmount
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Don't render anything once overlay is complete
  if (!isVisible) return null;

  return (
    <div
      className="bg-primary fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="absolute bottom-0 flex w-full flex-row p-[17.5px]">
        {/* First logo - Static position at bottom-left */}
        <Image
          src="/applied-compute-p1.png"
          alt="Applied Compute Logo"
          unoptimized
          width={75.5}
          height={49.8}
        />

        {/* Second logo - Animates from right to left */}
        <div className="relative h-full w-full">
          <Image
            src="/applied-compute-p2.png"
            alt="Applied Compute Logo"
            className="absolute"
            unoptimized
            width={226}
            height={47}
            style={{
              // Starts at right edge, moves to left edge
              left: hasStarted ? '-1px' : 'calc(100% - 226px)',
              // 2.5s duration, expo-out easing, 0.5s delay
              transition: 'left 2.5s cubic-bezier(0.19, 1, 0.22, 1) 0.5s',
              // Performance hint for browser
              willChange: 'left',
            }}
          />
        </div>
      </div>
    </div>
  );
}
