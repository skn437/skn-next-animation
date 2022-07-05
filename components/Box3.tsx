import { Box } from "@mui/material";
import styles from "@/components/Box3.module.scss";
import { motion } from "framer-motion";

const boxVariants = {
  hidden: {
    x: -1000
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      delayChildren: 0.6,
      staggerChildren: 0.2
    }
  }
};

const listVariants = {
  hidden: {
    x: -10,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
  }
};

const Box3 = () => {
  let boxItem: number[] = [1, 2, 3];

  return (
    <Box id={styles.container}>
      <Box 
        id={styles.box}
        component={motion.div}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
        {boxItem.map((item) => (
          <ul key={item}>
            <motion.li 
              className={styles.box_item}
              variants={listVariants}
            >
            </motion.li>
          </ul>
        ))}
      </Box>
    </Box>
  );
}

export default Box3;