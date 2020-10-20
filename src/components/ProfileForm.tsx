import {
	Box,
	Button,
	Card,
	Container,
	makeStyles,
	TextField,
} from "@material-ui/core";
import { AssignmentInd, Phone, AlternateEmail } from "@material-ui/icons";
import React, { useState } from "react";
import { ProfileEditModal } from "./ProfileEditModal/ProfileEditModal";
import classes from "./ProfileForm.module.sass";
const useStyles = makeStyles((theme) => ({
	form: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#fff",
		borderRadius: "10px",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
	},
	["form-container"]: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		paddingTop: "26px",
		paddingBottom: "15px",
		justifyContent: "center",
		maxWidth: "none",
	},
	["form-container_bottom"]: {
		paddingTop: "15px",
		paddingBottom: "44px",
	},
	form__separator: {
		width: "2px",
		height: "97px",
		backgroundColor: "#CAE7FE",
		marginRight: "28px",
		marginLeft: "73px",
	},
	["input-wrapper"]: {
		display: "flex",
		alignItems: "center",
	},
	["form__icon"]: {
		width: "36px",
		height: "36px",
		fill: "#00BFA5",
		marginRight: "42px",
	},
	form__input: {
		fontSize: "14px",
		lineHeight: "19px",
		width: "270px",
	},
	form__button: {
		color: "#fff",
		backgroundColor: "#01BDA7",
		fontSize: "14px",
		lineHeight: "19px",
		fontWeight: 600,
		borderRadius: "36px",
		padding: "15px 26px",
	},
	root: {
		"& label": {
			"&.Mui-focused": {
				color: "#01bda7",
			},
		},
		"& .MuiOutlinedInput-root": {
			"&:hover fieldset": {
				borderColor: "black",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#01bda7",
			},
		},
	},
}));
export const ProfileForm: React.FC<{}> = () => {
	const [opened, setOpened] = useState(false);
	function openModal() {
		setOpened(true);
	}
	function closeModal() {
		setOpened(false);
	}
	const styles = useStyles();
	return (
		<>
			<Card className={styles.form}>
				<Container className={styles["form-container"]}>
					<Box className={styles["input-wrapper"]}>
						<AssignmentInd className={styles["form__icon"]} />
						<TextField
							className={styles.form__input + " " + classes.form__input}
							label="Фамилия и имя"
							placeholder="Укажите вашу фамилию и имя"
							variant="outlined"
							InputLabelProps={{
								shrink: true,
							}}
							classes={{
								root: styles.root,
							}}
						/>
					</Box>

					<span className={styles.form__separator}></span>

					<Box className={styles["input-wrapper"]}>
						<AlternateEmail className={styles["form__icon"]} />
						<TextField
							className={styles.form__input}
							label="E-mail"
							placeholder="Ivanova@mail.ru"
							variant="outlined"
							InputLabelProps={{
								shrink: true,
							}}
							classes={{
								root: styles.root,
							}}
						/>
					</Box>

					<span className={styles.form__separator}></span>

					<Box className={styles["input-wrapper"]}>
						<Phone className={styles["form__icon"]} />
						<TextField
							className={styles.form__input}
							label="Номер телефона"
							placeholder="Укажите номер телефона"
							variant="outlined"
							InputLabelProps={{
								shrink: true,
							}}
							classes={{
								root: styles.root,
							}}
						/>
					</Box>
				</Container>
				<Container
					className={
						styles["form-container"] + " " + styles["form-container_bottom"]
					}
				>
					<Button
						onClick={openModal}
						className={styles.form__button + " " + classes.form__button}
					>
						Сохранить изменения
					</Button>
					<ProfileEditModal closeModal={closeModal} opened={opened} />
				</Container>
			</Card>
		</>
	);
};
