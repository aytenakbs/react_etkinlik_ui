import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <SiteHeader />
      <main>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};

export default DashboardLayout;
