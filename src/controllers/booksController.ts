import { Request, Response } from 'express';

class BooksController {

    public index(req: Request, res: Response): void {
        res.render('books/index', {
            title: 'Books',
        })
    }

    public renderFormBook(req: Request, res: Response): void {
        res.render('books/add', {
            title: 'Add A Book'
        });
    }
}

export const booksController =  new BooksController();