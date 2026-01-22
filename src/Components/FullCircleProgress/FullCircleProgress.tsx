import { useState, useEffect, useCallback } from "react";

interface FullCircleProgressProps {
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
}: FullCircleProgressProps) {
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

    newSize = Math.max(100, Math.min(newSize, 400));
    setComputedSizeNumber(newSize);
  }, [size]);

  useEffect(() => {
    calculateSize();
    window.addEventListener("resize", calculateSize);
    return () => window.removeEventListener("resize", calculateSize);
  }, [calculateSize]);

  /* ---------------- geometry ---------------- */

  const radius = Math.max(1, (computedSizeNumber - strokeWidth) / 2);
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const cx = computedSizeNumber / 2;
  const cy = computedSizeNumber / 2;

  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        width: computedSizeNumber,
        height: computedSizeNumber,
      }}
    >
      {/* SIDE LABEL */}
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

        {/* Indicator — FIXED */}
        {progress > 0 && (
          <circle
            cx={cx}
            cy={cy - radius}
            r={strokeWidth * 1.6}
            fill="#4A6CFF"
            style={{
              transformOrigin: `${cx}px ${cy}px`,
              transform: `rotate(${progress * 3.6}deg)`,
              transition: "transform 0.5s ease",
            }}
          />
        )}

        {/* Inner soft circle */}
        <circle
          cx={cx}
          cy={cy}
          r={radius * 0.8}
          fill="#FFFFFF"
          opacity={0.15}
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
