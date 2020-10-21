import React, { useEffect, useState } from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { AccountCircle, Create, Close } from "@material-ui/icons";
import { useStyles } from "./styles";
import { User } from "../ProfileData/ProfileData";

export interface ProfileSheetProps {
	opened: boolean;
	closeEdit: () => void;
	openEdit: () => void;
}
export const ProfileSheet: React.FC<ProfileSheetProps> = ({
	opened,
	openEdit,
	closeEdit,
}) => {
	const styles = useStyles();
	const [user, setUser] = useState<User>();
	useEffect(() => {
		setUser(
			JSON.parse(localStorage.getItem("user") || "null") || {
				name: "Иванова Анна Михайловна",
				email: "Ivanova@mail.ru",
				phone: "Укажите номер телефона",
			}
		);
	}, []);
	return (
		<>
			<Card className={styles.profile}>
				<AccountCircle className={styles.profile__icon_user} />
				<Typography className={styles.profile__username}>
					{user?.name || "Иванова Анна Михайловна"}
				</Typography>
				<Button
					className={styles.profile__button}
					onClick={() => (opened ? closeEdit() : openEdit())}
				>
					<span className={styles.profile__button_text}>
						{opened ? "закрыть" : "редактировать"}
					</span>
					{opened ? (
						<Close className={styles.profile__button_icon} />
					) : (
						<Create className={styles.profile__button_icon} />
					)}
				</Button>
			</Card>
		</>
	);
};
