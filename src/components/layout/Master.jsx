import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';

const Master = () => {
	return (
		<div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
			<Sidebar />
			<HelmetProvider>
				<Outlet />
			</HelmetProvider>
		</div>
	);
};

export default Master;
