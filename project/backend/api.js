import { Router } from "express"
import DataBase from './database';

const db = new DataBase();

const router = Router()

router.get('/', async (req, res) => {
    res.send(await db.getPeople());
})

router.get('/:email', (req, res) => {
    const { email } = req.params;
    const result = people.find((data) => { return data.email === email; });
    res.sendStatus(result === null ? 400 : 200);
})

router.post('/', async (req, res) => {
    const { title ,description} = req.body;
    const result = await db.insertPerson({title: title, description: description});
    res.send(result)
})

export default router