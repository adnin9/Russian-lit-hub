import Link from 'next/link';
import './layout2';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/route');
  const booksData = await res.json();

  return {
    props: {
      booksData,
    },
  };
}

const Books = ( { booksData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const router = useRouter();
  const searchInputRef = useRef(null);

  const filteredBooks = booksData
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'alphabetical title') {
        return a.title.localeCompare(b.title);
      }

      else if (sortOption === 'alphabetical author') {
        return a.author.localeCompare(b.author);
      }
      return 0;
    });

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key == '/') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <main className="block min-h-screen p-24" style={{ background: 'linear-gradient(to bottom, #BDD6C8, #7A9E89)' }}>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-end p-4 gap-5 bg-transparent">
        <Link href="/authors" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">
          Authors
        </Link>
        <Link href="/" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">
          Home
        </Link>
        <Link href="/books" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">
          Books
        </Link>
        <Link href="/about" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">
          About
        </Link>
      </nav>

      <div className="flex justfy-between gap-3">
          <div className="flex justify-start text-center mr-6">
            <input
              type="text"
              placeholder="Search books..."
              className="p-2 border rounded-md focus:outline-none focus:border-emerald-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              ref={searchInputRef}
            />
          </div>

          <div>
            <label className="text-gray-700">Sort by:</label>
            <select
              className="p-2 border rounded-md focus:outline-none focus:border-emerald-600"
              value={sortOption}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="alphabetical title">Title</option>
              <option value="alphabetical author">Author</option>
            </select>
          </div>
        </div>

      <div className="container">
        <div className="row flex flex-wrap text-center ">
          {filteredBooks.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} passHref className="block p-28 m-9 hover:cursor-pointer">   
              <div className="image-container">
                <img src={book.imageUrl} alt={book.title} className="image w-full h-full rounded-md" />
              </div>
              <h1 className="text-lg font-semibold">{book.title}</h1>
              <p className="text-gray-600">{`by ${book.author}`}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};


export default Books;
