import { Router } from 'express';
import { completionsController } from '../controllers';

const router = Router();

router.post('/completions', completionsController.generateCompletion);
router.post('/gemini/completions', completionsController.generateGeminiCompletion);

export default router;
