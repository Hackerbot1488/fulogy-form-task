import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	modalBody__header: {
		color: "rgba(49, 49, 49, 0.7)",
		fontSize: "24px",
		lineHeight: "33px",
		fontWeight: 600,
		textAlign: "center",
		marginTop: "84px",
	},
	modalBody__header_success: {
		marginTop: "84px",
	},
	modalBody__button_confirm: {
		boxSizing: "border-box",
		color: "white",
		backgroundColor: "#01bda7",
		fontSize: "14px",
		lineHeight: "19px",
		paddingTop: "16px",
		paddingBottom: "16px",
		margin: "0 auto",
		marginTop: "42px",
		width: "200px",
		borderRadius: "41px",
		textTransform: "none",
		"&:hover": {
			backgroundColor: "rgba(1, 189, 167, 0.7)",
		},
	},
	["@media (max-width: 414px)"]: {
		modalBody__header_success: {
			marginTop: "29px",
			fontSize: "18px",
			lineHeight: "25px",
		},
	},
}));
