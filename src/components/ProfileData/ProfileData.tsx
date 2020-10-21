import React from "react";
import {
	ListItemIcon,
	ListItemText,
	ListItem,
	Divider,
	List,
} from "@material-ui/core";
import { AlternateEmail, Phone } from "@material-ui/icons";
import { useStyles } from "./styles";

export const ProfileData: React.FC<{}> = () => {
	const styles = useStyles();
	return (
		<>
			<List component="ul" aria-label="email phone" className={styles.info}>
				<ListItem component="li" className={styles["info-item"]}>
					<ListItemIcon className={styles["icon-wrapper"]}>
						<AlternateEmail className={styles["info-item__icon"]} />
					</ListItemIcon>
					<ListItemText className={styles["info-item__text"]}>
						Ivanova@mail.ru
					</ListItemText>
				</ListItem>
				<Divider />
				<ListItem component="li" className={styles["info-item"]}>
					<ListItemIcon className={styles["icon-wrapper"]}>
						<Phone className={styles["info-item__icon"]} />
					</ListItemIcon>
					<ListItemText className={styles["info-item__text"]}>
						Укажите номер телефона
					</ListItemText>
				</ListItem>
			</List>
		</>
	);
};
