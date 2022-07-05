import { Box } from "@mui/material";
import styles from "@/components/Box4.module.scss";
import { motion } from "framer-motion";

const Box4 = () => {
  return (
    <Box id={styles.container}>
      <Box 
        id={styles.box}
        component={motion.div}
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0]
        }}
        transition={{
          duration: 5
        }}
      >
      </Box>
    </Box>
  );
}

export default Box4;