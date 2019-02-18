import { Router } from 'express';

const router: Router = Router();

router.get('/', (req,res) => {
    res.send('Hello World');
});

router.get('/add',(req,res) => {
    res.send('Form');
});

export default router;

