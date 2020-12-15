import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from 'C:/Users/MEGHANA/Desktop/React/myresume/src/photo/manu.jpeg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='John Doe' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Manoj.S
					</span>
					<p>Front End Web Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<i className='fab fa-facebook-f blue-text text-darken-4 social_style'></i>
						<i className='fab fa-twitter light-blue-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g red-text text-darken-4 social_style'></i>
						<i className='fab fa-instagram pink-text text-darken-4 social_style'></i>
						<i className='fab fa-pinterest red-text text-darken-4 social_style'></i>
					</p>
				</div>
			</div>
		</div>
	);
}