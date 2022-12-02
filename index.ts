'use strict';

import { sequelizeDatabase } from './src/models';
import { start } from './src/server';

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch(e => console.error(e));