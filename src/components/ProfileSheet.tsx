import React from "react";
import { Card, makeStyles, Typography, Button } from "@material-ui/core";
import { AccountCircle, Create } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
	profile: {
		display: "flex",
		background: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
		boxSizing: "border-box",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
		borderRadius: "10px",
		alignItems: "center",
		color: "#fff",
		width: "100%",
		padding: "16px 25px 16px 22px",
		margin: "32px 0px 24px",
	},
	profile__icon_user: {
		width: "96px",
		height: "96px",
		fill: "purple",
	},
	profile__username: {
		fontSize: "30px",
		lineHeight: "41px",
		fontWeight: 600,
		flex: 1,
		marginLeft: "34px",
	},
	profile__button: {
		padding: "3px",
		backgroundColor: "transparent",
		textTransform: "uppercase",
		color: "#fff",
		lineHeight: "19px",
		fontSize: "14px",
		fontWeight: 600,
		boxShadow: "none",
	},
}));
export const ProfileSheet: React.FC<{}> = () => {
	const styles = useStyles();
	return (
		<>
			<Card className={styles.profile}>
				<AccountCircle className={styles.profile__icon_user} />
				<Typography className={styles.profile__username}>
					Иванова Анна Михайловна
				</Typography>
				<Button
					variant="contained"
					endIcon={<Create />}
					className={styles.profile__button}
				>
					редактировать
				</Button>
			</Card>
		</>
	);
};
