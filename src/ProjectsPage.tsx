import React from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

interface ProjectListEntry {
	project_name: string;
	id: string;
};

interface IProps {}
interface IState {
	current_user: string;
	pl: ProjectListEntry[];
}

class ProjectsPage extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = { current_user: "", pl: [] };
	}

	componentDidMount() {
		document.title = "Projects - Projectory";

		fetch("http://localhost:8080/users/user", { credentials: "include" }).then(response => {
			if (response.status !== 200) {
				window.location.replace("/login")
			} else {
				return response.json();
			}
		}).then(json => {
			this.setState({ current_user: json.user });
		});

		fetch("http://localhost:8080/project/project_list", { credentials: "include" }).then(response => {
			if (response.status !== 200) {
				window.location.replace("/login")
			} else {
				return response.json();
			}
		}).then(json => {
			this.setState({ pl: json.project_list });
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
				<h4>Current User: {this.state.current_user}</h4>
				<Button variant="outline-primary" onClick={this.logout}>Log out</Button>
				<h1>Projects:</h1>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Project Name</th>
							<th>Project ID</th>
						</tr>
					</thead>
					<tbody>
						{this.state.pl.map((p) =>
							<tr key={"project-" + p.id}>
								<td>{p.project_name}</td>
								<td>{p.id}</td>
							</tr>
						)}
					</tbody>
				</Table>
			</main>
		);
	}
}

export default ProjectsPage;
