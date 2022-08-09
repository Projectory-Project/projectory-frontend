import React, { ChangeEvent, FormEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
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


	componentDidMount() {
		document.body.className = "justify-content-center";
	}

	form_submit() {
		console.log("submit " + this.state.email + " " + this.state.password);

		fetch("http://localhost:8080/testlogin", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				'username': this.state.email,
				'password': this.state.password
			})
		}).then(response => {
			if (response.status == 200) {
				alert("Login success");
			} else {
				alert("Login fail");
			}
		});
	}

	render() {
		return (

			<main className="form-signin w-100 m-auto" style={{ textAlign: 'center' }}>

				<img src='favicon.ico' alt="logo" width={100} height={100}></img>
				<br></br><br></br>
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
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" id="login" type="submit" onClick={this.form_submit.bind(this)}>Sign in</button>


				<small>
					Don't have an account? &nbsp;
					<a className="text-muted" href="/signup" style={{ textDecoration: "underline" }}>Sign Up</a>

				</small>

				<br></br>

				<small>
					Or, return to &nbsp;
					<a className="text-muted" href="/" style={{ textDecoration: "underline" }}>Home Page</a>
				</small>

			</main>
		);
	}
}

export default LoginPage;
