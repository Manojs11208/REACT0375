import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Btech-CSE</td>
								<td>Jan 2021</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>12TH CLASS</td>
								<td>May 2017</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>SSLC</td>
								<td>MARCH 2015</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Other</td>
								<td>Dec 2019</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
