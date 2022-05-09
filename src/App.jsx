import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
	button: {
		...theme.myButton,
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<div>
			<Button
				variant="contained"
				size="small"
				color="primary"
				startIcon={<Person />}
				className={classes.button}
			>
				Material UI
			</Button>
		</div>
	);
};

export default App;
