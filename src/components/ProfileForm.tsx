import {
	Box,
	Button,
	Card,
	Container,
	makeStyles,
	TextField,
} from "@material-ui/core";
import { AssignmentInd, Phone, AlternateEmail } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
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
		width: "100%",
		maxWidth: "350px",
	},
	["form__icon"]: {
		width: "36px",
		height: "36px",
		fill: "#00BFA5",
		marginRight: "42px",
	},
	form__input: {
		maxWidth: "270px",
		width: "100%",
	},
	form__button: {
		color: "#fff",
		backgroundColor: "#01BDA7",
		fontSize: "14px",
		lineHeight: "19px",
		fontWeight: 600,
		borderRadius: "36px",
		flex: 1,
		maxWidth: "212px",
		paddingTop: "15px",
		paddingBottom: "15px",
		width: "100%",
	},
	["@media (max-width: 1200px)"]: {
		form__separator: {
			margin: 0,
		},
		form__icon: {
			display: "none",
		},
		form__button: {
			margin: "0px auto",
		},
		["form-container"]: {
			justifyContent: "space-between",
		},
		["input-wrapper"]: {
			maxWidth: "270px",
		},
	},
	["@media (max-width: 1000px)"]: {
		form__separator: {
			display: "none",
		},
		["input-wrapper"]: {
			maxWidth: "270px",
			padding: "0 10px",
		},
	},
	["@media (max-width: 684px)"]: {
		["form-container"]: {
			flexDirection: "column",
			padding: "13px 23px",
		},
		["input-wrapper"]: {
			margin: "10px auto",
		},
		form__separator: {
			display: "none",
		},
		form__button: {
			paddingTop: "15px",
			paddingBottom: "15px",
		},
		["form-container_bottom"]: {
			padding: "3px 0 16px",
		},
	},
	["@media (max-width: 414px)"]: {
		form__icon: {
			display: "none",
		},
		["input-wrapper"]: {
			padding: "0",
		},
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
			"& input": {
				fontSize: "14px",
				lineHeight: "19px",
			},
		},
	},
	["modalBody_down"]: {
		transform: "translateY(120%)",
	},
}));
export const ProfileForm: React.FC<{}> = () => {
	const [opened, setOpened] = useState(false);
	let timeouts: NodeJS.Timeout[] = [];
	function openModal() {
		setOpened(true);
	}
	function closeModal() {
		if (document.body.clientWidth < 415) {
			document
				.querySelector("#modal-body")
				?.classList.add(styles.modalBody_down);
			timeouts.push(
				setTimeout(() => {
					setOpened(false);
				}, 400)
			);
		} else {
			setOpened(false);
		}
	}
	useEffect(() => {
		return () => {
			timeouts.forEach((tm) => clearTimeout(tm));
		};
	}, []);
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
