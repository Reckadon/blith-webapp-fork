import React from "react";
import { useAuth } from "../firebase/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(currentUser){
        return children;
    }

    return <Navigate to="/login" />
}

export default PrivateRoute;