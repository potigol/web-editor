// dev-server.js
const express = require('express');
const app = express();
// Import routes
const appRouter = require('./routes');

app.use('/api', appRouter);
app.set('port', 3000);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});