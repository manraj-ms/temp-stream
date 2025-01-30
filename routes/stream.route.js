import express from 'express';
import { setupConnection, startStream, startConnection, sendNetworkInfo } from '../controllers/stream.controller.js'

const router = express.Router();

router.post('/setupConnection', setupConnection)
router.post('/startStream', startStream)
router.post('/startConnection', startConnection)
router.post('/sendNetworkInfo', sendNetworkInfo)

export default router;