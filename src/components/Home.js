import React, { Component } from 'react';
import Experiences from './Experiences';
import Navbar from './Navbar';
import Portfollos from './Portfollos';
import Profile from './Profile';
import Skills from './Skills';
import Education from './Educations';
import About from './About';


export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<Experiences />
							<Education />
							<Portfollos />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
