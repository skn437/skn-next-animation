import { Box } from "@mui/material";
import styles from "@/components/Box5.module.scss";
import { motion, useAnimation } from "framer-motion";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Box5 = () => {
	const control = useAnimation();

	return (
		<>
			<ButtonGroup
				variant="contained"
				aria-label="outlined primary button group"
				id={styles.button}
			>
				<Button
					onClick={() => {
						control.start({
							x: 0,
							transition: {
								duration: 3
							}
						});
					}}
				>
					Move Left
				</Button>

				<Button
					onClick={() => {
						control.start({
							x: 1200,
							transition: {
								duration: 3
							}
						});
					}}
				>
					Move Right
				</Button>

				<Button
					onClick={() => {
						control.start({
							borderRadius: "50%",
							transition: {
								duration: 2
							}
						});
					}}
				>
					Circle
				</Button>

				<Button
					onClick={() => {
						control.start({
							borderRadius: "0%",
							transition: {
								duration: 2
							}
						});
					}}
				>
					Square
				</Button>

				<Button
					onClick={() => {
						control.stop();
					}}
				>
					Stop
				</Button>
			</ButtonGroup>
			<Box id={styles.container}>
				<Box 
          id={styles.box} 
          component={motion.div} 
          animate={control}
        >
        </Box>
			</Box>
		</>
	);
};

export default Box5;
