import React from 'react'
import { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import appLogo from '../assets/virusLogo.svg'
import fakeLocation from '../fakedata/locations.json'
import fakeCondition from '../fakedata/conditions.json'
import fakeVisitor from '../fakedata/visitors.json'

function App() {
	const [locationData] = useState(fakeLocation);
	const [conditionData] = useState(fakeCondition);
	const [visitorData] = useState(fakeVisitor);
	const [value, onChange] = useState(new Date());

  return (
    <div className="page">
		<h1>Create Appointment</h1>
		<div id="conditiontable">
			<h2> Conditions </h2>
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Check For</th>
				</tr>
				</thead>
				<tbody>
					{conditionData.map((data)=>
					<tr>
						<td>{data.Name}</td>
						<td>{data.Description}</td>
						<td><input type="checkbox"/></td>
					</tr> )}
				</tbody>
			</table>
		</div>
		<a href={`/conditions`}><button type="link">Add Condition</button></a>
		<div id="visitortable">
			<h2> Visitors </h2>
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Invite</th>
				</tr>
				</thead>
				<tbody>
					{visitorData.map((data)=>
					<tr>
						<td>{data.first_name} {data.last_name}</td>
						<td>{data.email}</td>
						<td><input type="checkbox"/></td>
					</tr> )}
				</tbody>
			</table>
		</div>
		<a href={`/visitor`}><button type="link">Add Visitor</button></a>
		<div class="container">
			<div id="dropdown">
				<label>Select Appointment Location</label>
				<br />
				<select>
					<option selected disabled="true">-- Select Location</option>
					{locationData.map((data)=> 
						<option>{data.Name}</option>
					)}
				</select>
			</div>
			<br />
			<div class="datetime">
				<label>Select Appointment Time</label>
				<br/>
				<DateTimePicker onChange={onChange} value={value}/>
			</div>
		</div>
		<div><a href={`/validation`}><button type="submit">Create Appointment</button></a></div>
    </div>
  )
}

export default App
