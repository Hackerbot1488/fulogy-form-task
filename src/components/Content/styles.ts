import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	contentValue: {
		display: "flex",
		flexDirection: "column",
		padding: "0px 23px 0px 34px",
		color: "#fff",
		margin: 0,
		flex: 1,
		maxWidth: "none",
	},
	content__header: {
		textAlign: "left",
		fontSize: "18px",
		lineHeight: "25px",
		textTransform: "uppercase",
		fontWeight: 600,
		width: "100%",
		marginTop: 0,
		marginBottom: 0,
	},
	breadcrumbs: {
		marginTop: "10px",
		color: "#fff",
	},
	breadcrumbs__crumb: {
		fontSize: "14px",
		lineHeight: "19px",
	},
	breadcrumbs__separator: {
		margin: 0,
	},
	["@media (max-width: 684px)"]: {
		contentValue: {
			padding: "0px 10px",
		},
	},
	["@media (max-width: 414px)"]: {
		content__header: {
			textAlign: "left",
			fontSize: "14px",
			lineHeight: "19px",
			textTransform: "uppercase",
			fontWeight: 600,
			width: "100%",
		},
		breadcrumbs: {
			marginTop: "8px",
			color: "#fff",
		},
		breadcrumbs__crumb: {
			fontSize: "12px",
			lineHeight: "16px",
		},
	},
}));
