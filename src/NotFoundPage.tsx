import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const NotFoundPage = () => {
	useEffect(() => {
		document.title = "Page Not Found - Projectory";
	});
	return (
		<main>
			<h1>Page Not Found</h1>
			<Link to="/">Return to home page</Link>
		</main>
	);
};

export default NotFoundPage;
