import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';

function logout() {
	fetch("http://localhost:8080/auth/logout", {
		method: 'POST',
		credentials: "include"
	}).then(response => {
		window.location.replace("/");
	});
}

function Header() {
	const [current_user, set_current_user] = useState("loading...");
	useEffect(() => {
		fetch("http://localhost:8080/users/user", {
			credentials: "include"
		}).then(response => {
			if (response.status !== 200) {
				window.location.replace("/login")
			} else {
				return response.json();
			}
		}).then(json => {
			set_current_user(json.user);
		});
	});

	return (
		<header>
			<h4>Current User: {current_user}</h4>
			<Button variant="outline-primary" onClick={logout}>Log out</Button>
			<hr />
		</header>
	)
}

export default Header;
