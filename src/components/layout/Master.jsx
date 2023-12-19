import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Sidebar from '../modules/sidebar';

const Master = () => {
	return (
		<div className='flex bg-neutral-100 gap-5'>
			<Sidebar />

			<HelmetProvider>
				<Outlet />
			</HelmetProvider>
		</div>
	);
};

export default Master;
