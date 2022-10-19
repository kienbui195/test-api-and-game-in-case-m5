import { useState } from 'react';
import axios from 'axios';

const Register = () => {
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: '',
	});

	const postForm = async () => {
		let headersList = {
			'Content-Type': 'application/json',
		};

		let bodyContent = JSON.stringify({
			username: form.username,
			email: form.email,
			password: form.password,
		});

		let reqOptions = {
			url: 'http://localhost:8000/api/register',
			method: 'POST',
			headers: headersList,
			data: bodyContent,
		};

		return await axios.request(reqOptions);
	};

	const handleSubmit = e => {
		e.preventDefault();
		postForm()
			.then(res => console.log(res))
			.catch(err => console.log(err.message));
	};

	return (
		<>
			<h1>Register</h1>
			<form method='post' onSubmit={handleSubmit}>
				<div>
					<input
						placeholder='username'
						name='username'
						onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
					/>
				</div>
				<div>
					<input
						placeholder='email'
						name='email'
						onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
					/>
				</div>
				<div>
					<input
						placeholder='password'
						name='password'
						onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
					/>
				</div>
				<button type='submit'>submit</button>
			</form>
		</>
	);
};

export default Register;
