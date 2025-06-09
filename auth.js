const express = require('express');
const session = require('express-session');
const express = require('jsonwebtoken')
// const bodyPaser = require('body-parser');
const bodyParser = require('body-parser');
const nodemailer = reqiure('nodemailer')


const app = express();
app.use(bodyParser.json())


// Middleware to set up session management
app.use(session({
  secret : 'secret-key',  // Replace with a strong secret key
  resave : false,        // Whether to save the session data if there were no modifications
  saveUninitialized: true,         // Whether to save new but not modified sessions
  cookie: {secure: false}    // Set to true in production with HTTPS
}));

// POST endpoint for handling login
app.post('/login', (req, res) =>{
  const {username, password} = req.body

    // Simulated user authentication (replace with actual logic)
  if(username === 'user' && password === 'password') {
     req.session.user = username; // Store user information in session
     res.send('Logged in successfully');   
  } else{
    res.send('Invalid credentials')
  }


    // JWT
  if (username === 'user' && password === 'password'){
    // Generate JWT with username payload
    const token = JsonWebTokenError.sign({username}, scretKey, {expiresIn: '1hr'})
    res.send('Invide credentials')
  }

})



// Get endpoint for accessing dashboard
app.get('/dashboard', (req, res) =>{
  if( req.session.user){
    res.send(`Welcome ${res.session.user}`) //Display welcome message
  }else {
    res.send('Please login first')
  }

  // Get token from authorization header
  const token = req.headers['authorization'];

  if(token){
    // verify JWT token
    jwt.verify(token, secretKey, (err, decoded) =>{
      if(err){
        res.send('Invalid token')
      }else{
        // Token is valid, send welcome message with username
        res.send(`Welcome ${decoded.username}`);
      }
    });
     }else{
      res.send('token missing');
     }
})


const users = {}; // In-memory storage for demo purpose


app.post('/request-access', (req, res) =>{
  const {email} = req.body;

  // Generate a 6-digit verification code
const code = math.floor(10000 + Math.random() * 900000).toString();

// Store the code in memory (users object)
users[email] = code

// simulated email sending (for demostration)
console.log(`sending code ${code} to ${email}`)

res.send('Code sent to your email')
})

app.post('/verify-code', (req, res) =>{
  const {email, code} = req.body;

  // Compare the received code with stored code doe the email
  if(users[email] === code){
    // code  match, access granted
    res.send('Access granted')
  } else{
    // Code does not match, access denied
    res.send('Invalid code')
  }
})



// Start the server on poer 3000
app.listen(3000, ()=> console.log('Server is running on port 3000'))