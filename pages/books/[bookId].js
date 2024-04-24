import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import '/pages/layout2';

const Book = () => {
  const router = useRouter();
  const { bookId } = router.query;

  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      const res = await fetch(`/api/${bookId}/`);
      const bookResult = await res.json();
      setBook(bookResult);
    }
    getBook();
  }, [])

  return (
    <main className="block min-h-full min-w-full items-center justify-center p-24" style={{ background: 'linear-gradient(to bottom, #BDD6C8, #7A9E89)' }}>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-end p-4 gap-5 bg-transparent">
        <Link href="/" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">Home</Link>
        <Link href="/books" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">Books</Link>
        <Link href="/about" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">About</Link>
      </nav>

      <div className="flex lg:max-w-5xl lg:w-full lg:mb-0 h-screen">
      {book ?
        <>
          <div className="image-container2 flex-1 bg-white p-4 rounded-md shadow-md flex items-center justify-center">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="image2 w-auto h-4/5 max-h-full rounded-md"
            />
          </div>
          <div className="details block m-30 p-20">
            <h2 className="text-xl font-semibold italic">{book.title}</h2>
            <p className="author text-gray-600">{`by ${book.author}`}</p>
            <p className="summary text-gray-600">{book.summary}</p>
          </div>
          </>
          : "Loading..."
        }
        </div>
    </main>
  );
};


export default Book;
