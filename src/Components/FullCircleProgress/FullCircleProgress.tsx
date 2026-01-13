import { useState, useEffect, useCallback } from "react";

interface HalfCircleProgressProps {
  producedQuantity: number;
  totalQuantity: number;
  size?: number | string;
  strokeWidth?: number;
  side: string;
}

export default function FullCircleProgress({
  size = 180,
  strokeWidth = 5,
  side,
  totalQuantity,
  producedQuantity,
}: HalfCircleProgressProps) {
  const [computedSizeNumber, setComputedSizeNumber] = useState(0);

  /* ---------------- calculate progress ---------------- */

  const progress =
    totalQuantity > 0
      ? Math.min((producedQuantity / totalQuantity) * 100, 100)
      : 0;

  /* ---------------- calculate circle size for responsive ---------------- */

  const calculateSize = useCallback(() => {
    let newSize: number;

    if (typeof size === "string") {
      if (size.endsWith("vh")) {
        newSize = (parseFloat(size) / 100) * window.innerHeight;
      } else if (size.endsWith("vw")) {
        newSize = (parseFloat(size) / 100) * window.innerWidth;
      } else {
        newSize = parseFloat(size);
      }
    } else {
      newSize = size;
    }

    newSize = Math.max(100, Math.min(newSize, 400)); // min-max
    setComputedSizeNumber(newSize);
  }, [size]);

  useEffect(() => {
    calculateSize(); // first render
    window.addEventListener("resize", calculateSize); // resize
    return () => window.removeEventListener("resize", calculateSize);
  }, [calculateSize]);

  /* ---------------- calculate geometry ---------------- */

  const radius = Math.max(1, (computedSizeNumber - strokeWidth) / 2);
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const cx = computedSizeNumber / 2;
  const cy = computedSizeNumber / 2;

  const angle = 2 * Math.PI * (progress / 100);
  const indicatorX = cx + radius * Math.cos(angle - Math.PI / 2);
  const indicatorY = cy + radius * Math.sin(angle - Math.PI / 2);

  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        width: computedSizeNumber,
        height: computedSizeNumber,
      }}
    >
      <span
        className="absolute text-white font-bold underline"
        style={{
          top: computedSizeNumber * -0.07,
          fontSize: computedSizeNumber * 0.15,
        }}
      >
        {side}
      </span>

      <svg
        width={computedSizeNumber}
        height={computedSizeNumber}
        style={{
          marginTop: computedSizeNumber * 0.4,
          overflow: "visible",
        }}
      >
        {/* Background circle */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="#FFFFFF"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress circle */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="#4A6CFF"
          strokeWidth={strokeWidth * 1.4}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
          transform={`rotate(-90 ${cx} ${cy})`}
        />

        {/* Indicator */}
        {progress > 0 && (
          <circle
            cx={indicatorX}
            cy={indicatorY}
            r={strokeWidth * 1.6}
            fill="#4A6CFF"
            className="transition-all duration-500"
          />
        )}
        <circle
          cx={cx}
          cy={cy}
          r={radius * 0.8}
          fill="#FFFFFF"
          opacity={0.15}
          className="absolute"
        />
      </svg>

      {/* Progress label */}
      <span
        className="absolute text-white font-bold"
        style={{
          fontFamily: "'Digital-7'",
          fontSize: computedSizeNumber * 0.2,
          top: computedSizeNumber * 0.55,
        }}
      >
        {producedQuantity}/{totalQuantity}
      </span>
    </div>
  );
}
