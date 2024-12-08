import React from 'react';

const DashboardHeader = () => {
    return (
        <div className="bg-neutral-15 px-4 py-5">
            <h1 className="text-2xl text-white font-bold font-Inter">
         Welcome Back, <span className="font-semibold text-primary-10">Rahul</span>
        </h1>
        <p className="text-neutral-45 font-Inter text-sm">Dashboard | Home</p>
        </div>
    );
};

export default DashboardHeader;