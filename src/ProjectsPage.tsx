import React from 'react'
import Button from 'react-bootstrap/Button'

interface IProps {}
interface IState {
	current_user: string;
}

class ProjectsPage extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = { current_user: "" };
	}

	componentDidMount() {
		document.title = "Projects - Projectory";
		fetch("http://localhost:8080/users/user", { credentials: "include" }).then(response => {
			if (response.status != 200) {
				window.location.replace("/login")
			} else {
				return response.json();
			}
		}).then(json => {
			this.setState({ current_user: json.user });
		});
	}

	logout() {
		fetch("http://localhost:8080/auth/logout", {
			method: 'POST',
			credentials: "include"
		}).then(response => {
			window.location.replace("/");
		});
	}

	render() {
		return (
			<main>
				<h1>Current User: {this.state.current_user}</h1>
				<Button variant="outline-primary" onClick={this.logout}>Log out</Button>
			</main>
		);
	}
}

export default ProjectsPage;
