import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
	return localStorage.token ? children : <Navigate to={'/'} replace />;
};

export default Protected;
