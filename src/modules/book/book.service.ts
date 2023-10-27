import Book from '../book/book.model';
import Article from '../article/article.model';

class BookService {
  async list() {
    return await Book.findAll();
  }
  async findById(book_id) {
    console.log(book_id);

    return await Book.findOne({
      where: {
        id: book_id + '',
      },
      raw: true,
    });
  }

  async findArticleById(book_id, article_id) {
    return await Article.findOne({
      where: {
        book_id,
        id: article_id,
      },
    });
  }
}

export default new BookService();
