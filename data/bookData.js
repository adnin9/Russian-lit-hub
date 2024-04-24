const bookDatas = [
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    id: 1,
    imageUrl: 'https://cdn.penguin.co.uk/dam-assets/books/9780099922803/9780099922803-jacket-large.jpg',
    summary:"The Brothers Karamazov is a murder mystery, a courtroom drama, and an exploration of erotic rivalry in a series of triangular love affairs involving the “wicked and sentimental” Fyodor Pavlovich Karamazov and his three sons―the impulsive and sensual Dmitri; the coldly rational Ivan; and the healthy, red-cheeked young novice Alyosha. Through the gripping events of their story, Dostoevsky portrays the whole of Russian life, is social and spiritual striving, in what was both the golden age and a tragic turning point in Russian culture. This award-winning translation by Richard Pevear and Larissa Volokhonsky remains true to the verbal inventiveness of Dostoevsky’s prose, preserving the multiple voices, the humor, and the surprising modernity of the original. It is an achievement worthy of Dostoevsky’s last and greatest novel."
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    id: '2',
    imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61VydapyCQL._AC_UF1000,1000_QL80_.jpg',
    summary: "In Russia's struggle with Napoleon, Tolstoy saw a tragedy that involved all mankind.War and Peace broadly focuses on Napoleon's invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.As Napoleon’s army invades, Tolstoy brilliantly follows characters from diverse backgrounds—peasants and nobility, civilians and soldiers—as they struggle with the problems unique to their era, their history, and their culture. And as the novel progresses, these characters transcend their specificity, becoming some of the most moving—and human—figures in world literature.",
  },
  {
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    id: '3',
    imageUrl: 'https://m.media-amazon.com/images/I/71bZYI9NvpL._AC_UF894,1000_QL80_.jpg',
    summary: "An audacious revision of the stories of Faust and Pontius Pilate, The Master and Margarita is recognized as one of the essential classics of modern Russian literature. The novel's vision of Soviet life in the 1930s is so ferociously accurate that it could not be published during its author's lifetime and appeared only in a censored edition in the 1960s. Its truths are so enduring that its language has become part of the common Russian speech. One hot spring, the devil arrives in Moscow, accompanied by a retinue that includes a beautiful naked witch and an immense talking black cat with a fondness for chess and vodka. The visitors quickly wreak havoc in a city that refuses to believe in either God or Satan. But they also bring peace to two unhappy Muscovites: one is the Master, a writer pilloried for daring to write a novel about Christ and Pontius Pilate; the other is Margarita, who loves the Master so deeply that she is willing literally to go to hell for him. What ensues is a novel of inexhaustible energy, humor, and philosophical depth, a work whose nuances emerge for the first time in Diana Burgin's and Katherine Tiernan O'Connor's splendid English version."

  },
  {
    title: 'The Cherry Orchard',
    author: 'Anton Chekhov',
    id: '4',
    imageUrl: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781849438704.jpg',
    summary: "In Chekhov's tragi-comedy - perhaps his most popular play - the Gayev family is torn by powerful forces, forces rooted deep in history, and in the society around them. Their estate is hopelessly in debt: urged to cut down their beautiful cherry orchard and sell the land for holiday cottages, they struggle to act decisively. Tom Murphy's fine vernacular version allows us to re-imagine the events of the play in the last days of Anglo-Irish colonialism. It gives this great play vivid new life within our own history and social consciousness."
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    id: '5',
    imageUrl: 'https://i.etsystatic.com/23951954/r/il/7909ec/4924928583/il_570xN.4924928583_rfr8.jpg',
    summary: 'Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden sex worker, can offer the chance of redemption.'
  },
  {
    title: 'Eugene Onegin',
    author: 'Alexander Pushkin',
    id: '6',
    imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61nLnUT0wtL._AC_UF1000,1000_QL80_.jpg',
    summary:"This is the widely acclaimed translation of Russian literature's most seminal work. Pushkin's novel in verse has influenced Russian prose as well as poetry for more than a century. By turns brilliant, entertaining, romantic and serious, it traces the development of a young Petersburg dandy as he deals with life and love. Influeneced by Byron, Pushkin reveals the nature of his heroes through the emotional colorations found in their witty remarks, nature descriptions, and unexpected actions, all conveyed in stanzas of sonnet length (a form which became known as the Onegin Stanza), faithfully reproduced by Walter Arndt inthis Bollingen Prize translation. Eugene Onegin is the master work of the poet whom Russians regard as the fountainhead of their literature. Set in imperial Russia during the 1820s, Pushkin's novel in verse follows the emotions and destiny of three men - Onegin the bored fop, Lensky the minor elegiast,& a stylized Pushkin himself - and the fates and affections of three women - Tatyana the provincial beauty, her sister Olga, & Pushkin's mercurial Muse. Engaging, full of suspense, and varied in tone, it also portrays a large cast of other characters & offers the reader many literary, philosophical, and autobiographical digressions, often in a highly satirical vein. "
  },
  {
    title: 'Dead Souls',
    author: 'Nikolai Gogol',
    id: '7',
    imageUrl: 'https://centerforfiction.org/uploads/gogol-nikolai.dead-souls.jpeg',
    summary:"Chichikov, a mysterious stranger, arrives in a provincial town and visits a succession of landowners to make each a strange offer. He proposes to buy the names of dead serfs still registered on the census, saving their owners from paying taxes on them, and to use these 'souls' as collateral to re-invent himself as a gentleman. In this ebullient masterpiece, Gogol created a grotesque gallery of human types, from the bear-like Sobakevich to the insubstantial fool Manilov, and, above all, the devilish con man Chichikov. Dead Souls, Russia's first major novel, is one of the most unusual works of nineteenth-century fiction and a devastating satire on social hypocrisy."
  },
  {
    title: 'Doctor Zhivago',
    author: 'Boris Pasternak',
    id: '8',
    imageUrl: 'https://m.media-amazon.com/images/I/71Sp2a+TlQL._AC_UF894,1000_QL80_.jpg',
    summary:"This epic tale about the effects of the Russian Revolution and its aftermath on a bourgeois family was not published in the Soviet Union until 1987. One of the results of its publication in the West was Pasternak's complete rejection by Soviet authorities; when he was awarded the Nobel Prize for Literature in 1958 he was compelled to decline it. The book quickly became an international best-seller. Dr. Yury Zhivago, Pasternak's alter ego, is a poet, philosopher, and physician whose life is disrupted by the war and by his love for Lara, the wife of a revolutionary. His artistic nature makes him vulnerable to the brutality and harshness of the Bolsheviks. The poems he writes constitute some of the most beautiful writing featured in the novel."
  },
  {
    title: 'The Idiot',
    author: 'Fyodor Dostoevsky',
    id: '9',
    imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j+uqFid4L._AC_UF1000,1000_QL80_.jpg',
    summary:"Returning to Russia from a sanitarium in Switzerland, the Christ-like epileptic Prince Myshkin finds himself enmeshed in a tangle of love, torn between two women—the notorious kept woman Nastasya and the pure Aglaia—both involved, in turn, with the corrupt, money-hungry Ganya. In the end, Myshkin’s honesty, goodness, and integrity are shown to be unequal to the moral emptiness of those around him. In her revision of the Garnett translation, Anna Brailovsky has corrected inaccuracies wrought by Garnett’s drastic anglicization of the novel, restoring as much as possible the syntactical structure of the original story."
  },
  {
    title: 'Oblomov',
    author: 'Ivan Goncharov',
    id: '10',
    imageUrl: 'https://almabooks.com/wp-content/uploads/2016/10/9781847493446.jpg',
    summary:"Even though Ivan Goncharov wrote several books that were widely read and discussed during his lifetime, today he is remembered for one novel, Oblomov, published in 1859, an indisputable classic of Russian literature, the artistic stature and cultural significance of which may be compared only to other such masterpieces as Nikolai Gogol's Dead Souls, Leo Tolstoy's Anna Karenina, and Fyodor Dostoevsky's Brothers Karamazov. Stephen Pearl's new translation, the first major English-language publication of Oblomov in more than fifty years, succeeds exquisitely to introduce this astonishing and endearing novel to a new generation of readers."
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    id: '11',
    imageUrl: 'https://mybook.ba/wp-content/uploads/2022/08/9781853262715.jpg',
    summary:"Acclaimed by many as the world's greatest novel, Anna Karenina provides a vast panorama of contemporary life in Russia and of humanity in general. In it Tolstoy uses his intense imaginative insight to create some of the most memorable characters in all of literature. Anna is a sophisticated woman who abandons her empty existence as the wife of Karenin and turns to Count Vronsky to fulfil her passionate nature - with tragic consequences. Levin is a reflection of Tolstoy himself, often expressing the author's own views and convictions. Throughout, Tolstoy points no moral, merely inviting us not to judge but to watch. As Rosemary Edmonds comments, 'He leaves the shifting patterns of the kaleidoscope to bring home the meaning of the brooding words following the title, 'Vengeance is mine, and I will repay."
  },
  {
    title: 'The Gulag Archipelago',
    author: 'Aleksandr Solzhenitsyn',
    id: '12',
    imageUrl: 'https://cdn.penguin.co.uk/dam-assets/books/9781784878740/9781784878740-jacket-large.jpg',
    summary:"Drawing on his own incarceration and exile, as well as on evidence from more than 200 fellow prisoners and Soviet archives, Aleksandr I. Solzhenitsyn reveals the entire apparatus of Soviet repression—the state within the state that ruled all-powerfully. Through truly Shakespearean portraits of its victims—men, women, and children—we encounter secret police operations, labor camps and prisons; the uprooting or extermination of whole populations, the welcome that awaited Russian soldiers who had been German prisoners of war. Yet we also witness the astounding moral courage of the incorruptible, who, defenseless, endured great brutality and degradation. The Gulag Archipelago 1918–1956—a grisly indictment of a regime, fashioned here into a veritable literary miracle—has now been updated with a new introduction that includes the fall of the Soviet Union and Solzhenitsyn's move back to Russia."
  },
  {
    title: 'Death of Ivan Ilyich',
    author: 'Leo Tolstoy',
    id: '13',
    imageUrl: 'https://cdn.kobo.com/book-images/fd37400f-dbba-48af-a948-018b6bd39ab9/1200/1200/False/the-death-of-ivan-ilych-26.jpg',
    summary:"Hailed as one of the world's supreme masterpieces on the subject of death and dying, The Death of Ivan Ilyich is the story of a worldly careerist, a high court judge who has never given the inevitability of his dying so much as a passing thought. But one day, death announces itself to him, and to his shocked surprise, he is brought face to face with his own mortality.\nHow, Tolstoy asks, does an unreflective man confront his one and only moment of truth?\nThis short novel was an artistic culmination of a profound spiritual crisis in Tolstoy's life, a nine-year period following the publication of Anna Karenina during which he wrote not a word of fiction. A thoroughly absorbing, and, at times, terrifying glimpse into the abyss of death, it is also a strong testament to the possibility of finding spiritual salvation."
  },
  {
    title: 'The Gambler',
    author: 'Fyodor Dostoevsky',
    id: '14',
    imageUrl: 'https://images.booksense.com/images/208/596/9798692596208.jpg',
    summary:"In this dark and compelling short novel, Dostoevsky tells the story of Alexey Ivanovitch, a young tutor working in the household of an imperious Russian general. Alexey tries to break through the wall of the established order in Russia, but instead becomes mired in the endless downward spiral of betting and loss. His intense and inescapable addiction is accentuated by his affair with the General’s cruel yet seductively adept niece, Polina. In The Gambler, Dostoevsky reaches the heights of drama with this stunning psychological portrait."
  },
  {
    title: 'Uncle Vanya',
    author: 'Anton Chekhov',
    id: '15',
    imageUrl: 'https://cdn.kobo.com/book-images/495cc1b2-ce35-439e-ba41-d16252706798/353/569/90/False/uncle-vanya-55.jpg',
  },
  {
    title: 'A Hero of Our Time',
    author: 'Mikhail Lermontov',
    id: '16',
    imageUrl: 'https://live.staticflickr.com/4148/5009844226_194a4141fc_c.jpg',
  },
  {
    title: 'Fathers and Sons',
    author: 'Ivan Turgenev',
    id: '17',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1390793535i/19117.jpg',
  },
  {
    title: 'The Kreutzer Sonata',
    author: 'Leo Tolstoy',
    id: '18',
    imageUrl: 'https://m.media-amazon.com/images/I/71nwzjVgtHL._AC_UF894,1000_QL80_.jpg',
  },
  {
    title: 'Heart of a Dog',
    author: 'Mikhail Bulgakov',
    id: '19',
    imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457906509l/113205.jpg',
  },
  {
    title: 'The Queen of Spades',
    author: 'Alexander Pushkin',
    id: '20',
    imageUrl: 'https://m.media-amazon.com/images/I/51oNUo8H2WL.jpg',
  },
  {
    title: 'Overcoat',
    author: 'Nikolai Gogol',
    id: '21',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1570956428i/537094.jpg'
  },
  {
    title: 'White Nights',
    author: 'Fyodor Dostoevsky',
    id: '22',
    imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1450699039l/1772910.jpg'
  },
  {
    title: 'White Guard',
    author: 'Mikhail Bulgakov',
    id: '23',
    imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71SOR06mI8L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: 'Mother',
    author: 'Maxim Gorky',
    id: '24',
    imageUrl: 'https://pictures.abebooks.com/isbn/9785050005397-us.jpg'
  },
  {
    title: 'Lolita',
    author: 'Vladimir Nabokov',
    id: '25',
    imageUrl: 'https://images.theconversation.com/files/87705/original/image-20150708-31595-171wo7h.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip'
  },
  {
    title: 'Demons',
    author: 'Fyodor Dostoevsky',
    id: '26',
    imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1524586008l/5695.jpg'
  },
  {
    title: 'Diary of a Madman',
    author: 'Nikolai Gogol',
    id: '27',
    imageUrl: 'https://images.penguinrandomhouse.com/cover/9780140449075'
  },
  {
    title: 'First Love',
    author: 'Ivan Turgenev',
    id: '28',
    imageUrl: 'https://m.media-amazon.com/images/I/51zQimZ-B-L.jpg'
  },
  {
    title: 'And Quiet Flows the Don',
    author: 'Mikhail Sholokhov',
    id: '29',
    imageUrl: 'https://a.ltrbxd.com/resized/film-poster/8/8/2/4/1/88241-quiet-flows-the-don-0-230-0-345-crop.jpg?v=792250e651',
  },
  {
    title: 'Notes From the Underground',
    author: 'Fyodor Dostoevsky',
    id: '30',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657562670i/49455.jpg'
  },

];

  export default bookDatas;
  