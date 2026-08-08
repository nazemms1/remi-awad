import { useState } from "react";
import { useMotionValueEvent, useTransform, type MotionValue } from "framer-motion";

export default function ScrollCounter({ progress, value }: { progress: MotionValue<number>; value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const rounded = useTransform(progress, [0, 1], [0, target]);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, "change", (v) => setDisplay(Math.round(v)));

  if (!match) return <>{value}</>;
  return (
    <>
      {display}
      {match[2]}
    </>
  );
}
