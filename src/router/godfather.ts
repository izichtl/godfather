// @ts-nocheck
import express, { Request, Response, Router } from 'express'
import GodfatherModel from '../model/godfather'
import { v4 } from 'uuid'
const router: Router = express.Router()
router.use(express.json())
import { children as data } from '../storage/local-children-data';
router.post('/create', async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body; 
    const children = data;

    const godfather = new GodfatherModel({ name, email, phone, children });
    await godfather.save();
    res.status(201).json(godfather);
  } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
)

// router.delete('/', async (req: Request, res: Response) => {
//   res.status(401).send({
//     success: false,
//     data: 'invalid_params',
//   })
// })

router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await GodfatherModel.find({})
    res.status(200).json({ data: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

export default router

