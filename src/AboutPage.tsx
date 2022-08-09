import React from 'react';
import { Link } from 'react-router-dom'

interface IProps {
};

interface IState {
	is_loaded: boolean;
	version_string: string;
};

class AboutPage extends React.Component<IProps, IState>{
	constructor(props: IProps) {
		super(props);
		this.state = {
			is_loaded: false,
			version_string: "loading"
		};
	}

	componentDidMount() {
		document.title = "About - Projectory";
		fetch("http://localhost:8080/server_version")
			.then(response => response.json())
			.then(result => {
				this.setState({
					is_loaded: true,
					version_string: result.version_string
				});
			});
	}

	render() {
		return (
			<main>
				<h1>About</h1>
				<h3>Projectory backend version: {this.state.version_string}</h3>
				<Link to="/">Return to home page</Link>
			</main>
		);
	}
}

export default AboutPage;
