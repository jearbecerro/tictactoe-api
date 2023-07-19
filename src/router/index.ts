import express from 'express';

import authentication from './authentication';
import results from './results';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    results(router);
    return router;
};