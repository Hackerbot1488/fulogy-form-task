import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
	["@media (max-width: 1000px)"]: {
		["info-item__icon"]: {
			width: "33px",
			height: "33px",
		},
		["info-item"]: {
			height: "88px",
			paddingLeft: "57px",
			fontSize: "17px",
			lineHeight: "23px",
		},
		["icon-wrapper"]: {
			minWidth: "32px",
		},
		["info-item__text"]: {
			marginLeft: "30px",
		},
	},
	["@media (max-width: 684px)"]: {
		["info-item__icon"]: {
			width: "30px",
			height: "30px",
		},
		["info-item"]: {
			height: "80px",
			paddingLeft: "40px",
			fontSize: "16px",
			lineHeight: "22px",
		},
		["icon-wrapper"]: {
			minWidth: "32px",
		},
		["info-item__text"]: {
			marginLeft: "20px",
		},
	},
	["@media (max-width: 520px)"]: {
		["info-item__icon"]: {
			width: "27px",
			height: "27px",
		},
		["info-item"]: {
			height: "72px",
			paddingLeft: "27px",
			fontSize: "15px",
			lineHeight: "21px",
		},
		["icon-wrapper"]: {
			minWidth: "32px",
		},
		["info-item__text"]: {
			marginLeft: "12px",
		},
	},
	["@media (max-width: 414px)"]: {
		["info-item__icon"]: {
			width: "24px",
			height: "24px",
		},
		["info-item"]: {
			height: "64px",
			paddingLeft: "12px",
			fontSize: "14px",
			lineHeight: "19px",
		},
		["icon-wrapper"]: {
			minWidth: "32px",
		},
		["info-item__text"]: {
			marginLeft: "0px",
		},
	},
}));
