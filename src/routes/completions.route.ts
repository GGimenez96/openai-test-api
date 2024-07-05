import { Router } from 'express';
import { completionsController } from '../controllers';

const router = Router();

router.post('/completions', completionsController.generateCompletion);

export default router;
