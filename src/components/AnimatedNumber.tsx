import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: string; // e.g. "Trusted", "11+", "100%", "6+", "250+"
  delay?: number; // delay in ms
  duration?: number; // total duration in ms
  className?: string;
}

export function parseStatValue(raw: string): { prefix: string; numericValue: number; suffix: string } {
  const match = raw.match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!match) {
    return { prefix: '', numericValue: 0, suffix: raw };
  }
  return {
    prefix: match[1],
    numericValue: parseInt(match[2], 10),
    suffix: match[3],
  };
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  delay = 0,
  duration = 1800,
  className = '',
}) => {
  const { prefix, numericValue, suffix } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let animationFrameId: number;
    let startTimestamp: number | null = null;

    const spinPhaseRatio = 0.3; // First 30% duration is rapid slot-machine spin
    const spinDuration = duration * spinPhaseRatio;
    const decelDuration = duration * (1 - spinPhaseRatio);

    const animate = (now: number) => {
      if (!startTimestamp) startTimestamp = now;
      const elapsed = now - startTimestamp;

      if (elapsed < delay) {
        setDisplayValue(0);
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const activeElapsed = elapsed - delay;

      if (activeElapsed >= duration) {
        setDisplayValue(numericValue);
        return;
      }

      if (activeElapsed < spinDuration) {
        // Phase 1: Slot-machine rapid spin
        const maxRand = Math.max(10, Math.round(numericValue * 1.2));
        const minRand = Math.max(1, Math.round(numericValue * 0.15));
        const randomVal = Math.floor(Math.random() * (maxRand - minRand + 1)) + minRand;
        setDisplayValue(randomVal);
      } else {
        // Phase 2: Ease-out deceleration to target numericValue
        const decelElapsed = activeElapsed - spinDuration;
        const progress = Math.min(1, decelElapsed / decelDuration);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const startVal = Math.max(1, Math.floor(numericValue * 0.3));
        const currentVal = Math.round(startVal + easeOut * (numericValue - startVal));
        setDisplayValue(currentVal);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [hasAnimated, delay, duration, numericValue]);

  return (
    <span ref={elementRef} className={`inline-flex items-baseline ${className}`}>
      {prefix && <span>{prefix}</span>}
      {numericValue > 0 && <span>{hasAnimated ? displayValue : 0}</span>}
      {suffix && <span>{suffix}</span>}
    </span>
  );
};
