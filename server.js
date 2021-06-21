const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
//    used to use app.use(bodyParser.json()) , we can now just use experess.json() should allow us to get the data req.body from user.js
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
//  make 'api/users' pertain to '/' in user.8
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
