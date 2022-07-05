import { Box } from "@mui/material";
import styles from "@/components/Box2.module.scss";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <Box id={styles.container}>
      <Box 
        id={styles.box}
        component={motion.div}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
        drag
        dragConstraints={{
          right: 500,
          left: 0,
          top: 5,
          bottom: 5
        }}
      >
      </Box>
    </Box>
  );
}

export default Box2;