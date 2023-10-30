import { Request, Response } from 'express';
import bookService from './book.service';

class BookController {
  async list(req: Request, res: Response) {
    const { limit = 10, offset = 0 } = req.query;

    const result = await bookService.list(+limit, +offset);

    res.send({ code: 200, msg: 'success', data: result });
  }
  async findById(req: Request, res: Response) {
    const { book_id } = req.params;

    const result = await bookService.findById(book_id);

    res.send({ code: 200, msg: 'success', data: result });
  }

  async getSection(req: Request, res: Response) {
    const { book_id } = req.params;

    const result = await bookService.getSection(book_id);

    res.send({ code: 200, msg: 'success', data: result });
  }

  async findArticleById(req: Request, res: Response) {
    const { book_id, article_id } = req.params;

    const result = await bookService.findArticleById(book_id, article_id);

    res.send({ code: 200, msg: 'success', data: result });
  }
}

export default new BookController();
