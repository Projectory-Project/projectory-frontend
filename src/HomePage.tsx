import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import Footer from './webpage/Footer'

const HomePage = () => {
	useEffect(() => {
		document.title = "Projectory";
	});
	return (
		<>
			<main>
				<h1>Projectory</h1>
				<h3>A web based task tracker</h3>
				<Link to="/login" style={{ fontSize: "larger" }}>Login</Link>
			</main>
			<Footer />
		</>
	);
}

export default HomePage;
