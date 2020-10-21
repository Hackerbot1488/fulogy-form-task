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
import { User } from "../../Profile";

export interface ProfileDataProps {
	user: User;
}

export const ProfileData: React.FC<ProfileDataProps> = ({ user }) => {
	const styles = useStyles();
	return (
		<>
			<List component="ul" aria-label="email phone" className={styles.info}>
				<ListItem component="li" className={styles["info-item"]}>
					<ListItemIcon className={styles["icon-wrapper"]}>
						<AlternateEmail className={styles["info-item__icon"]} />
					</ListItemIcon>
					<ListItemText className={styles["info-item__text"]}>
						{user.email}
					</ListItemText>
				</ListItem>
				<Divider />
				<ListItem component="li" className={styles["info-item"]}>
					<ListItemIcon className={styles["icon-wrapper"]}>
						<Phone className={styles["info-item__icon"]} />
					</ListItemIcon>
					<ListItemText className={styles["info-item__text"]}>
						{user.phone}
					</ListItemText>
				</ListItem>
			</List>
		</>
	);
};
