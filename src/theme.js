import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const theme = createTheme({
	palette: {
		primary: {
			main: grey[500],
		},
	},
	myButton: {
		backgroundColor: "violet",
		color: "white",
		border: "1px solid black",
	},
});
