const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const InvestorCtrl = require("../models/investor")

// Create Account

const CreateUser = async(req,res)=>{
    const {name, email, password} = req.body

    try{
        const newInvestor = await InvestorCtrl.create({name,email,password})
        const token = jwt.sign({ id: newInvestor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Generated Token:', token);
        res.status(200).json(newInvestor)
    }catch(err){
        res.status(400).json({Error: err.message})
    }
}


// Login User
const LoginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      console.log('Login request received for email:', email);
      const user = await InvestorCtrl.findOne({ email });
      if (!user) {
        console.log('User not found for email:', email);
        return res.status(400).json({ Error: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Invalid credentials for email:', email);
        return res.status(400).json({ Error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log('Generated Token:', token);
      res.status(200).json({ token });
    } catch (err) {
      console.log('Error during login:', err.message);
      res.status(500).json({ Error: err.message });
    }
  };

module.exports = {CreateUser, LoginUser}