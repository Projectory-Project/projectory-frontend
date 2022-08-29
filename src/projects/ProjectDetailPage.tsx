import { useParams } from 'react-router-dom';
import Header from './../webpage/Header'
import Footer from './../webpage/Footer'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';

function ProjectDetailPage() {
	const params = useParams();

	const [project_name, set_project_name] = useState<string>("loading...");
	const [description, set_description] = useState<string>("loading...");
	const [project_id, set_project_id] = useState<string>("loading...");
	const [owner, set_owner] = useState<string>("loading...");
	const [current_perm, set_current_perm] = useState<string>("loading...");

	useEffect(() => {
		fetch("http://localhost:8080/projects/" + params.owner + "/" + params.project_id, {
			credentials: "include"
		}).then(response => {
			if (response.status !== 200) {
				window.location.replace("/login")
			} else {
				return response.json();
			}
		}).then(json => {
			set_project_name(json.project_name);
			set_description(json.description);
			set_project_id(json.id);
			set_owner(json.owner);
			set_current_perm(json.current_perm);
			document.title = json.project_name + " - Project Detail - Projectory";
		});
	})

	return (
		<>
			<Header />
			<main>
				<h1> {project_name} </h1>
				<h3> {description} </h3>
				<h4> {"Owner: " + owner} </h4>
				<h4> {"You are an " + current_perm + " of the project"}</h4>
				<h6> {"ID: " + project_id}</h6>
				<Button variant="primary" >Meeting Schedule</Button>
				<br />
				<Button variant="primary">Kanban Map</Button>
			</main>
			<Footer />
		</>
	);
}

export default ProjectDetailPage;
