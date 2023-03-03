import { useState } from 'react'
import appLogo from '../assets/virusLogo.svg'
import fakeCondition from '../fakedata/validation-conditions.json'
import fakeVisitor from '../fakedata/validation-visitors.json'

function App() {
  const [conditionData] = useState(fakeCondition);
  const [visitorData] = useState(fakeVisitor);
	
  return (
    <div className="page">
		<h1>Virus Validation</h1>
		<div id="visitortable">
			<h2> Visitors </h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{visitorData.map((data)=>
					<div>
						<tr>
							<td>{data.first_name} {data.last_name}</td>
							<td>{data.email}</td>
						</tr>
						<tr>
							<div id="conditiontable">
								<table>
									<tbody>
										{conditionData.map((data)=>
											<tr>
												<td>{data.Name}</td>
												<td>{data.Description}</td>
												<td><input type="checkbox"/></td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</tr>
					</div>
					)}
				</tbody>
			</table>
		</div>
		<div><a href={`/validation`}><button type="submit">Submit</button></a></div>
    </div>
  )
}

export default App
