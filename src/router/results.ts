import express from 'express';

//import { isAuthenticated } from '../middlewares';
import { createResult, getResult } from '../controllers/results';

export default (router: express.Router) => {
  router.get('/results', getResult);
  router.post('/create-result', createResult);
};