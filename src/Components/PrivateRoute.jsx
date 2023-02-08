import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authProvider";

export function PrivateRoute({ component: Component, ...rest }) {
    const navigate = useNavigate()
    const { user } = useAuth();
    return user == null ? (
        //add noThrow and Redirect will do redirect without using componentDidCatch.
        //Redirect works with componentDidCatch to prevent the tree from rendering and starts over with a new location.
        <Navigate to="/" replace />
    ) : (
        <Component {...rest} />
    );
}
