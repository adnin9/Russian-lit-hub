import Link from 'next/link';
import './layout2';

const Navbar = () => {
    return (
        <main className="fixed top-0 left-0 right-0 flex items-center p-4 gap-5 bg-transparent">
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
        </main>
    )
}

export default Navbar;