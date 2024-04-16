import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-3">404 - Page Not Found</h1>
      <p className="mb-3">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">Go Home</Link>
    </div>
  );
};

export default NotFound;
