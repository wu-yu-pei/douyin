import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/index';

const Book = sequelize.define(
  'books',
  {
    id: {
      type: DataTypes.CHAR(),
      primaryKey: true,
    },
    book_name: {
      type: DataTypes.CHAR(),
      allowNull: false,
    },
    source_id: {
      type: DataTypes.CHAR(),
      allowNull: false,
    },
    cover_image: {
      type: DataTypes.CHAR(),
      allowNull: false,
    },
    section_ids: {
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

Book.sync({ alter: false });

export default Book;


