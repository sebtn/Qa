import React from 'react'
import {Link} from '../router/'

export const Footer = () => {
	return (
		<div className="Footer">
			<button><Link to="/">All</Link></button>
			<button><Link to="/active">Active</Link></button>
			<button><Link to="/complete">Complete</Link></button>
		</div>
	)
}
