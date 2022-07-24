import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<main>
			<h1>Projectory</h1>
			<h3>A web based task tracker</h3>
			<Link to="/about">About</Link>
		</main>
	);
}

export default HomePage;
