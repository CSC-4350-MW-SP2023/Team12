import React from 'react'
import { useState } from 'react'
import appLogo from '../assets/virusLogo.svg'
import fakeData from '../fakedata/locations.json'

const App = () => {
	const [tabledata] = useState(fakeData);
	
	return <div className="app-container">
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Address</th>
				<th>Actions</th>
			</tr>
			</thead>
			<tbody>
				{tabledata.map((data)=>
				<tr>
					<td>{data.Name}</td>
					<td>{data.address}</td>
					<td><button type="delete">Delete</button></td>
				</tr> )}
			</tbody>
		</table>
		<h2>Add a Location</h2>
		<div class="vvcontainer">
		<form>
			<input 
			type="text" 
			name="name" 
			required="required" 
			placeholder="Location Name"
			/>
			<input 
			type="text" 
			name="address" 
			required="required" 
			placeholder="Location Address"
			/>
			<button type="submit">Submit</button>
		</form>
		</div>
	</div>;
};

export default App;



