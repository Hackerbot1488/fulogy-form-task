import { Box, Button, Card, Container, TextField } from "@material-ui/core";
import { AssignmentInd, Phone, AlternateEmail } from "@material-ui/icons";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { ProfileEditModal } from "./ProfileEditModal/ProfileEditModal";
import classes from "./ProfileForm.module.sass";
import { validator, Error } from "../../../helpers/validator";
import { useStyles } from "./styles";
import { UserContext } from "../../../helpers/context";

export const ProfileForm: React.FC<{}> = () => {
	const [opened, setOpened] = useState(false);
	const { updateData } = useContext(UserContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [nameError, setNameError] = useState<Error>({ error: false, text: "" });
	const [emailError, setEmailError] = useState<Error>({
		error: false,
		text: "",
	});
	const [phoneError, setPhoneError] = useState<Error>({
		error: false,
		text: "",
	});
	let timeouts: NodeJS.Timeout[] = [];
	function checkForm() {
		validator.clear();
		validator.checkEmail(email);
		validator.checkName(name);
		validator.checkPhone(phone);
		setNameError({ error: !!validator.nameError, text: validator.nameError });
		setEmailError({
			error: !!validator.emailError,
			text: validator.emailError,
		});
		setPhoneError({
			error: !!validator.phoneError,
			text: validator.phoneError,
		});
	}
	function openModal() {
		checkForm();
		validator.valid && setOpened(true);
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
	function updateUser() {
		localStorage.setItem(
			"user",
			JSON.stringify({
				name: name.match(/[а-яА-я]+/g)!.join(" "),
				email,
				phone,
			})
		);
		updateData({
			name: name.match(/[а-яА-я]+/g)!.join(" "),
			email,
			phone,
		});
		setName("");
		setEmail("");
		setPhone("");
	}
	useEffect(() => {
		return () => {
			timeouts.forEach((tm) => clearTimeout(tm));
		};
	}, [timeouts]);
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
							error={nameError.error}
							helperText={nameError.text}
							value={name}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setName(e.target.value);
							}}
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
							error={emailError.error}
							helperText={emailError.text}
							value={email}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setEmail(e.target.value);
							}}
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
							error={phoneError.error}
							helperText={phoneError.text}
							value={phone}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setPhone(e.target.value);
							}}
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
					<ProfileEditModal
						closeModal={closeModal}
						opened={opened}
						updateUser={updateUser}
					/>
				</Container>
			</Card>
		</>
	);
};
