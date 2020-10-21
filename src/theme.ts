import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		background: {
			default: "#fff",
		},
	},
	typography: {
		fontFamily: "Open Sans",
		fontWeightRegular: 400,
		fontWeightBold: 600,
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				body: {
					display: "flex",
					margin: "0",
					padding: "0",
					boxSizing: "border-box",
					minHeight: "100vh",
				},
				"#__next": {
					width: "100%",
				},
			},
		},
	},
});

export default theme;
