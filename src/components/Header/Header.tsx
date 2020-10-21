import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle, NotificationsNone } from "@material-ui/icons";
import { useStyles } from "./styles";
import { User } from "../Content/ProfileData/ProfileData";

export const Header: React.FC<{}> = () => {
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
	function cutName() {
		if (user?.name) {
			const pieces = user.name.split(" ");
			return pieces[0] + " " + pieces[1][0] + ".";
		} else {
			return "";
		}
	}
	return (
		<>
			<AppBar position="relative" className={styles.menu}>
				<Toolbar className={styles["menu-container"]}>
					<NotificationsNone className={styles.menu__icon_bell} />
					<span className={styles.menu__separator}></span>
					<Box className={styles.menu__userwrapper}>
						<AccountCircle className={styles.menu__icon_user} />
						<Typography className={styles.menu__username}>
							{cutName() || "Иванова А."}
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};
