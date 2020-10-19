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
});

export default theme;
