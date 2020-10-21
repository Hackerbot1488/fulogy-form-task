import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { NotificationsNone } from "@material-ui/icons";
import { useStyles } from "./styles";
import { User } from "../Profile";
import { ReactComponent as UserIcon } from "../../assets/UserIcon.svg";
export interface HeaderProps {
	user: User;
}
export const Header: React.FC<HeaderProps> = ({ user }) => {
	const styles = useStyles();
	function cutName() {
		const pieces = user.name.split(" ");
		return pieces[0] + " " + pieces[1][0] + ".";
	}
	return (
		<>
			<AppBar position="relative" className={styles.menu}>
				<Toolbar className={styles["menu-container"]}>
					<NotificationsNone className={styles.menu__icon_bell} />
					<span className={styles.menu__separator}></span>
					<Box className={styles.menu__userwrapper}>
						<UserIcon className={styles.menu__icon_user} />
						<Typography className={styles.menu__username}>
							{cutName()}
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};
