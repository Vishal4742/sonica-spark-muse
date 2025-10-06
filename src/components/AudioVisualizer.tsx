import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AudioVisualizerProps {
  isActive?: boolean;
  barCount?: number;
  className?: string;
}

export const AudioVisualizer = ({ 
  isActive = false, 
  barCount = 40,
  className 
}: AudioVisualizerProps) => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setBars(Array.from({ length: barCount }, () => Math.random() * 100));
      }, 100);
      return () => clearInterval(interval);
    } else {
      setBars(Array.from({ length: barCount }, () => 0));
    }
  }, [isActive, barCount]);

  return (
    <div className={cn("flex items-end justify-center gap-1 h-32", className)}>
      {bars.map((height, index) => (
        <div
          key={index}
          className={cn(
            "w-1 rounded-full transition-all duration-100",
            isActive 
              ? "bg-gradient-to-t from-gold-dark via-gold to-gold-light" 
              : "bg-muted"
          )}
          style={{
            height: `${isActive ? height : 20}%`,
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
};
