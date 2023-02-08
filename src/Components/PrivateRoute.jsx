
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import { useAuth } from "../Context/authProvider";
import { useData } from "../Context/dataProvider";

const PrivateRoute = () => {
    const { user } = useAuth();
    const location = useLocation();
    const { loading } = useData();

    return loading ? (
        <Spinner />
    ) : (
        <>
            {user ? (
                <Outlet />
            ) : (
                <Navigate to="/login" state={{ from: location.pathname }} replace />
            )}
        </>
    );
};

export default PrivateRoute;