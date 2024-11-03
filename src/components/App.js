import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogList from "./HogList/HogList";

function App() {
	return (
		<div className="App">
			<h1>Hog List</h1>
			<HogList/>
		</div>
	);
}

export default App;
