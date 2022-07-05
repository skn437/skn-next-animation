import { Box } from "@mui/material";
import styles from "@/components/Box1.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Box id={styles.container}>
      <Box 
        id={styles.box}
        component={motion.div}
        initial={{
          opacity: 0.1
        }}
        animate={{
          x: isAnimating ? 1000 : 0,
          opacity: isAnimating ? 1: 0.5,
          rotate: isAnimating ? 360: 0
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 10
        }}
        onClick={() => {
          setIsAnimating(!isAnimating);
        }}
      >
      </Box>
    </Box>
  );
}

export default Box1;