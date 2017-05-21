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
	// update the route and push to history of the browser
	// note arg is the same as props so we pass it directly
	handleLinkClick = (route) => {
		this.setState({route})
		history.pushState(null, '', route)
	}
	// React context mechanism, using prpoTypes
	// note that context should not be change
	// explore REDUX
	static childContextTypes = {
		route: PropTypes.string,
		linkHandler: PropTypes.func
	}
	// Used to expose the context of child context
	getChildContext() {
		return {
			route: this.state.route,
			linkHandler: this.handleLinkClick
		}
	} 
	// update the state of the todos when button in browser back and 
	// forward are pressed. onpopstate event uses event handler.
	// note that the method stands alone.
	componentDidMount() {  
		window.onpopstate = () => {
			this.setState({route: getCurrentPath()})
		}
	}

	render () {
		return <div>{this.props.children}</div>
	}
}