import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
		width: "2px",
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
	["@media (max-width: 1000px)"]: {
		menu__icon_user: {
			width: "40px",
			height: "40px",
		},
		menu__icon_bell: {
			width: "32px",
			height: "32px",
		},
		menu__separator: {
			height: "32px",
			marginRight: "14px",
			marginLeft: "9px",
		},
		["menu-container"]: {
			padding: "17px 30px",
		},
		menu__username: {
			fontWeight: 600,
			fontSize: "14px",
			marginLeft: "9px",
		},
	},
	["@media (max-width: 684px)"]: {
		menu__icon_user: {
			width: "40px",
			height: "40px",
		},
		menu__icon_bell: {
			width: "32px",
			height: "32px",
		},
		menu__separator: {
			height: "32px",
			marginRight: "14px",
			marginLeft: "9px",
		},
		["menu-container"]: {
			padding: "17px 20px",
		},
		menu__username: {
			fontWeight: 600,
			fontSize: "14px",
			marginLeft: "9px",
		},
	},
	["@media (max-width: 520px)"]: {
		menu__icon_user: {
			width: "36px",
			height: "36px",
		},
		menu__icon_bell: {
			width: "28px",
			height: "28px",
		},
		menu__separator: {
			height: "28px",
			marginRight: "8px",
			marginLeft: "6px",
		},
		menu__username: {
			display: "none",
		},
		["menu-container"]: {
			padding: "17px 7px",
		},
	},
	["@media (max-width: 414px)"]: {
		menu__icon_user: {
			width: "29px",
			height: "29px",
		},
		menu__icon_bell: {
			width: "24px",
			height: "24px",
		},
		menu__separator: {
			height: "24px",
			marginRight: "5px",
			marginLeft: "4px",
		},
		menu__username: {
			display: "none",
		},
		["menu-container"]: {
			padding: "17px 7px",
		},
	},
}));
