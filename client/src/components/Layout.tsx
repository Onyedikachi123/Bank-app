import React from 'react';
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-1">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <main className="p-4">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
