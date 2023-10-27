import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/index';

const Article = sequelize.define(
  'article',
  {
    id: {
      type: DataTypes.CHAR(),
      primaryKey: true,
    },
    book_id: {
      type: DataTypes.CHAR(),
      allowNull: false,
    },
    content: {
      type: DataTypes.CHAR(),
      allowNull: false,
    },
    order: {
      type: DataTypes.CHAR(),
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

Article.sync({ alter: false });

export default Article;
