import React from "react";
import { Card, makeStyles, Typography, Button } from "@material-ui/core";
import { AccountCircle, Create, Close } from "@material-ui/icons";
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
		color: "#fff",
		boxShadow: "none",
		width: "150px",
		"&:hover": {
			backgroundColor: "transparent",
			boxShadow: "none",
		},
	},
	profile__button_text: {
		lineHeight: "19px",
		fontSize: "14px",
		fontWeight: 600,
		textTransform: "uppercase",
		marginRight: "2px",
	},
	profile__button_icon: {
		width: "24px",
		height: "24px",
	},
	["@media (max-width:1000px)"]: {
		profile: {
			padding: "12px 18px 12px 16px",
			margin: "26px 0px 20px",
		},
		profile__icon_user: {
			width: "72px",
			height: "72px",
		},
		profile__username: {
			fontSize: "23px",
			lineHeight: "31px",
			marginLeft: "26px",
		},
		profile__button: {
			padding: "2px",
			width: "126px",
		},
		profile__button_text: {
			lineHeight: "15px",
			fontSize: "11px",
		},
	},
	["@media (max-width: 684px)"]: {
		profile: {
			padding: "9px 14px 9px 12px",
			margin: "18px 0px 16px",
		},
		profile__icon_user: {
			width: "54px",
			height: "54px",
		},
		profile__username: {
			fontSize: "18px",
			lineHeight: "24px",
			marginLeft: "20px",
		},
		profile__button: {
			width: "94px",
		},
		profile__button_text: {
			lineHeight: "12px",
			fontSize: "8px",
		},
	},
	["@media (max-width: 520px)"]: {
		profile: {
			padding: "8px 8px 8px 2px",
			margin: "14px 0px 13px",
		},
		profile__icon_user: {
			width: "48px",
			height: "48px",
		},
		profile__username: {
			fontSize: "14px",
			lineHeight: "19px",
			marginLeft: "2px",
		},
		profile__button: {
			width: "94px",
		},
		profile__button_text: {
			lineHeight: "12px",
			fontSize: "8px",
		},
	},
	["@media (max-width: 414px)"]: {
		profile: {
			paddingRight: "7px",
			margin: "10px 0px",
		},
		profile__button: {
			minWidth: "24px",
			width: "24px",
			padding: "0px",
		},
		profile__button_text: {
			display: "none",
		},
	},
}));
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
	return (
		<>
			<Card className={styles.profile}>
				<AccountCircle className={styles.profile__icon_user} />
				<Typography className={styles.profile__username}>
					Иванова Анна Михайловна
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
