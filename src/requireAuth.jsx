// components/RequireAuth.jsx
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem("userToken");

    return isAuthenticated ? children : <Navigate to="/Login-Form" />;
};

export default RequireAuth;
