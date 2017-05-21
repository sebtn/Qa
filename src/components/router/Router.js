import React, {Component} from 'react'
import PropTypes from 'prop-types'

const getCurrentPath = () => {
	const path = document.location.pathname
	// return the last segment of the path name
	return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
	// note the lack of this.state
	state = {
		route: getCurrentPath()
	}
	// update the route and push to history of the route
	// note arg is the same as props
	handleLinkClick = (route) => {
		this.setState({route})
		history.pushState(null, '', route)
	}
	// React context mechanism, using prpoTypes
	static childContextTypes = {
		route: PropTypes.string,
		linkHandler: PropTypes.func
	}
	// Used to expose the context
	getChildContext() {
		return {
			route: this.state.route,
			linkHandler: this.handleLinkClick
		}
	} 
	render () {
		return <div>{this.props.children}</div>
	}
}