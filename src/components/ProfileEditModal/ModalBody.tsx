import React, { useState } from "react";
import { ModalBodyControls } from "./ModalBodyControls";
import classes from "./ModalBody.module.sass";
import { Button, makeStyles, Typography } from "@material-ui/core";
export interface ModalBodyProps {
	closeModal: () => void;
}

const useStyles = makeStyles((theme) => ({
	modalBody__header: {
		color: "rgba(49, 49, 49, 0.7)",
		fontSize: "24px",
		lineHeight: "33px",
		fontWeight: 600,
		textAlign: "center",
		marginTop: "84px",
	},
	modalBody__button_confirm: {
		boxSizing: "border-box",
		color: "white",
		backgroundColor: "#01bda7",
		fontSize: "14px",
		lineHeight: "19px",
		paddingTop: "16px",
		paddingBottom: "16px",
		margin: "0 auto",
		marginTop: "42px",
		width: "200px",
		borderRadius: "41px",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "rgba(1, 189, 167, 0.7)",
		},
	},
}));
export const ModalBody: React.FC<ModalBodyProps> = ({ closeModal }) => {
	const [confirmed, setConfirmed] = useState(false);
	const styles = useStyles();
	function confirm() {
		setConfirmed(true);
	}
	return (
		<div className={classes.modalBody}>
			{!confirmed && (
				<ModalBodyControls closeModal={closeModal} confirm={confirm} />
			)}
			{confirmed && (
				<div className={classes.modalBody__success}>
					<Typography variant="h2" className={styles.modalBody__header}>
						Данные успешно сохранены.
					</Typography>
					<Button
						onClick={closeModal}
						className={styles.modalBody__button_confirm}
					>
						Хорошо
					</Button>
				</div>
			)}
		</div>
	);
};
