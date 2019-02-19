import { Router } from 'express';

const router: Router = Router();

import { booksController } from '../controllers/booksController';

router.get('/', booksController.index);
router.get('/add', booksController.renderFormBook);

export default router;