import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMess } from '../features/messSlice';

const Register = () => {
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: '',
	});
	let mess = useSelector(state => state.mess.mess)
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
			url: 'https://webgame395group.herokuapp.com/api/register',
			method: 'POST',
			headers: headersList,
			data: bodyContent,
		};

		return await axios.request(reqOptions);
	};

	const handleSubmit = e => {
		e.preventDefault();
		postForm()
			.then(res => {
				if (res.data.type === 'success') {
					dispatch(setMess(res.data.message));
					setTimeout(() => navigate('/login'), 1000);
				} else {
					dispatch(setMess(res.data.message));
				}
			})
			.catch(err => console.log(err.message));
	};

	return (
		<div>
			<h1>Register</h1>
			{mess ? mess : ''}
			<form method='post' onSubmit={handleSubmit}>
				<div>
					<input
						placeholder='username'
						name='username'
						onChange={e => setForm({ ...form, username: e.target.value })}
					/>
				</div>
				<div>
					<input placeholder='email' name='email' onChange={e => setForm({ ...form, email: e.target.value })} />
				</div>
				<div>
					<input
						placeholder='password'
						name='password'
						onChange={e => setForm({ ...form, password: e.target.value })}
					/>
				</div>
				<button type='submit'>submit</button>
			</form>
		</div>
	);
};

export default Register;
