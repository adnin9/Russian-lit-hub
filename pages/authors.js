import Link from 'next/link';
import './layout2';

const authorsData = [
    {
      id: 1,
      name: 'Fyodor Dostoevsky',
      biography: "Fyodor Dostoyevsky (born November 11 1821, Moscow, Russia—died February 9 1881, St. Petersburg) Russian novelist and short-story writer whose psychological penetration into the darkest recesses of the human heart, together with his unsurpassed moments of illumination, had an immense influence on 20th-century fiction. Dostoyevsky is usually regarded as one of the finest novelists who ever lived. Literary modernism, existentialism, and various schools of psychology, theology, and literary criticism have been profoundly shaped by his ideas. His works are often called prophetic because he so accurately predicted how Russia’s revolutionaries would behave if they came to power. In his time he was also renowned for his activity as a journalist.",
      famousBooks: ['Crime and Punishment', 'The Brothers Karamazov', 'Notes from Underground'],
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_Портрет_Ф.М.Достоевского_-_Google_Art_Project.jpg/220px-Vasily_Perov_-_Портрет_Ф.М.Достоевского_-_Google_Art_Project.jpg', // Replace with the actual path to Dostoevsky's photo
    },
    {
      id: 2,
      name: 'Leo Tolstoy',
      biography: "Leo Tolstoy (September 9, 1828-November 20, 1910) was a Russian writer, best known for his epic novels. Born into an aristocratic Russian family, Tolstoy wrote realist fiction and semi-autobiographical novels before shifting into more moral and spiritual works. Though his life spanned the westernization of Russia, his early intellectual and cultural education was the traditional 18th-century training. Lyovochka (as he was called) was a tender, affection-seeking child who liked to do things out of the ordinary. Self-consciousness was one of his youthful attributes, and this process of self-scrutiny continued all his life. Indeed, Tolstoy's life is one of the best documented accounts we have of any writer, for the diaries he began at 17 he continued through old age.",
      famousBooks: ['War and Peace', 'Anna Karenina', 'The Death of Ivan Ilyich'],
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Лев_Толстой_%28Чертков%2C_1910%29_-_0003600121.jpg/220px-Лев_Толстой_%28Чертков%2C_1910%29_-_0003600121.jpg', // Replace with the actual path to Tolstoy's photo
    },
    {
      id: 3,
      name: 'Mikhail Bulgakov',
      biography: "Mikhail Bulgakov (born May 15, 1891, Kiev, Ukraine, Russian Empire—died March 10, 1940, Moscow, Russia, U.S.S.R.) Soviet playwright, novelist, and short-story writer best known for his humour and penetrating satire. Beginning his adult life as a doctor, Bulgakov gave up medicine for writing. His first major work was the novel Belaya gvardiya (The White Guard), serialized in 1925 but never published in book form. A realistic and sympathetic portrayal of the motives and behaviour of a group of anti-Bolshevik White officers during the civil war, it was met by a storm of official criticism for its lack of a communist hero. Bulgakov reworked it into a play, Dni Turbinykh (“The Days of the Turbins”), which was staged with great success in 1926 but was subsequently banned. In 1925 he published a book of satirical fantasies implicitly critical of Soviet communist society. This work, too, was officially denounced. In the same year he wrote a scathing comic satire on pseudoscience.",
      famousBooks: ['The Master and Margarita', 'Heart of a Dog', 'The White Guard'],
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bulgakov1910s.jpg/230px-Bulgakov1910s.jpg', // Replace with the actual path to Bulgakov's photo
    },
    // Add more authors as needed
  ];

const Authors = () => {
  return (
    <main className="block min-h-screen p-24" style={{ background: 'linear-gradient(to bottom, #BDD6C8, #7A9E89)' }}>
        <nav className="fixed top-0 left-0 right-0 flex items-center p-4 gap-5 bg-transparent">
          <div className='flex items-center justify-start'>
              <h1 className="title1 text-2xl font-bold text-green-900">Authors</h1>
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
      
      <div className="block">
        {authorsData.map((author) => (
          <div key={author.id} className="flex gap-4 bg-white p-4 rounded-md shadow-md">
            <img src={author.photoUrl} alt={author.name} className="img-3 w-full h-48 object-cover mb-4 rounded-md" />
            <div className='bibl m-2 p-2'>
                <h2 className="text-xl font-semibold mb-2">{author.name}</h2>
                <p className="text-gray-600 mb-4">{author.biography}</p>
                <h3 className="text-lg font-semibold mb-2">Famous Books:</h3>
                <ul>
                {author.famousBooks.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Authors;

