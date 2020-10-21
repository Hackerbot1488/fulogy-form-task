import React from "react";
import { Close } from "@material-ui/icons";
import { Button, Typography } from "@material-ui/core";
import classes from "../ModalBody.module.sass";
import { useStyles } from "./styles";
export interface ModalBodyControlsProps {
	closeModal: () => void;
	confirm: () => void;
}

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
