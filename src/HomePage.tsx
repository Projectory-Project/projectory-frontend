import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const HomePage = () => {
	useEffect(() => {
		document.title = "Projectory";
	});
	return (
		<main>
			<h1>Projectory</h1>
			<h3>A web based task tracker</h3>
			<Link to="/about">About</Link>
		</main>
	);
}

export default HomePage;
