import React from "react";
import { Close } from "@material-ui/icons";
import { Button, makeStyles, Typography } from "@material-ui/core";
import classes from "./ModalBody.module.sass";
export interface ModalBodyControlsProps {
	closeModal: () => void;
	confirm: () => void;
}
const useStyles = makeStyles((theme) => ({
	modalBody__close_icon: {
		width: "24px",
		height: "24px",
		cursor: "pointer",
	},
	modalBody__header: {
		color: "rgba(49, 49, 49, 0.7)",
		fontSize: "24px",
		lineHeight: "33px",
		fontWeight: 600,
		textAlign: "center",
	},
	modalBody__button_confirm: {
		boxSizing: "border-box",
		color: "white",
		backgroundColor: "#01bda7",
		fontSize: "14px",
		lineHeight: "19px",
		paddingTop: "16px",
		paddingBottom: "16px",
		margin: "14px 0px",
		width: "200px",
		borderRadius: "41px",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "rgba(1, 189, 167, 0.7)",
		},
	},
	modalBody__button_reject: {
		boxSizing: "border-box",
		color: "#01bda7",
		fontSize: "14px",
		lineHeight: "19px",
		border: "1px solid #01bda7",
		borderRadius: "41px",
		margin: "14px 0px",
		width: "200px",
		textTransform: "none",
		paddingTop: "16px",
		paddingBottom: "16px",
	},
}));
export const ModalBodyControls: React.FC<ModalBodyControlsProps> = ({
	closeModal,
	confirm,
}) => {
	const styles = useStyles();
	return (
		<>
			<div className={classes.modalBody__close}>
				<Close onClick={closeModal} className={styles.modalBody__close_icon} />
			</div>
			<Typography variant="h6" className={styles.modalBody__header}>
				Сохранить изменения?
			</Typography>
			<div className={classes.modalBody__buttons}>
				<Button onClick={confirm} className={styles.modalBody__button_confirm}>
					Сохранить
				</Button>
				<Button
					onClick={closeModal}
					className={styles.modalBody__button_reject}
				>
					Не сохранять
				</Button>
			</div>
		</>
	);
};
