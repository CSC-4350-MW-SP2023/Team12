import React from 'react'
import { useState } from 'react'
import appLogo from '../assets/virusLogo.svg'
import fakeData from '../fakedata/validation-conditions.json'

function App() {
	const [tabledata] = useState(fakeData);
  return (
    <div className="page">
		<h1>Guest Page</h1>
		<div id="visitortable">
			<h2> Visitors </h2>
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Select Documentation</th>
					<th>Upload</th>
				</tr>
				</thead>
				<tbody>
					{tabledata.map((data)=>
					<tr>
						<td>{data.Name}</td>
						<td><input type="file"/></td>
						<td><button>Upload</button></td>
					</tr> )}
				</tbody>
			</table>
		</div>
    </div>
  )
}

export default App
