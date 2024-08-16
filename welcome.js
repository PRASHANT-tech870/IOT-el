const express = require('express');
const path = require('path');
const app = express();

const PORT = 4000; // Port for the welcome page

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/server1', (req, res) => {
    res.redirect('http://192.168.66.166:3001');
});

app.get('/server2', (req, res) => {
    res.redirect('http://192.168.66.166:3002');
});

app.listen(PORT, () => {
    console.log(`Welcome page running on http://localhost:${PORT}`);
});
