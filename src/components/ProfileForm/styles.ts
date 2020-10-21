import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	form: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#fff",
		borderRadius: "10px",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
	},
	["form-container"]: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		paddingTop: "49px",
		paddingBottom: "15px",
		justifyContent: "center",
		maxWidth: "none",
	},
	["form-container_bottom"]: {
		paddingTop: "5px",
		paddingBottom: "44px",
	},
	form__separator: {
		width: "2px",
		height: "97px",
		backgroundColor: "#CAE7FE",
		marginRight: "28px",
		marginLeft: "73px",
	},
	["input-wrapper"]: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		maxWidth: "350px",
		height: "80px",
	},
	["form__icon"]: {
		width: "36px",
		height: "36px",
		fill: "#00BFA5",
		marginRight: "42px",
		marginBottom: "26px",
	},
	form__input: {
		maxWidth: "270px",
		width: "100%",
	},
	form__button: {
		color: "#fff",
		backgroundColor: "#01BDA7",
		fontSize: "14px",
		lineHeight: "19px",
		fontWeight: 600,
		borderRadius: "36px",
		flex: 1,
		maxWidth: "212px",
		paddingTop: "15px",
		paddingBottom: "15px",
		width: "100%",
	},
	["@media (max-width: 1200px)"]: {
		form__separator: {
			margin: 0,
		},
		form__icon: {
			display: "none",
		},
		form__button: {
			margin: "0px auto",
		},
		["form-container"]: {
			justifyContent: "space-between",
		},
		["input-wrapper"]: {
			maxWidth: "270px",
		},
	},
	["@media (max-width: 1000px)"]: {
		form__separator: {
			display: "none",
		},
		["input-wrapper"]: {
			maxWidth: "270px",
			padding: "0 10px",
		},
	},
	["@media (max-width: 684px)"]: {
		["form-container"]: {
			flexDirection: "column",
			padding: "13px 23px 0px",
		},
		["input-wrapper"]: {
			margin: "13px auto 0px auto",
		},
		["input-wrapper:last-child"]: {
			marginBottom: "0px",
		},
		form__separator: {
			display: "none",
		},
		form__button: {
			paddingTop: "15px",
			paddingBottom: "15px",
		},
		["form-container_bottom"]: {
			padding: "0px 0px 16px",
		},
	},
	["@media (max-width: 414px)"]: {
		form__icon: {
			display: "none",
		},
		["input-wrapper"]: {
			padding: "0",
		},
	},
	root: {
		"& label": {
			"&.Mui-focused": {
				color: "#01bda7",
			},
		},
		"& .MuiOutlinedInput-root": {
			"&:hover fieldset": {
				borderColor: "black",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#01bda7",
			},
			"& input": {
				fontSize: "14px",
				lineHeight: "19px",
			},
		},
		height: "80px",
	},
	["modalBody_down"]: {
		transform: "translateY(120%)",
	},
}));
