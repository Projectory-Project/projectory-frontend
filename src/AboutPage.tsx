import React from 'react';
import { Link } from 'react-router-dom'

interface IProps {};

interface IState {};

class AboutPage extends React.Component<IProps, IState>{
	constructor(props: IProps) {
		super(props);
	}

	componentDidMount() {
		document.title = "About - Projectory";
	}

	render() {
		return (
			<main>
				<h1>About</h1>
				<Link to="/">Return to home page</Link>
			</main>
		);
	}
}

export default AboutPage;
