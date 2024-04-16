import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faPiggyBank, faHistory } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="sidebar bg-blue-500 text-white w-64 min-h-screen p-5 rounded-r-2xl">
      <Link to="/" className="text-lg font-bold" aria-label="Home">
       Kachi Bank
      </Link>
      <nav className="mt-8">
        <ul>
          <li className="mb-3">
            <Link to="/transfer" className="hover:bg-blue-700 rounded-md p-2 block" aria-label="Transfer Money Between Accounts">
              <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2" />
              Transfer Money
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/depositwithdraw" className="hover:bg-blue-700 rounded-md p-2 block" aria-label="Deposit or Withdraw Money">
              <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
              Deposit/Withdraw
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/transaction" className="hover:bg-blue-700 rounded-md p-2 block" aria-label="View Your Transaction History">
              <FontAwesomeIcon icon={faHistory} className="mr-2" />
              Transactions History
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;