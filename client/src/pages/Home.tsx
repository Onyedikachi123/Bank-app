


const HomePage: React.FC = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Welcome to Kachi Dashboard</h1>
      <div className="text-center text-lg">
        <p>Welcome back! Here’s what you can do:</p>
        <ul className="list-none m-4">
          <li>Transfer money to other users quickly and securely.</li>
          <li>Deposit or withdraw funds with ease.</li>
          <li>View a detailed history of all your transactions.</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
