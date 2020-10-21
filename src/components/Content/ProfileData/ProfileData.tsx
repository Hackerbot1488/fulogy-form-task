import React, { useEffect, useState } from "react";
import {
	ListItemIcon,
	ListItemText,
	ListItem,
	Divider,
	List,
} from "@material-ui/core";
import { AlternateEmail, Phone } from "@material-ui/icons";
import { useStyles } from "./styles";
export interface User {
	name: string;
	email: string;
	phone: string;
}
export const ProfileData: React.FC<{}> = () => {
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
			<List component="ul" aria-label="email phone" className={styles.info}>
				<ListItem component="li" className={styles["info-item"]}>
					<ListItemIcon className={styles["icon-wrapper"]}>
						<AlternateEmail className={styles["info-item__icon"]} />
					</ListItemIcon>
					<ListItemText className={styles["info-item__text"]}>
						{user?.email || "Ivanova@mail.ru"}
					</ListItemText>
				</ListItem>
				<Divider />
				<ListItem component="li" className={styles["info-item"]}>
					<ListItemIcon className={styles["icon-wrapper"]}>
						<Phone className={styles["info-item__icon"]} />
					</ListItemIcon>
					<ListItemText className={styles["info-item__text"]}>
						{user?.phone || "Укажите номер телефона"}
					</ListItemText>
				</ListItem>
			</List>
		</>
	);
};
