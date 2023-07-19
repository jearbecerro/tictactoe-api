import * as jwt from 'jsonwebtoken';
import { load } from 'ts-dotenv';

const env = load({
    SECRET_TOKEN: String,
});

const SECRET_TOKEN = env.SECRET_TOKEN;

export const createPlayersSessionToken = (players: Object, expiresIn: string) => {
    const strPlayers: string = JSON.stringify(players);
    const authToken = jwt.sign({
        data: strPlayers
    }, SECRET_TOKEN, { expiresIn: expiresIn });
    console.log(authToken);
    return authToken;
}

export const verifyPlayersSessionToken = (token: string)=>{
    const decodedToken = jwt.verify(token, SECRET_TOKEN);
    return decodedToken;
}
