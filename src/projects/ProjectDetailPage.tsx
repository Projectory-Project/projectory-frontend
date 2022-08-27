import { useParams } from 'react-router-dom';
import Header from './../webpage/Header'
import Footer from './../webpage/Footer'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';

function ProjectDetailPage() {
	var params = useParams();
	useEffect(() => {
		document.title = params.project_id + " - Project Detail - Projectory";
	})

	return (
		<>
			<Header />
			<main>
				<h1> {params.project_id} </h1>
				<h5> {"Owner: " + params.owner} </h5>
				<Button variant="primary" >Meeting Schedule</Button>
				<br />
				<Button variant="primary">Kanban Map</Button>
			</main>
			<Footer />
		</>
	);
}

export default ProjectDetailPage;
