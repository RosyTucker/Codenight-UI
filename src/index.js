import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));

const isProduction = process.env.NODE_ENV === 'production';

app.use(express.static(`${__dirname}/client`));

app.post('/', (req, res) => {
  res.cookie('Auth', req.body.jwtToken, { secure: isProduction });
  return res.redirect('/');
});

app.listen(process.env.PORT || 3000);

export default app;
