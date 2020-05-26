import app from './app';
import 'reflect-metadata';
import './database';

app.listen(3000, () => {
  console.log('🏃 Running Server');
});
