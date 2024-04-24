import Link from 'next/link';

const HomePage = () => {
  const booksData = [
    {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      imageUrl: 'https://i.etsystatic.com/23951954/r/il/7909ec/4924928583/il_570xN.4924928583_rfr8.jpg',
      goodreadsUrl:'https://www.goodreads.com/book/show/7144.Crime_and_Punishment'
    },
    {
      title: 'The Master and Margarita',
      author: 'Mikhail Bulgakov',
      imageUrl: 'https://m.media-amazon.com/images/I/71bZYI9NvpL._AC_UF894,1000_QL80_.jpg',
      goodreadsUrl: 'https://www.goodreads.com/book/show/117833.The_Master_and_Margarita'
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61VydapyCQL._AC_UF1000,1000_QL80_.jpg',
      goodreadsUrl: 'https://www.goodreads.com/book/show/656.War_and_Peace?ref=nav_sb_ss_1_13'
    },
  ];

  return (

    <main className="block min-h-screen items-center justify-center p-24" style={{ background: 'linear-gradient(to bottom, #BDD6C8, #7A9E89)' }}>
      
      <nav className="fixed top-0 left-0 right-0 flex items-center p-4 gap-5 bg-transparent">
        <div className='flex items-center justify-start'>
            <h1 className="title1 text-2xl font-bold text-green-900">Russian Literature Hub</h1>
        </div>

        <div className='fixed top-0 left-0 right-0 flex items-center justify-end p-4 gap-5 bg-transparent'>
            <Link href="/" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">Home
            </Link>
            <Link href="/books" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">Books
            </Link>
            <Link href="/about" className="text-green-900 font-bold text-xl hover:text-emerald-700 hover:text-opacity-45 hover:cursor-pointer">About
            </Link>
        </div>
      </nav>
      
      <section className="m-4 flex flex-wrap justify-center">
        <div className="mb-32 flex justify-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {booksData.map((book, index) => (
            <Link
              key={index} href={book.goodreadsUrl} passhref="true"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-emerald-900 hover:bg-opacity-30 hover:dark:bg-neutral-800/30 flex flex-col items-center justify-center hover:cursor-pointer">
              <img
                className="mb-4 w-96 rounded-lg"
                src={book.imageUrl}
                alt={book.title}
              />
              <div className="mb-3 text-2xl font-semibold">
                {book.title}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </div>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                by {book.author}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className='quote flex justify-center'>
        <h1>"Рукописи не горят"</h1>
      </div>
    </main>

  );
};

export default HomePage;
