const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Book_Genre extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Book_Genre.init({
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Books',
        key: 'id'
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Genres',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Book_Genre',
    timestamps: false
  });

  return Book_Genre;
};