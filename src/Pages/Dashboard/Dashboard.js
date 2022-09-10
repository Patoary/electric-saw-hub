import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../Components/CustomLink/CustomLink';

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
      <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-[#002141f4] text-white">
          <li>
            <CustomLink to="/dashboard" className="uppercase">My Orders</CustomLink>
          </li>
          <li>
            <CustomLink to="/dashboard/add-review" className="uppercase" > Add A Review </CustomLink>
          </li>
          <li>
            <CustomLink to="/dashboard/all-users" className="uppercase" > All Users</CustomLink>
          </li>
        </ul>
      </div>

    </div>

  );
};

export default Dashboard;