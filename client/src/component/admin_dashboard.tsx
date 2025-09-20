import { useState } from "react";
import "./admin_dashboard.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", balance: 200 },
    { id: 2, name: "Alice Smith", balance: 150 },
    { id: 3, name: "Bob Johnson", balance: 300 },
  ]);

//   const [amounts, setAmounts] = useState({});

//   const handleAmountChange = (id, value) => {
//     setAmounts((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   const rechargeUser = (id) => {
//     // const rechargeValue = Number(amounts[id] ?? 0);
//     if (isNaN(rechargeValue) || rechargeValue <= 0) {
//       alert("Please enter a valid amount greater than 0!");
//       return;
//     }

//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === id ? { ...user, balance: user.balance + rechargeValue } : user
//       )
//     );
//     setAmounts((prev) => ({ ...prev, [id]: "" }));
//   };

//   const deductBalance = (id, gameCost) => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === id
//           ? { ...user, balance: Math.max(0, user.balance - gameCost) }
//           : user
//       )
//     );
//   };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
        <div className="sidebar">
            <h2 className="sidebar-title">Game Club</h2>
            <nav className="sidebar-nav">
            <ul>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Transactions</li>
            </ul>
            </nav>
        </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <h1>Admin Dashboard</h1>
          <button className="logout-btn">Logout</button>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-body">
          <h2>Manage Users</h2>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Balance</th>
                  <th>Recharge</th>
                  <th>Play Game</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td className="font-semibold">₹{user.balance}</td>
                    <td>
                      <input
                        type="number"
                        // onChange={(e) => handleAmountChange(user.id, e.target.value)}
                        placeholder="Amount"
                        className="recharge-input"
                      />
                      <button
                        // onClick={() => rechargeUser(user.id)}
                        className="add-btn"
                      >
                        Add
                      </button>
                    </td>
                    <td>
                      <button
                        // onClick={() => deductBalance(user.id, 50)}
                        className="play-btn"
                        disabled={user.balance < 50}
                      >
                        Play (₹50)
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
