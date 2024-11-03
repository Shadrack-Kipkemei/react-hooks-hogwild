import React,{useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogList from "./HogList/HogList";
import HogForm from "./HogForm/HogForm";

function App() {

	const [greasedOnly, setGreasedOnly] = useState(false);
	const [sortKey, setSortKey] = useState(null)
	const [hiddenHogs, setHiddenHogs] = useState([])
	const [hogList, setHogList] = useState(hogs)

	function toggleGreased () {
		setGreasedOnly(prevState => !prevState)
	}

	function handleSortChange (event) {
		setSortKey(event.target.value);
	
	}

	function handleHide (name) {
		setHiddenHogs(prevState => [...prevState, name])
	}

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
			<HogForm onAddHog={handleAddHog} />
			<HogList 
			hogs={hogs} 
			greasedOnly={greasedOnly} 
			sortKey={sortKey}
			hiddenHogs={hiddenHogs}
			onHide={handleHide}
			/>
		</div>
	);
}

export default App;
