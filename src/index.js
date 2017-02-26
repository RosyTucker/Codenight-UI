import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, '/client/templates'));
app.set('view engine', 'ejs');
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));

const isProduction = process.env.NODE_ENV === 'production';

app.use(express.static(`${__dirname}/client`));

app.post('/', (req, res) => {
  res.cookie('Auth', req.body.jwtToken, { secure: isProduction });
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  res.clearCookie('Auth');
  res.redirect('/');
});

app.get('/', (req, res) => {
  const reactSettings = {
    baseApiUrl: process.env.BASE_API_URL
  };

  res.render('index', {
    title: 'Codenight',
    reactSettings
  });
});

app.listen(process.env.PORT || 3000);

export default app;
