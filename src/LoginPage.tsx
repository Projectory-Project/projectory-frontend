import React, { ChangeEvent, FormEvent } from 'react'
import './login.css'

interface IProps {}

interface IState {
	email: string;
	password: string;
	remember: boolean;
}

class LoginPage extends React.Component<IProps, IState>{
	constructor(props: IProps) {
		super(props);
		this.state = {
			email: "",
			password: "",
			remember: false
		}
	}

	form_submit() {
		console.log("submit " + this.state.email + " " + this.state.password);

		fetch("http://localhost:8080/auth/login", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				'username': this.state.email,
				'password': this.state.password
			})
		});
	}

	render() {
		return (
			<main className="form-signin w-100 m-auto">

				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

				<div className="form-floating">
					<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={this.state.email} onChange={(event: ChangeEvent<HTMLInputElement>) => { this.setState({ email: event.target.value }) }} />
					<label htmlFor="floatingInput">Email address</label>
				</div>


				<div className="form-floating">
					<input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={this.state.password} onChange={(event: ChangeEvent<HTMLInputElement>) => { this.setState({ password: event.target.value }) }} />
					<label htmlFor="floatingPassword">Password</label>
				</div>

				<div className="checkbox mb-3">
					<label>
						<input type="checkbox" value="remember-me" />
					</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" id="login" type="submit" onClick={this.form_submit.bind(this)}>Sign in</button>


				<small>
					Don't have an account?
					<a className="text-muted" href="/signup.html">Sign Up</a>
				</small>

				<small>
					Or, return to
					<a className="text-muted" href="/index.html">home page</a>
				</small>

			</main>
		);
	}
}

export default LoginPage;
