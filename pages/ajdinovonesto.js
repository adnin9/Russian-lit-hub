import Image from 'next/image';
import { useState, useEffect } from 'react';

const Homeee = () => {

    const [shouldScroll, setShouldScroll] = useState(false);

    const scrollToBottom = () => {
        const bottomDiv = document.getElementById('bottomDiv');
        if (bottomDiv) {
          bottomDiv.scrollIntoView({ behavior: 'smooth' });
        }
      };

    useEffect(() => {
    if (shouldScroll) {
        scrollToBottom();
        setShouldScroll(false);
    }
    }, [shouldScroll]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button onClick={() => setShouldScroll(true)}>Scroll to Bottom</button>
            <div className="upperDiv">
            <Image className="image3" src="/images/peakpx.jpg" alt="Example Image" width={500000} height={300000}/>
                <div className="page-title">BOOKSNA</div>
            </div>

            <div className="middleDiv"></div>
            <div id="bottomDiv">
                <Image className="image0" src="/images/stranger.jpg" alt="Example Image" width={200} height={200}/>
                <Image className="image1" src="/images/bells.jpg" alt="Example Image" width={200} height={200}/>
                <Image className="image2" src="/images/hamlet.jpeg" alt="Example Image" width={200} height={200}/>
                <Image className="image4" src="/images/goethe.jpg" alt="Example Image" width={200} height={200}/>
                <Image className="image5" src="/images/crime.jpg" alt="Example Image" width={200} height={200}/>
                <Image className="image6" src="/images/proust.jpg" alt="Example Image" width={200} height={200}/>
                <Image className="image7" src="/images/anna.jpeg" alt="Example Image" width={200} height={200}/>
            <a href="https://books.google.ba/books/about/Middle_East.html?id=fyIunhwQ60wC&redir_esc=y" target="_blank" rel="noopener noreferrer">
                <Image className="image8" src="/images/middle.jpg" alt="Example Image" width={200} height={200} />
            </a>
            </div>

            <div className="navigation-bar">
                <p>
                    <a href="https://github.com/zelicaydin" target="_blank" rel="noopener noreferrer">
                        Buy Books
                    </a>
                </p>
            </div>
        </main>
        )

    }

export default Homeee;