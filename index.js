const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Server site is runnig')
});

app.listen(port, () => {
    console.log('Port is running on', port);
})