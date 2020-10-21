import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle, NotificationsNone } from "@material-ui/icons";
import { useStyles } from "./styles";

export const Header: React.FC<{}> = () => {
	const styles = useStyles();
	return (
		<>
			<AppBar position="relative" className={styles.menu}>
				<Toolbar className={styles["menu-container"]}>
					<NotificationsNone className={styles.menu__icon_bell} />
					<span className={styles.menu__separator}></span>
					<Box className={styles.menu__userwrapper}>
						<AccountCircle className={styles.menu__icon_user} />
						<Typography className={styles.menu__username}>
							Иванова А.
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};
