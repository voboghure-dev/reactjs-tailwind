import { Navigate } from 'react-router-dom';

const Public = ({ children }) => {
	return !localStorage.token ? children : <Navigate to={'/dashboard'} replace />;
};

export default Public;
