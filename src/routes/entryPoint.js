import express from 'express';
import { constants as C } from './routes'

const router = express.Router();

router.route(C.ENTRY_POINT)
    .get((req, res) => { return res.json({ msg: 'If you see this message, it means that the REST API is running.' }) });

export default router;
