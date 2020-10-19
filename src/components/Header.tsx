import React from "react";
import {
	AppBar,
	Box,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { AccountCircle, NotificationsNone } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menu: {
		backgroundColor: "transparent",
		display: "flex",
		alignItems: "flex-end",
		justifyContent: "flex-end",
		width: "100%",
		boxShadow: "none",
	},
	["menu-container"]: {
		padding: "16px 49px",
	},
	menu__icon_bell: {
		width: "36px",
		height: "36px",
		cursor: "pointer",
	},
	menu__icon_user: {
		width: "48px",
		height: "48px",
		fill: "purple",
	},
	menu__separator: {
		width: "1px",
		height: "39px",
		backgroundColor: "#fff",
		marginRight: "20px",
		marginLeft: "14px",
	},
	menu__userwrapper: {
		display: "flex",
		alignItems: "center",
	},
	menu__username: {
		fontWeight: 600,
		fontSize: "14px",
		marginLeft: "12px",
	},
}));
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
