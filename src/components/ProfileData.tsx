import React from "react";
import {
	makeStyles,
	ListItemIcon,
	ListItemText,
	ListItem,
	Divider,
	List,
} from "@material-ui/core";
import { AlternateEmail, Phone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	info: {
		display: "flex",
		flexDirection: "column",
		padding: 0,
		borderRadius: "10px",
		boxSizing: "border-box",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
		backgroundColor: "#fff",
		color: "#313131",
	},
	["info-item"]: {
		fontSize: "18px",
		lineHeight: "25px",
		height: "96px",
		paddingLeft: "74px",
	},
	["info-item__icon"]: {
		width: "36px",
		height: "36px",
		fill: "#00BFA5",
	},
	["icon-wrapper"]: {
		minWidth: "36px",
	},
	["info-item__text"]: {
		marginLeft: "42px",
	},
}));

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
