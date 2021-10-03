const express = require('express');
const app = express();
const stats = require('./routes/stats');
const surprise = require('./routes/surprise');
app.set('json spaces', 4);

app.use('/api/stats', stats);
app.use('/api/surprise', surprise);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
