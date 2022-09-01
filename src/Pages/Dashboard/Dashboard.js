import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
      <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-[#002141f4] text-white text-base-content">
          <li>
            <Link to="/dashboard" className="uppercase">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add-review" className="uppercase" > Add A Review </Link>
          </li>
        </ul>
      </div>

    </div>

  );
};

export default Dashboard;