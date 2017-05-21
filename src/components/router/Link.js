import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Link extends Component {
	// Consume context
	static contextTypes = {
		route: PropTypes.string,
		linkHandler: PropTypes.func
	}
	handleClick = (event) => {
		event.preventDefault() 
		// able to use browser history and no reload is done
		// history.pushState(null, '', this.props.to)

		// Since app is a children of routes,ie: index.js-src 
		// we cannot add things using props into the final render 
		// refactor using context, to add them
		// this.propr.to is the route 
		this.context.linkHandler(this.props.to)
	}

	render() {
		const activeClass = this.context.routes 
											=== this.props.to ? 'active' : ''
		return  <a href="#" className={activeClass} onClick={this.handleClick}>
						{this.props.children}</a>
	}
}

Link.propType = {
	to: PropTypes.string.isRequired
}
