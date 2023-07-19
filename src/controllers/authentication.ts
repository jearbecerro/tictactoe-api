import express from 'express';

import { createPlayersSessionToken } from '../helpers';

export const createAuthentication = async (req: express.Request, res: express.Response) =>{
    try {
        const players : Object = req.body;
        const expiresIn : string = "1h"; 
        const playerAuthToken = createPlayersSessionToken(players, expiresIn);
       
        return res.status(200).json({ playerAuthToken: playerAuthToken })
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(400)
    }
}