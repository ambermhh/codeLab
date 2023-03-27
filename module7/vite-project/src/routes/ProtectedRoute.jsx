import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

function ProtectedRoute ({redirectPath ='/dash', children}) {

    const {username} = useContext(UserContext)
    if (!username) {
        return <Navigate to={redirectPath} replace />;
    }
    
}