import express from 'express';
import { createAuthentication } from '../controllers/authentication';

export default (router: express.Router) => {
  router.post('/auth-create', createAuthentication);
};