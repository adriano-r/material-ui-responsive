import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({}));

const App = () => {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
		</div>
	);
};

export default App;
