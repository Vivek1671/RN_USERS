const jwt = require('jsonwebtoken');

// Define default admin credentials
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "12345678";

// Admin Login
const AdminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email and password match the default credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Generate a JWT token for the admin
      const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log('Admin Logged In, Generated Token:', token);
      return res.status(200).json({ token });
    } else {
      console.log('Invalid Admin Credentials');
      return res.status(400).json({ Error: 'Invalid credentials' });
    }
  } catch (err) {
    console.log('Error during admin login:', err.message);
    res.status(500).json({ Error: err.message });
  }
};

module.exports = { AdminLogin };
