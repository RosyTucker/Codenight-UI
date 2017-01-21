import express from 'express';
import helmet from 'helmet';

const app = express();

const isProduction = process.env.NODE_ENV === 'poduction';

app.use(express.static(`${__dirname}/client`));
app.use(helmet());

app.listen(process.env.PORT || 3000);

export default app;
