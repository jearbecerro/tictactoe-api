import express from 'express';
import { verifyPlayersSessionToken } from '../helpers';
import { merge } from 'lodash';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction ) => {
    try {
        const authHeader = req.headers['authorization']
        const sessionToken = authHeader && authHeader.split(' ')[1]
        console.log(sessionToken)
        if(sessionToken===null){
            return res.sendStatus(401);
        }

        const players: any = verifyPlayersSessionToken(sessionToken);
        if(players==="invalid token"){
            return res.sendStatus(403);
        }
        
        const playersJSON = JSON.parse(players.data);
        merge(req, playersJSON);
        
        return next();
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(400);
    }
}

