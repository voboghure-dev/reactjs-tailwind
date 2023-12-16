import Nav from '../shared/Nav';
import Sidebar from '../shared/Sidebar';
import Footer from '../shared/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const Master = () => {
	return (
		<>
			<Nav />

			<div id='layoutSidenav'>
				<Sidebar />

				<div id='layoutSidenav_content'>
					<main>
						<div className='container-fluid px-4'>
							<HelmetProvider>
								<Outlet />
							</HelmetProvider>
						</div>
					</main>

					<Footer />
				</div>
			</div>
		</>
	);
};

export default Master;
