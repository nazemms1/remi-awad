import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundFX() {
  const { scrollYProgress } = useScroll();
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <motion.svg
        style={{ y: blobY, rotate }}
        className="absolute -right-32 -top-24 h-[42rem] w-[42rem] opacity-[0.08]"
        viewBox="0 0 200 200"
      >
        <path
          d="M45.3,-58.3C58.6,-49.8,68.9,-35.5,72.6,-19.7C76.3,-3.9,73.4,13.4,65.5,28.1C57.6,42.8,44.7,54.9,29.8,62.1C14.9,69.3,-2,71.6,-18.5,68.2C-35,64.8,-51.1,55.7,-61.5,42.1C-71.9,28.5,-76.6,10.4,-74.5,-6.5C-72.4,-23.4,-63.5,-39.1,-50.7,-47.8C-37.9,-56.5,-21.2,-58.2,-4.3,-52.3C12.6,-46.4,32,-66.8,45.3,-58.3Z"
          fill="currentColor"
          className="text-primary"
          transform="translate(100 100)"
        />
      </motion.svg>
      <motion.div
        style={{ y: blob2Y }}
        className="absolute -left-40 top-[50rem] h-[28rem] w-[28rem] rounded-full bg-accent/[0.07] blur-[130px]"
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.4]" aria-hidden="true">
        <defs>
          <pattern id="paper" width="3" height="3" patternUnits="userSpaceOnUse">
            <circle cx="0.5" cy="0.5" r="0.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paper)" className="text-border/40" />
      </svg>
    </div>
  );
}
