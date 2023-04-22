import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'Manolish',
		email: 'manolish08@gmail.com',
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	useEffect(() => {
		// console.log('bl');
	}, []);

	useEffect(() => {
		// console.log('blblabla2');
	}, [formState]);

	useEffect(() => {
		// console.log('email change');
	}, [email]);

	return (
		<>
			<h1>Simple Form</h1>
			<hr />

			<input
				type="text"
				className="form-control"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			<input
				type="email"
				className="form-control mt-2 mb-2"
				placeholder="manolo@google.com"
				name="email"
				value={email}
				onChange={onInputChange}
			/>

			{username === 'Manolish2' && <Message />}
		</>
	);
};
