const db = require("../models");
const Book = db.Book;
const Genre = db.Genre;
const { Op } = require("sequelize");

// Hàm tìm kiếm sách theo tiêu đề
const searchBooksByTitle = async (title) => {
  try {
    // Kiểm tra nếu không có tiêu đề
    if (!title) {
      throw new Error("Title is required");
    }
    // Tìm sách theo tiêu đề
    const books = await Book.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`  // Tìm kiếm tiêu đề chứa từ khóa
        }
      },
      include: [
        {
          model: Genre,
          as: 'genres',
          attributes: ['name'],  // Lấy thông tin thể loại
          through: { attributes: [] }  // Không lấy dữ liệu bảng trung gian
        }
      ]
    });
    // Kiểm tra nếu không tìm thấy sách nào
    if (books.length === 0) {
      return null;
    }
    return books;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  searchBooksByTitle
};