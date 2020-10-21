import React, { useEffect, useRef, useState } from "react";
import { ModalBodyControls } from "./ModalBodyControls/ModalBodyControls";
import classes from "./ModalBody.module.sass";
import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
export interface ModalBodyProps {
	closeModal: () => void;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ closeModal }) => {
	const [confirmed, setConfirmed] = useState(false);
	const [up, setUp] = useState(false);
	const styles = useStyles();
	const ref = useRef(false);
	function confirm() {
		setConfirmed(true);
	}
	let timeout;
	useEffect(() => {
		if (!ref.current) {
			ref.current = true;
			timeout = setTimeout(() => {
				setUp(true);
			}, 0);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [timeout]);
	return (
		<div
			className={classes.modalBody + " " + (up ? classes.modalBody_up : "")}
			id="modal-body"
		>
			{!confirmed && (
				<ModalBodyControls closeModal={closeModal} confirm={confirm} />
			)}
			{confirmed && (
				<div className={classes.modalBody__success}>
					<Typography
						variant="h2"
						className={
							styles.modalBody__header + " " + styles.modalBody__header_success
						}
					>
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
