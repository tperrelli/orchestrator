import 'reflect-metadata';
import { initConnection } from '#root/db/connection';

import startServer from '#root/server/start';

initConnection().then(() => {
    startServer();
});