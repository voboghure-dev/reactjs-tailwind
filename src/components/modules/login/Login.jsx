import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import { useState } from 'react';
import axios from 'axios';
import Constants from '../../../Constants';

const Login = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState({ role: 1 });
	const [errors, setErrors] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleLogin();
		}
	};

	const handleInput = (e) => {
		setInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	const handleLogin = () => {
		setIsLoading(true);
		axios
			.post(`${Constants.BASE_URL}/login`, input)
			.then((res) => {
				localStorage.email = res.data.email;
				localStorage.name = res.data.name;
				localStorage.phone = res.data.phone;
				localStorage.photo = res.data.photo;
				localStorage.role = res.data.role;
				localStorage.token = res.data.token;
				setIsLoading(false);
				navigate('/dashboard');
			})
			.catch((errors) => {
				setIsLoading(false);
				if (errors.response.status == 422) {
					setErrors(errors.response.data.errors);
				}
			});
	};

	return (
		<>
			<Helmet>
				<title>Login | My POS</title>
			</Helmet>

			<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-lg'>
					<div className='mx-auto mt-4 max-w-md flex justify-center items-center text-gray-500'>
						<img src={logo} alt='ERP Online Logo' />
					</div>

					<div className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
						<p className='text-center text-lg font-medium'>Sign in to your account</p>

						<div>
							<label htmlFor='email' className='sr-only'>
								Email or Phone
							</label>

							<div className='relative'>
								<input
									id='email_or_phone'
									type='text'
									name='email_or_phone'
									value={input.email_or_phone || ''}
									onChange={handleInput}
									className='w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm'
									placeholder='Enter email or phone'
								/>

								<span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-4 w-4 text-gray-400'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
										/>
									</svg>
								</span>
							</div>
						</div>

						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>

							<div className='relative'>
								<input
									id='password'
									type='password'
									name='password'
									value={input.password || ''}
									onChange={handleInput}
									onKeyDown={handleKeyPress}
									className='w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm'
									placeholder='Enter password'
								/>

								<span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-4 w-4 text-gray-400'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
										/>
									</svg>
								</span>
							</div>
						</div>

						<div>
							<label htmlFor='role' className='sr-only'>
								User Role
							</label>

							<div className='relative'>
								<select
									id='role'
									name='role'
									value={input.role || ''}
									onChange={handleInput}
									className='w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm'
								>
									<option value={1}>Admin</option>
									<option value={2}>Sales Manager</option>
								</select>
							</div>
						</div>

						<button
							onClick={handleLogin}
							className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
							dangerouslySetInnerHTML={{
								__html: isLoading
									? '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Login...'
									: 'Login',
							}}
						/>

						<p className='text-center text-sm text-gray-500'>
							<a className='underline' href=''>
								Forget password?
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
