import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import Header from './../webpage/Header'
import Footer from './../webpage/Footer'
import Button from 'react-bootstrap/Button'

interface ProjectListEntry {
	project_name: string;
	id: string;
	owner: string;
	perm: string;
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

	render() {
		return (
			<>
				<Header />
				<Button variant="outline-primary" onClick={() => { alert("Not implemented"); }}>Create a new project</Button>
				<main>
					<h1>Projects:</h1>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Project Name</th>
								<th>Project ID</th>
								<th>Project Owner</th>
								<th>Permission</th>
							</tr>
						</thead>
						<tbody>
							{this.state.pl.map((p) =>
								<tr key={"project-" + p.id}>
									<td>
										<Link to={"/projects/" + p.owner + "/" + p.id}>
											{p.project_name}
										</Link>
									</td>
									<td>{p.id}</td>
									<td>{p.owner}</td>
									<td>{p.perm}</td>
								</tr>
							)}
						</tbody>
					</Table>
				</main>
				<Footer />
			</>
		);
	}
}

export default ProjectsPage;
