const express = require('express');
const app = express();
const appRouter = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', appRouter);
app.set('port', 3000);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});