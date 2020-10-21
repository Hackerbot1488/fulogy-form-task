import { Modal } from "@material-ui/core";
import React from "react";
import { ModalBody } from "./ModalBody/ModalBody";
import { useStyles } from "./styles";
export interface ProfileEditModalProps {
	opened: boolean;
	closeModal: () => void;
}

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
				{<ModalBody closeModal={closeModal} />}
			</Modal>
		</>
	);
};
