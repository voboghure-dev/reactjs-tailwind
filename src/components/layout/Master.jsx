import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';

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
