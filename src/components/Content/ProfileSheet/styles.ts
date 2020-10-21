import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	profile: {
		display: "flex",
		background: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
		boxSizing: "border-box",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
		borderRadius: "10px",
		alignItems: "center",
		color: "#fff",
		width: "100%",
		padding: "24px 25px 24px 30px",
		margin: "32px 0px 24px",
	},
	profile__icon_user: {
		width: "80px",
		height: "80px",
		fill: "purple",
		borderRadius: "50%",
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
			width: "60px",
			height: "60px",
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
			padding: "16px 14px 16px 12px",
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
			padding: "16px 8px 16px 10px",
			margin: "14px 0px 13px",
		},
		profile__icon_user: {
			width: "40px",
			height: "40px",
		},
		profile__username: {
			fontSize: "14px",
			lineHeight: "19px",
			marginLeft: "10px",
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
