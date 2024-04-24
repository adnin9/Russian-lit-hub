const bookDatas = require('/data/bookData')

export default function handler(req, res) {
    const books = bookDatas.default;
    const { bookId }= req.query;
    const book = books[bookId-1];

    return res.json(book);
}