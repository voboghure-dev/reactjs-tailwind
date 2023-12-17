import React from 'react';
import classNames from 'classnames';
import logo from '../../assets/img/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiCube, HiShoppingCart, HiDocument, HiOutlineLogout } from 'react-icons/hi';

function Sidebar() {
	const linkClass =
		'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';
	const { pathname } = useLocation();

	return (
		<div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
			<div className='flex flex-col items-center px-1 py-3'>
				<img src={logo} alt='Logo' className='h-16' />
			</div>
			<div className='flex flex-1 flex-col py-8 gap-0.5 pt-2 border-t border-neutral-700'>
				<div>
					<Link
						to={'/dashboard'}
						className={classNames(
							pathname == '/dashboard' ? 'bg-neutral-700 text-white' : 'text-neutral-400',
							linkClass
						)}
					>
						<HiHome /> Dashboard
					</Link>
				</div>
				<div>
					<Link
						to={'/product'}
						className={classNames(
							pathname == '/product' ? 'bg-neutral-700 text-white' : 'text-neutral-400',
							linkClass
						)}
					>
						<HiCube /> Product
					</Link>
				</div>
				<div>
					<Link
						to={'/order'}
						className={classNames(
							pathname == '/order' ? 'bg-neutral-700 text-white' : 'text-neutral-400',
							linkClass
						)}
					>
						<HiShoppingCart /> Order
					</Link>
				</div>
				<div>
					<Link
						to={'/invoice'}
						className={classNames(
							pathname == '/invoice' ? 'bg-neutral-700 text-white' : 'text-neutral-400',
							linkClass
						)}
					>
						<HiDocument /> Invoice
					</Link>
				</div>
			</div>
			<div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
				<Link to={'/logout'} className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className='text-xl'>
						<HiOutlineLogout />
					</span>
					Logout
				</Link>
			</div>
		</div>
	);
}

export default Sidebar;
