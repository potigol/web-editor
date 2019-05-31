const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const appRouter = require('./routes');

// set routers
app.use('/api', appRouter);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
