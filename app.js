const express = require('express');
const blogRoute = require('./routes/blogRouter');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use('/api/v1/blog', blogRoute);


module.exports = app;
