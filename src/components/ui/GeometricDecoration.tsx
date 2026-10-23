import React from 'react';

interface SquiggleProps {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

export function Squiggle({
  className = '',
  color = '#F472B6',
  width = 120,
  height = 20,
}: SquiggleProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 10C12 2 18 2 27 10C36 18 42 18 51 10C60 2 66 2 75 10C84 18 90 18 99 10C108 2 114 2 117 10"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GeometricStar({
  className = '',
  color = '#FBBF24',
  size = 28,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z"
        fill={color}
        stroke="#1E293B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GeometricCross({
  className = '',
  color = '#1E293B',
  size = 20,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 4V20M4 12H20"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GeometricTriangle({
  className = '',
  color = '#34D399',
  size = 24,
  rotation = 0,
}: {
  className?: string;
  color?: string;
  size?: number;
  rotation?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      <polygon
        points="14,3 26,24 2,24"
        fill={color}
        stroke="#1E293B"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GeometricDonut({
  className = '',
  color = '#8B5CF6',
  size = 28,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      className={`rounded-full border-[3px] border-foreground flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: '2px 2px 0px #1E293B',
      }}
      aria-hidden="true"
    >
      <div
        className="rounded-full bg-background border-2 border-foreground"
        style={{ width: size * 0.4, height: size * 0.4 }}
      />
    </div>
  );
}
