import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		padding: "0 10px",
	},
	["@media (max-width: 414px)"]: {
		modal: {
			alignItems: "flex-end",
			padding: "0",
		},
	},
}));
