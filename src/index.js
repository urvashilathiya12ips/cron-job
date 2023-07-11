const express = require("express");
const cron = require('node-cron');
const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("<h2>Cron job</h2>");
    task.start();
});

const task = cron.schedule('* * * * *', () => {
    console.log('This function will run every minute');
});

//add comment
app.listen(port, async () => {
    console.log("server started on http://localhost:" + port + "/");
});
