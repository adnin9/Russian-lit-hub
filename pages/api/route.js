const bookDatas = require('/data/bookData')

export default function handler(req, res) {
  return res.json(bookDatas.default);
}
