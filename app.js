const express = require('express');
const blogRoute = require('./routes/blogRouter');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use('/api/v1/blog', blogRoute);


module.exports = app;
