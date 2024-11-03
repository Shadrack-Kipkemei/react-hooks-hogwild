import React,{useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogList from "./HogList/HogList";
import HogForm from "./HogForm/HogForm";
import 'semantic-ui-css/semantic.min.css';

function App() {

	// state to manage whether to show only greased hogs
	const [greasedOnly, setGreasedOnly] = useState(false);
	// state to manage sorting preference (by name or weight)
	const [sortKey, setSortKey] = useState(null)
	// State to manage hidden hogs
	const [hiddenHogs, setHiddenHogs] = useState([])
	// State to manage the list of hogs
	const [hogList, setHogList] = useState(hogs)

	// Toggles the greasedonly state
	function toggleGreased () {
		setGreasedOnly(prevState => !prevState)
	}

	// Handle changes in sorting
	function handleSortChange (event) {
		setSortKey(event.target.value);
	
	}

	// Handles hiding a hog
	function handleHide (name) {
		setHiddenHogs(prevState => [...prevState, name])
	}

	// handles adding a new hog
	function handleAddHog(newHog) {
		setHogList(prevState => [...prevState, newHog]);
	}
	return (
		<div className="App">
			<h1>Hog List</h1>
			<label>
				<input
				type="checkbox"
				checked={greasedOnly}
				onChange={toggleGreased}
				/> 
			</label>
			<label>
				Sort by:
				<select onChange={handleSortChange} value={sortKey}>
					<option value="">None</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</label>
			{/* Form to add new hogs  */}
			<HogForm onAddHog={handleAddHog} /> 

			{/* List of hogs with filters and hiding functionality  */}
			<HogList 
			hogs={hogList} 
			greasedOnly={greasedOnly} 
			sortKey={sortKey}
			hiddenHogs={hiddenHogs}
			onHide={handleHide}
			/>
		</div>
	);
}

export default App;
