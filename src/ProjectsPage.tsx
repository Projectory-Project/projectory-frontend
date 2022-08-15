import React from 'react'

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
				window.location.replace("http://localhost:3000/login")
			} else {
				return response.text();
			}
		}).then(text => {
			if (text) {
				this.setState({ current_user: text });
			}
		});
	}

	render() {
		return <h1>Current User: {this.state.current_user}</h1>
	}
}

export default ProjectsPage;
