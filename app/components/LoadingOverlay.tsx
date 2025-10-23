'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Trigger movement after component mounts
    requestAnimationFrame(() => {
      setTimeout(() => {
        setHasStarted(true);
      }, 50);
    });

    // Start fade out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 3000);

    // Remove component after fade completes (3000ms + 300ms transition)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="bg-primary fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="absolute bottom-0 flex w-full flex-row p-[17.5px]">
        <Image
          src="/applied-compute-p1.png"
          alt="Applied Compute Logo"
          unoptimized
          width={75.5}
          height={49.8}
        />
        <div className="relative h-full w-full">
          <Image
            src="/applied-compute-p2.png"
            alt="Applied Compute Logo"
            className="absolute"
            unoptimized
            width={226}
            height={47}
            style={{
              left: hasStarted ? '-1px' : 'calc(100% - 226px)',
              transition: 'left 2.5s cubic-bezier(0.19, 1, 0.22, 1) 0.5s',
              willChange: 'left',
            }}
          />
        </div>
      </div>
    </div>
  );
}
