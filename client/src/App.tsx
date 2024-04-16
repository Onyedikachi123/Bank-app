import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import TransferMoney from './pages/TransferMoney';
import DepositWithdraw from './pages/DepositWithdraw';
import TransactionsHistory from './pages/TransactionsHistory';
import Layout from './components/Layout';
import NotFound from './pages/NotFound'; // A new component for handling 404 Not Found
import ProtectedRoute from './components/ProtectedRoute'; // A new component for protected routes

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Fictitious Bank - Manage Your Finances</title>
          <meta name="description" content="Join Fictitious Bank and manage your finances with ease. Sign up today to start transferring money, making deposits, withdrawals, and tracking your transactions history." />
        </Helmet>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/transfer" element={<ProtectedRoute><Layout><TransferMoney /></Layout></ProtectedRoute>} />
          <Route path="/depositwithdraw" element={<ProtectedRoute><Layout><DepositWithdraw /></Layout></ProtectedRoute>} />
          <Route path="/transaction" element={<ProtectedRoute><Layout><TransactionsHistory /></Layout></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
