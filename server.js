const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const appRouter = require('./server/routes');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set routers
app.use('/api', appRouter);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Server na porta: ${PORT}`)
));
