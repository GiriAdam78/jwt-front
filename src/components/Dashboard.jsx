import React from "react";

import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-green-100">
            <h1 className="text-2xl font-normal mb-4">Selamat Datang Di Dashboard</h1>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
        </>
    )
}

export default Dashboard