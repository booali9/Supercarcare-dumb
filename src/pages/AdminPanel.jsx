import React, { useState } from "react";

const TABS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "appointments", label: "Appointments" },
  { key: "users", label: "Users" },
  { key: "reports", label: "Reports" },
  { key: "settings", label: "Settings" },
];

const mockStats = {
  visits: 12456,
  sales: 98765,
  withdrawals: 3200,
  reports: 12,
};

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", address: "123 Main St", payment: "Visa **** 1234" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", address: "456 Oak Ave", payment: "Mastercard **** 5678" },
];

const mockAppointments = [
  { id: 1, user: "John Doe", date: "2024-07-01", service: "Tire Installation", status: "Confirmed" },
  { id: 2, user: "Jane Smith", date: "2024-07-02", service: "Wheel Alignment", status: "Pending" },
];

const AdminPanel = () => {
  const [tab, setTab] = useState("dashboard");
  const [showLogin, setShowLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);

  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Forgot password state
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginError("Please enter email and password.");
      return;
    }
    setShowLogin(false);
    setLoginError("");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setForgotSent(true);
  };

  if (showLogin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-[#181818] border border-ferrari rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-ferrari mb-6">Admin Login</h2>
          {showForgot ? (
            <form onSubmit={handleForgot} className="space-y-4">
              <input type="email" className="w-full border border-ferrari rounded-lg px-4 py-3 bg-black text-white placeholder-gray-400" placeholder="Enter your email" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} required />
              <button type="submit" className="w-full bg-ferrari text-white py-3 rounded-lg font-bold text-lg mt-2 hover:bg-ferrari/90 transition">Send Reset Link</button>
              {forgotSent && <div className="text-ferrari text-center mt-2">Reset link sent!</div>}
              <button type="button" className="w-full mt-2 text-sm text-ferrari underline" onClick={() => setShowForgot(false)}>Back to Login</button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="email" className="w-full border border-ferrari rounded-lg px-4 py-3 bg-black text-white placeholder-gray-400" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
              <input type="password" className="w-full border border-ferrari rounded-lg px-4 py-3 bg-black text-white placeholder-gray-400" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
              {loginError && <div className="text-ferrari text-sm">{loginError}</div>}
              <button type="submit" className="w-full bg-ferrari text-white py-3 rounded-lg font-bold text-lg mt-2 hover:bg-ferrari/90 transition">Login</button>
              <button type="button" className="w-full mt-2 text-sm text-ferrari underline" onClick={() => setShowForgot(true)}>Forgot Password?</button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-72 min-h-screen bg-[#181818] border-r border-ferrari flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 px-8 py-6 border-b border-ferrari">
            <div className="bg-ferrari rounded-full w-10 h-10 flex items-center justify-center font-bold text-black text-xl">A</div>
            <span className="text-2xl font-extrabold text-ferrari tracking-wide">Admin</span>
          </div>
          <nav className="flex flex-col gap-2 mt-8 px-6">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition border border-ferrari/30 hover:border-ferrari text-white text-lg ${tab === t.key ? "bg-ferrari text-black" : "bg-[#181818] hover:bg-ferrari/10"}`}
              >
                <span>{t.label}</span>
              </button>
            ))}
          </nav>
        </div>
        {/* User Profile Section */}
        <div className="px-8 py-6 border-t border-ferrari flex items-center gap-3">
          <div className="bg-ferrari rounded-full w-10 h-10 flex items-center justify-center font-bold text-black text-xl">JD</div>
          <div>
            <div className="font-bold text-white">John Doe</div>
            <div className="text-sm text-ferrari">Admin</div>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 bg-black min-h-screen">
        {tab === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-ferrari">Analytics Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-ferrari mb-2">{mockStats.visits}</div>
                <div className="text-white">Visits</div>
              </div>
              <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-ferrari mb-2">${mockStats.sales}</div>
                <div className="text-white">Total Sales</div>
              </div>
              <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-ferrari mb-2">{mockStats.withdrawals}</div>
                <div className="text-white">Withdrawals</div>
              </div>
              <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-ferrari mb-2">{mockStats.reports}</div>
                <div className="text-white">Reports</div>
              </div>
            </div>
          </div>
        )}
        {tab === "appointments" && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-ferrari">Appointment Management</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#222] border-b border-ferrari">
                  <th className="p-4">User</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockAppointments.map((appt) => (
                  <tr key={appt.id} className="border-b border-ferrari/30 hover:bg-ferrari/10">
                    <td className="p-4">{appt.user}</td>
                    <td className="p-4">{appt.date}</td>
                    <td className="p-4">{appt.service}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${appt.status === "Confirmed" ? "bg-ferrari text-black border-ferrari" : "bg-[#222] text-white border-ferrari/50"}`}>{appt.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {tab === "users" && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-ferrari">User Management</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#222] border-b border-ferrari">
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Address</th>
                  <th className="p-4">Payment</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user) => (
                  <tr key={user.id} className="border-b border-ferrari/30 hover:bg-ferrari/10">
                    <td className="p-4">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.address}</td>
                    <td className="p-4">{user.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {tab === "reports" && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-ferrari">Reports & Withdrawals</h2>
            <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-white mb-6">
              <div className="font-bold text-ferrari mb-2">Withdrawal Summary</div>
              <div>Total Withdrawals: <span className="text-ferrari font-bold">${mockStats.withdrawals}</span></div>
              <div>Pending Reports: <span className="text-ferrari font-bold">{mockStats.reports}</span></div>
            </div>
            <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-white">
              <div className="font-bold text-ferrari mb-2">Recent Reports</div>
              <ul className="list-disc pl-6">
                <li>Report #1: User withdrawal request pending</li>
                <li>Report #2: Payment method update required</li>
                <li>Report #3: Address verification needed</li>
              </ul>
            </div>
          </div>
        )}
        {tab === "settings" && (
          <div>
            <h2 className="text-2xl font-bold mb-8 text-ferrari">Settings</h2>
            {/* Profile Management */}
            <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-white mb-8">
              <div className="font-bold text-ferrari mb-4 text-lg">Profile Management</div>
              <div className="flex items-center gap-6 mb-4">
                <div className="w-20 h-20 rounded-full bg-ferrari flex items-center justify-center text-black text-3xl font-bold">A</div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">Name</label>
                  <input type="text" className="w-full border border-ferrari rounded-lg px-4 py-2 bg-black text-white mb-2" value={email} onChange={e => setEmail(e.target.value)} />
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" className="w-full border border-ferrari rounded-lg px-4 py-2 bg-black text-white" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <button className="bg-ferrari text-black font-bold px-6 py-2 rounded-lg hover:bg-ferrari/90 transition">Save Profile</button>
            </div>
            {/* Password Change */}
            <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-white mb-8">
              <div className="font-bold text-ferrari mb-4 text-lg">Password Change</div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Current Password</label>
                  <input type="password" className="w-full border border-ferrari rounded-lg px-4 py-2 bg-black text-white" />
                </div>
                <div>
                  <label className="block text-sm mb-1">New Password</label>
                  <input type="password" className="w-full border border-ferrari rounded-lg px-4 py-2 bg-black text-white" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Confirm New Password</label>
                  <input type="password" className="w-full border border-ferrari rounded-lg px-4 py-2 bg-black text-white" />
                </div>
                <button type="submit" className="bg-ferrari text-black font-bold px-6 py-2 rounded-lg hover:bg-ferrari/90 transition">Change Password</button>
              </form>
            </div>
            {/* Notification Preferences */}
            <div className="bg-[#222] border border-ferrari rounded-lg p-8 text-white">
              <div className="font-bold text-ferrari mb-4 text-lg">Notification Preferences</div>
              <div className="flex items-center gap-6 mb-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-ferrari w-5 h-5" />
                  <span>Email Notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-ferrari w-5 h-5" />
                  <span>SMS Notifications</span>
                </label>
              </div>
              <button className="bg-ferrari text-black font-bold px-6 py-2 rounded-lg hover:bg-ferrari/90 transition">Save Preferences</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel; 