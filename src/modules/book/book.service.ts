import Book from '../book/book.model';
import Article from '../article/article.model';
import { Op } from 'sequelize';

class BookService {
  async list(limit, offset) {
    console.log(limit, offset, '--');

    return await Book.findAll({
      limit: limit,
      offset: offset,
    });
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

  async getSection(book_id) {
    const sectionIds: any = await Book.findOne({
      where: {
        id: book_id + '',
      },
      attributes: ['section_ids'],
    });

    const section = await Article.findAll({
      where: {
        id: {
          [Op.in]: sectionIds.section_ids.split('|'),
        },
        book_id: book_id + '',
      },
      attributes: ['title', 'id'],
    });

    return section;
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
