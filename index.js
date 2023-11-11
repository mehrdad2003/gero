// Dependencies
const express = require('express');
const socketIo = require('socket.io');

// Contollers
const locationController = require('./controllers/locationController');


// SetUp
const app = express();
const server = require('http').createServer(app);
const io = socketIo(server);




// Start Server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





// Sockets ----
io.on('connection', locationController.handleSocketConnection);



// Routes ----
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "public"));


const routes = require('./routes/index');
app.use('/', routes);




app.all('*', (req, res) => { 
    res.redirect('/')
})


