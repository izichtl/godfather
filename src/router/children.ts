// @ts-nocheck
import express, { Request, Response, Router } from 'express'
import { children } from '../storage/local-children-data';
import ChildrenModel from '../model/children';

const router: Router = express.Router()
router.use(express.json())

router.post('/example', async (req: Request, res: Response) => {
  try {
    // const users = req.body; 
    const result = await ChildrenModel.insertMany(children);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

export const clearChildren = async () => {
  try {
    const delete_response  = await ChildrenModel.deleteMany({});
    console.log(delete_response, 'delete_response');
  } catch (err) {
    console.log(err, 'err');
  }
}

router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await ChildrenModel.find({})
    res.status(200).json({ data: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

export default router

