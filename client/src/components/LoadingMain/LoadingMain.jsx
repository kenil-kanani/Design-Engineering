import React from "react";
import { FaCircleNotch } from "react-icons/fa"; // You might need to install react-icons

const LoadingMain = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
            <div className="flex flex-col items-center">
                <FaCircleNotch className="animate-spin text-blue-500 text-4xl mb-2" />
                <p className="text-gray-600 text-lg">Unveiling the magic, just for you...</p>
            </div>
        </div>
    );
};

export default LoadingMain;
