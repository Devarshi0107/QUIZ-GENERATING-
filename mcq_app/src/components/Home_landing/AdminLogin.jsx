import React from 'react';

const AdminLogin = () => {
  return (
    <div>
      <h1>Admin Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin; // Ensure there is a default export
