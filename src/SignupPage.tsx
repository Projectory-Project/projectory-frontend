import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import './signup.css'




interface IProps {}

interface IState {
	username: string;
	email: string;
	password: string;
	remember: boolean;
}

function TermsOfUse() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
			<small className="text-muted" >By clicking Sign up, you agree to the <span onClick={handleShow} style={{ textDecoration: "underline", cursor: "pointer" }}> terms of use </span>.</small>



			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Terms of Use</Modal.Title>
				</Modal.Header>
				<Modal.Body>Be a good person while using the website.</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Close
					</Button>

				</Modal.Footer>
			</Modal>
		</>




	);
}


class SignupPage extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			remember: false
		}
	}


	componentDidMount() {
		document.body.className = "justify-content-center";
	}






	form_submit() {

		fetch("http://localhost:8080/auth/register", {
			method: 'POST',
			credentials: "include",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				'username': this.state.username,
				'email': this.state.email,
				'password': this.state.password
			})
		}).then(response => {
			if (response.status === 200) {
				alert("Signup success");
			} else {
				alert("Signup fail");
			}
		});
	}

	render() {
		return (
			// <><svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }} >
			//     <symbol id="bootstrap" viewBox="0 0 118 94">
			//         <title>Bootstrap</title>
			//         <path fill-rule="evenodd" clip-rule="evenodd"
			//             d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z">
			//         </path>
			//     </symbol>

			//     <symbol id="github" viewBox="0 0 16 16">
			//         <path
			//             d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
			//     </symbol>

			//     <symbol id="twitter" viewBox="0 0 16 16">
			//         <path
			//             d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
			//     </symbol>

			//     <symbol id="facebook" viewBox="0 0 16 16">
			//         <path
			//             d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
			//     </symbol>
			// </svg>
			<div className="modal modal-signin position-absolute d-block bg-light py-5" tabIndex={-1} role="dialog" id="modalSignin">
				<div className="modal-dialog" role="document">
					<div className="modal-content rounded-4 shadow">
						<div className="modal-header p-5 pb-4 border-bottom-0">
							<h2 className="fw-bold mb-0">Sign up for free</h2>

							{/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={/} onClick="location.href='/login.html'">


                                </button> */}

							<Link type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" to="/login" ></Link>


						</div>

						<div className="modal-body p-5 pt-0">

							<div className="form-floating mb-3">
								<input type="text" id="username" className="form-control rounded-3" placeholder="username" value={this.state.username} onChange={(event: ChangeEvent<HTMLInputElement>) => { this.setState({ username: event.target.value }) }} />
								<label htmlFor="floatingInput">Username</label>

							</div>

							<div className="form-floating mb-3">
								<input type="email" id="email" className="form-control rounded-3"
									placeholder="name@example.com" value={this.state.email} onChange={(event: ChangeEvent<HTMLInputElement>) => { this.setState({ email: event.target.value }) }} />
								<label htmlFor="floatingInput">Email address</label>
							</div>

							<div className="form-floating mb-3">
								<input type="password" id="password" className="form-control rounded-3"
									placeholder="Password" value={this.state.password} onChange={(event: ChangeEvent<HTMLInputElement>) => { this.setState({ password: event.target.value }) }} />
								<label htmlFor="floatingPassword">Password</label>
							</div>

							<button id="signUp" className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" onClick={this.form_submit.bind(this)}>Sign up</button>
							<TermsOfUse />








							{/* 
                                <hr className="my-4">
                                    <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                    <button className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3" type="submit">
                                        <svg className="bi me-1" width="16" height="16">
                                            <use xlinkHref="#twitter" />
                                        </svg>
                                        Sign up with Twitter
                                    </button>


                                    <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
                                        <svg className="bi me-1" width="16" height="16">
                                            <use xlinkHref="#facebook" />
                                        </svg>
                                        Sign up with Facebook
                                    </button>
                                    <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                        <svg className="bi me-1" width="16" height="16">
                                            <use href="#github" />
                                        </svg>
                                        Sign up with GitHub
                                    </button>
                                </hr>  */}

						</div>
					</div>
				</div>
			</div>
			// </>
		)
	}
}

export default SignupPage;
