import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute() {

    const storedUser =
        localStorage.getItem("user");


    if (!storedUser) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }


    return <Outlet />;

}


export default ProtectedRoute;