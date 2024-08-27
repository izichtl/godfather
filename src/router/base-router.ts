import express, { Request, Response, Router } from 'express';
// import { v4 } from 'uuid'

const router: Router = express.Router();
router.use(express.json());
router.post('/', async (req: Request, res: Response) => {
    res.send({
        success: true,
        recived_body: req.body
    })
})

export default router;


