import React from 'react';
import { FaTachometerAlt, FaUser, FaBoxOpen, FaShoppingCart, FaTags } from 'react-icons/fa';

const AdminLeftBar = () => {
    return (
        <div className="bg-gray-900 min-h-screen fixed lg:w-56 w-16 md:w-48 transition-all duration-300">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 mt-4">
                    <img src="https://via.placeholder.com/150" alt="Admin" className="w-full h-full rounded-full" />
                </div>

                <div className="flex items-center hover:text-gray-500 cursor-pointer duration-300 ease-in-out p-2">
                        <FaTachometerAlt className="mr-2 text-white" />
                        <span className="hidden lg:block text-white">Administrator</span>
                    </div>

                <div className="w-4/5 h-0.5 bg-gray-700 my-4 rounded-xl"></div>
                <ul className="text-white font-bold text-center">
                    <li className="flex items-center hover:text-gray-500 cursor-pointer duration-300 ease-in-out p-2">
                        <FaTachometerAlt className="mr-2" />
                        <span className="hidden lg:block">Dashboard</span>
                    </li>
                    <li className="flex items-center hover:text-gray-500 cursor-pointer duration-300 ease-in-out p-2">
                        <FaUser className="mr-2" />
                        <span className="hidden lg:block">User</span>
                    </li>
                    <li className="flex items-center hover:text-gray-500 cursor-pointer duration-300 ease-in-out p-2">
                        <FaBoxOpen className="mr-2" />
                        <span className="hidden lg:block">Product</span>
                    </li>
                    <li className="flex items-center hover:text-gray-500 cursor-pointer duration-300 ease-in-out p-2">
                        <FaShoppingCart className="mr-2" />
                        <span className="hidden lg:block">Order</span>
                    </li>
                    <li className="flex items-center hover:text-gray-500 cursor-pointer duration-300 ease-in-out p-2">
                        <FaTags className="mr-2" />
                        <span className="hidden lg:block">Voucher</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminLeftBar;