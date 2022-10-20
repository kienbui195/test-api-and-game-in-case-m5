import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMess } from '../features/messSlice';

const Login = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const mess = useSelector(state => state.mess.mess);

	const postForm = async () => {
		let headersList = {
			'Content-Type': 'application/json',
		};

		let bodyContent = JSON.stringify({
			email: form.email,
			password: form.password,
		});

		let reqOptions = {
			url: 'https://webgame395group.herokuapp.com/api/login',
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
					setTimeout(() => navigate('/home'));
				} else {
					dispatch(setMess(res.data.message));
				}
			})
			.catch(err => console.log(err.message));
	};

	return (
		<>
			<h1>Login</h1>
			{mess ? mess : ''}
			<form method='post' onSubmit={handleSubmit}>
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

export default Login;
