import express from "express";
import { addResult, getAllResults } from "../db/results";

export const getResult = async (req: express.Request, res: express.Response) =>{
    try {
        const results = await getAllResults();
        return res.status(200).json(results).end();
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(400);
    }
}

export const createResult = async (req: express.Request, res: express.Response) =>{
    try {
        const values : Object = req.body;
        const save = await addResult(values);
        return res.status(200).json(save).end();
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(400);
    }
}