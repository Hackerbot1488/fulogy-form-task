import { makeStyles, Modal } from "@material-ui/core";
import React from "react";
import { ModalBody } from "./ModalBody";
export interface ProfileEditModalProps {
	opened: boolean;
	closeModal: () => void;
}
const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		padding: "0 10px",
	},
	["@media (max-width: 414px)"]: {
		modal: {
			alignItems: "flex-end",
			padding: "0",
		},
	},
}));
export const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
	opened,
	closeModal,
}) => {
	const styles = useStyles();
	return (
		<>
			<Modal
				open={opened}
				onClose={closeModal}
				aria-labelledby="Chnage your data"
				aria-describedby="Phone Email Number"
				className={styles.modal}
			>
				<ModalBody closeModal={closeModal} />
			</Modal>
		</>
	);
};
