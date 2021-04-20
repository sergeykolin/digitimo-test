const app = require('./app');
const port = process.env.PORT || 3000;
const Log = require('./libs/log');


app.listen(port, () => Log(`Server has been started on ${port}`));