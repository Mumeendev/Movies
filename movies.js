// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Movie Data
const movies = [
    // Anime
    {
        id: 1,
        title: "Spirited Away",
        category: "Anime",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        description: "A young girl enters a magical world of spirits and must find a way to free herself and her parents.",
        themes: "Coming-of-age, Identity, Environmentalism, Courage",
        director: "Hayao Miyazaki",
        rating: 0,
        preview: "Spirited Away follows Chihiro as she navigates a mysterious bathhouse for spirits. The film explores themes of greed, identity, and personal growth through stunning animation and rich storytelling. It won the Academy Award for Best Animated Feature."
    },
    {
        id: 2,
        title: "Your Name",
        category: "Anime",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/1TDV5ILRBDBLWwBwBhL3fYcYhKk.jpg",
        description: "Two teenagers discover they are swapping bodies and develop a connection that transcends time and space.",
        themes: "Love, Fate, Time, Connection",
        director: "Makoto Shinkai",
        rating: 0,
        preview: "Your Name is a breathtaking tale of two souls connected across time. The film beautifully combines romance with supernatural elements, exploring destiny and the threads that bind people together. Its stunning visuals and emotional depth captivated audiences worldwide."
    },
    {
        id: 3,
        title: "Princess Mononoke",
        category: "Anime",
        year: 1997,
        image: "https://image.tmdb.org/t/p/w500/jHWmNrTm544HK0dG3vYkI6aKjLq.jpg",
        description: "A prince becomes involved in the struggle between forest gods and humans consuming nature's resources.",
        themes: "Nature vs Industry, War, Morality, Balance",
        director: "Hayao Miyazaki",
        rating: 0,
        preview: "Princess Mononoke is an epic tale that examines the conflict between industrialization and nature. The film presents complex moral questions without clear villains, showing how progress and tradition clash. Its powerful message remains relevant today."
    },
    {
        id: 4,
        title: "Akira",
        category: "Anime",
        year: 1988,
        image: "https://image.tmdb.org/t/p/w500/neZ0ykEsP8eAbcwDCPPF3fjVpOm.jpg",
        description: "In a dystopian Neo-Tokyo, a biker gang member gains telekinetic powers that threaten the city.",
        themes: "Power, Corruption, Friendship, Dystopia",
        director: "Katsuhiro Otomo",
        rating: 0,
        preview: "Akira revolutionized anime and cyberpunk aesthetics. Set in post-apocalyptic Tokyo, it explores themes of unchecked power and government corruption. The film's groundbreaking animation and mature themes influenced countless works in both anime and Western media."
    },
    {
        id: 5,
        title: "Jujutsu Kaisen",
        category: "Anime",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/zBWUTduKhTDggSvMgMJPaShRpBu.jpg",
        description: "A high school student joins a secret organization of sorcerers to fight powerful curses after swallowing a cursed finger.",
        themes: "Good vs Evil, Friendship, Sacrifice, Power",
        director: "Sunghoo Park",
        rating: 0,
        preview: "Jujutsu Kaisen is a modern anime sensation that redefines battle shonen. With stunning animation by MAPPA, it follows Yuji Itadori as he navigates the dangerous world of curses and sorcerers. Its dynamic fight scenes and complex characters make it a standout series."
    },
    {
        id: 6,
        title: "Naruto",
        category: "Anime",
        year: 2002,
        image: "https://image.tmdb.org/t/p/w500/uEQYkz3MkBLJWqM4kKhBhjKTU.jpg",
        description: "A young ninja with a sealed demon fox inside him dreams of becoming the strongest leader of his village.",
        themes: "Perseverance, Friendship, Destiny, Redemption",
        director: "Hayato Date",
        rating: 0,
        preview: "Naruto is one of the most iconic anime series of all time. It follows the journey of a young outcast as he strives to earn recognition and protect his village. The series explores deep themes of loneliness, bonds, and the cycle of hatred through compelling character development."
    },
    {
        id: 7,
        title: "Attack on Titan",
        category: "Anime",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/8qBylBsQW4llkPCLFhEjYB7XBFp.jpg",
        description: "Humanity lives inside cities surrounded by enormous walls as protection against gigantic man-eating humanoids.",
        themes: "Freedom, Survival, War, Truth",
        director: "Tetsuro Araki",
        rating: 0,
        preview: "Attack on Titan is a dark and gripping anime that explores the cost of freedom and the horrors of war. The series masterfully builds suspense and reveals shocking truths about its world. Its complex narrative and moral ambiguity make it one of the greatest anime of the decade."
    },
    {
        id: 8,
        title: "Demon Slayer",
        category: "Anime",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6S6SJGmTz1rTnIa.jpg",
        description: "A young boy becomes a demon slayer after his family is slaughtered and his sister is turned into a demon.",
        themes: "Family, Determination, Good vs Evil, Tragedy",
        director: "Haruo Sotozaki",
        rating: 0,
        preview: "Demon Slayer captivated audiences with its breathtaking animation and emotional storytelling. The series follows Tanjiro's quest to cure his sister and avenge his family. Its fluid fight choreography and heartfelt moments have made it a global phenomenon."
    },
    {
        id: 9,
        title: "Fullmetal Alchemist: Brotherhood",
        category: "Anime",
        year: 2009,
        image: "https://image.tmdb.org/t/p/w500/5ZFUEOULaVml7pQuXxhp4hWVjML.jpg",
        description: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical ritual.",
        themes: "Sacrifice, Brotherhood, Equivalent Exchange, War, Humanity",
        director: "Yasuhiro Irie",
        rating: 0,
        preview: "Fullmetal Alchemist: Brotherhood is widely regarded as one of the greatest anime of all time. The series follows Edward and Alphonse Elric as they confront corruption, war, and the consequences of playing god. Its complex narrative explores deep philosophical questions while delivering incredible action sequences."
    },
    {
        id: 10,
        title: "Death Note",
        category: "Anime",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/AiYpYMjVpNOJk7MnVfMaFQmJmjm.jpg",
        description: "A high school student discovers a supernatural notebook that kills anyone whose name is written in it.",
        themes: "Justice, Morality, Power, Corruption, Intellect",
        director: "Tetsuro Araki",
        rating: 0,
        preview: "Death Note is a psychological thriller masterpiece that explores the corrupting nature of absolute power. The cat-and-mouse game between Light and detective L creates one of anime's most compelling narratives. It raises profound questions about justice and the dangers of playing god."
    },
    {
        id: 11,
        title: "One Punch Man",
        category: "Anime",
        year: 2015,
        image: "https://image.tmdb.org/t/p/w500/iE3sDvqPMqGqILsMnJ7qHqPqPqP.jpg",
        description: "A superhero who can defeat any opponent with a single punch searches for a worthy challenge.",
        themes: "Heroism, Boredom, Identity, Satire, Power",
        director: "Shingo Natsume",
        rating: 0,
        preview: "One Punch Man brilliantly satirizes superhero tropes while delivering stunning action animation. The series follows Saitama, an overpowered hero dealing with the existential crisis of being too strong. Its humor, combined with spectacular fight scenes, makes it both hilarious and thrilling."
    },
    {
        id: 12,
        title: "Tokyo Ghoul",
        category: "Anime",
        year: 2014,
        image: "https://image.tmdb.org/t/p/w500/gpBPLHqg7Y4YJLdMlZzqLqLqLqL.jpg",
        description: "A college student becomes a half-ghoul after a deadly encounter and must navigate two worlds.",
        themes: "Identity, Survival, Humanity, Discrimination, Tragedy",
        director: "Shuhei Morita",
        rating: 0,
        preview: "Tokyo Ghoul is a dark, psychological anime that explores what it means to be human. The protagonist's transformation into a half-ghoul forces him to confront moral ambiguity and survival in a world where humans and ghouls are at odds. Its haunting atmosphere and complex characters create a gripping experience."
    },
    // Anime - 10 more movies
    {
        id: 101,
        title: "My Hero Academia",
        category: "Anime",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/aUFj83kOkTFLCSAQQzCNwq3Kqkx.jpg",
        description: "A boy born without superpowers dreams of becoming the greatest hero in a world where abilities are the norm.",
        themes: "Heroism, Perseverance, Friendship, Legacy",
        director: "Kenji Nagasaki",
        rating: 0,
        preview: "My Hero Academia is an inspiring superhero anime that reimagines the genre through a Japanese lens. The series follows Izuku Midoriya as he inherits powers and enrolls in hero academy. Its message that anyone can be a hero resonates deeply with audiences worldwide."
    },
    {
        id: 102,
        title: "Sword Art Online",
        category: "Anime",
        year: 2012,
        image: "https://image.tmdb.org/t/p/w500/jnJFMTJfHNhVxMmAJqvFZy7jEjT.jpg",
        description: "Players become trapped in a virtual reality MMORPG where death in the game means death in real life.",
        themes: "Virtual Reality, Survival, Love, Technology",
        director: "Tomohiko Ito",
        rating: 0,
        preview: "Sword Art Online explores the dangers and possibilities of virtual reality gaming. The series follows Kirito as he fights to clear the game and save thousands of trapped players. Its blend of action, romance, and gaming culture captivated a new generation of anime fans."
    },
    {
        id: 103,
        title: "Hunter x Hunter",
        category: "Anime",
        year: 2011,
        image: "https://image.tmdb.org/t/p/w500/zArviV5XOVGgEaFyIazKqMkKzOZ.jpg",
        description: "A young boy embarks on a journey to become a Hunter and find his father who abandoned him.",
        themes: "Adventure, Friendship, Growth, Morality",
        director: "Hiroshi Koujina",
        rating: 0,
        preview: "Hunter x Hunter is a masterclass in storytelling that subverts shonen tropes while delivering incredible battles. The series follows Gon's quest to become a Hunter, introducing complex characters and moral dilemmas. The Chimera Ant arc is considered one of the finest arcs in anime history."
    },
    {
        id: 104,
        title: "Cowboy Bebop",
        category: "Anime",
        year: 1998,
        image: "https://image.tmdb.org/t/p/w500/xZbKqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A group of bounty hunters travel through space in their ship, hunting criminals while confronting their pasts.",
        themes: "Loneliness, Jazz, Redemption, Found Family, Existentialism",
        director: "Shinichiro Watanabe",
        rating: 0,
        preview: "Cowboy Bebop is a genre-defining masterpiece that blends jazz, noir, and space opera. The series follows a ragtag crew of bounty hunters, each running from their past. Its stylish direction, incredible soundtrack, and philosophical depth make it essential viewing."
    },
    {
        id: 105,
        title: "Steins;Gate",
        category: "Anime",
        year: 2011,
        image: "https://image.tmdb.org/t/p/w500/qJqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A group of friends accidentally discover time travel and must deal with the consequences of altering the past.",
        themes: "Time Travel, Consequences, Science, Friendship, Sacrifice",
        director: "Hiroshi Hamasaki",
        rating: 0,
        preview: "Steins;Gate is a brilliant sci-fi thriller that explores the butterfly effect of time travel. The series starts slow but builds to an emotionally devastating climax that tests the limits of human determination. Its intricate plotting and character development make it a modern classic."
    },
    {
        id: 106,
        title: "Mob Psycho 100",
        category: "Anime",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/mPqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A powerful psychic middle schooler tries to live a normal life while dealing with supernatural threats.",
        themes: "Self-Improvement, Power, Identity, Kindness, Growth",
        director: "Yuzuru Tachikawa",
        rating: 0,
        preview: "Mob Psycho 100 combines spectacular animation with heartfelt coming-of-age storytelling. The series follows Mob, an incredibly powerful esper who just wants to fit in. Its message that powers don't make you special, but personal growth does, is both refreshing and profound."
    },
    {
        id: 107,
        title: "Neon Genesis Evangelion",
        category: "Anime",
        year: 1995,
        image: "https://image.tmdb.org/t/p/w500/nPqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "Teenagers pilot giant mechas to defend Earth from mysterious beings called Angels.",
        themes: "Depression, Identity, Human Connection, Religion, Trauma",
        director: "Hideaki Anno",
        rating: 0,
        preview: "Neon Genesis Evangelion revolutionized mecha anime by diving deep into psychological trauma and human connection. The series uses giant robot battles as a backdrop for exploring depression, loneliness, and the human need for understanding. Its influence on anime and pop culture is immeasurable."
    },
    {
        id: 108,
        title: "One Piece",
        category: "Anime",
        year: 1999,
        image: "https://image.tmdb.org/t/p/w500/oPqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A young pirate and his crew sail the Grand Line in search of the ultimate treasure, the One Piece.",
        themes: "Adventure, Freedom, Friendship, Dreams, Justice",
        director: "Eiichiro Oda",
        rating: 0,
        preview: "One Piece is the best-selling manga/anime franchise of all time, and for good reason. The series combines adventure, humor, and heart-wrenching drama as Luffy and his crew chase their dreams. Its world-building and character development are unmatched in anime."
    },
    {
        id: 109,
        title: "Violet Evergarden",
        category: "Anime",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/vPqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A former child soldier becomes a letter writer to understand the meaning of the words 'I love you.'",
        themes: "Love, Healing, War, Communication, Humanity",
        director: "Taichi Ishidate",
        rating: 0,
        preview: "Violet Evergarden is a visually stunning meditation on love, loss, and human connection. The series follows Violet as she learns to understand emotions through writing letters for others. Its breathtaking animation and emotional storytelling make it a modern masterpiece."
    },
    {
        id: 110,
        title: "Chainsaw Man",
        category: "Anime",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/cPqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A young man merges with a chainsaw devil and joins a government agency to hunt other devils.",
        themes: "Survival, Desire, Violence, Found Family, Humanity",
        director: "Ryu Nakayama",
        rating: 0,
        preview: "Chainsaw Man is a raw, visceral anime that subverts expectations with its blend of dark humor and genuine emotion. The series follows Denji, a boy who just wants a normal life but is thrust into devil hunting. Its cinematic direction and unique tone make it stand out in modern anime."
    },
    // Kdrama
    {
        id: 5,
        title: "Crash Landing on You",
        category: "Kdrama",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/tD8WjMgFYdXbqTjKHVjBwJpXGfE.jpg",
        description: "A South Korean heiress accidentally paraglides into North Korea and falls in love with an army officer.",
        themes: "Love, Division, Loyalty, Cultural Differences",
        director: "Lee Jung-hyo",
        rating: 0,
        preview: "Crash Landing on You is a sweeping romance that transcends political boundaries. The drama explores the complexities of North and South Korean relations through a love story that defies all odds. It became a cultural phenomenon across Asia."
    },
    {
        id: 6,
        title: "Goblin: The Lonely and Great God",
        category: "Kdrama",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/3JkSF5Y4rV8gXqCJbqLqJqLqLqJ.jpg",
        description: "An immortal goblin seeks to end his cursed life by finding his destined bride, the Goblin's Bride.",
        themes: "Fate, Immortality, Sacrifice, Destiny",
        director: "Lee Eung-bok",
        rating: 0,
        preview: "Goblin combines fantasy and romance in a tale of an immortal being seeking release. The drama explores themes of destiny, sacrifice, and the price of immortality. Its cinematic production values and emotional depth set new standards for Kdramas."
    },
    {
        id: 7,
        title: "Descendants of the Sun",
        category: "Kdrama",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/rXhFdKbJYqLqLqLqLqLqLqLqLqL.jpg",
        description: "A love story between a soldier and a doctor unfolds against the backdrop of war-torn nations.",
        themes: "Duty, Love, Heroism, Sacrifice",
        director: "Lee Eung-bok",
        rating: 0,
        preview: "Descendants of the Sun captures the tension between duty and love in dangerous circumstances. The drama showcases the sacrifices military personnel and medical workers make. It sparked international interest in Korean dramas and culture."
    },
    {
        id: 8,
        title: "Itaewon Class",
        category: "Kdrama",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/sKqLqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "An ex-convict opens a bar-restaurant to seek revenge on the food company that destroyed his family.",
        themes: "Revenge, Ambition, Justice, Entrepreneurship",
        director: "Kim Sung-yoon",
        rating: 0,
        preview: "Itaewon Class is an inspiring story of revenge and redemption through entrepreneurship. The drama tackles social issues like discrimination and corporate corruption while showing how determination can overcome seemingly insurmountable obstacles."
    },
    {
        id: 201,
        title: "Squid Game",
        category: "Kdrama",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.",
        themes: "Survival, Inequality, Human Nature, Desperation, Morality",
        director: "Hwang Dong-hyuk",
        rating: 0,
        preview: "Squid Game became a global phenomenon by exposing the brutal realities of economic inequality through deadly children's games. The series follows desperate contestants who risk everything for a chance at wealth. Its social commentary and shocking violence captivated audiences worldwide."
    },
    {
        id: 202,
        title: "Hospital Playlist",
        category: "Kdrama",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/hPqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "Five doctors who have been friends since medical school navigate life, love, and music together.",
        themes: "Friendship, Medicine, Music, Life, Community",
        director: "Shin Won-ho",
        rating: 0,
        preview: "Hospital Playlist is a heartwarming slice-of-life drama that follows five doctor friends through their daily lives. The series balances medical cases with personal stories, showing how friendship sustains us through life's challenges. Its band performances add a delightful musical element."
    },
    {
        id: 203,
        title: "Reply 1988",
        category: "Kdrama",
        year: 2015,
        image: "https://image.tmdb.org/t/p/w500/rPqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "Five childhood friends growing up in a Seoul neighborhood in 1988 navigate family, love, and growing up.",
        themes: "Nostalgia, Family, Friendship, Youth, Community",
        director: "Shin Won-ho",
        rating: 0,
        preview: "Reply 1988 is widely considered one of the greatest K-dramas ever made. The series captures the warmth of neighborhood life in 1980s Seoul through the lens of five families. Its nostalgic portrayal of youth, family bonds, and first love resonates deeply with viewers of all ages."
    },
    {
        id: 204,
        title: "Vincenzo",
        category: "Kdrama",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/vPqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "An Italian-Korean mafia lawyer returns to Korea and uses unconventional methods to fight corporate evil.",
        themes: "Justice, Revenge, Morality, Found Family, Antihero",
        director: "Kim Hee-won",
        rating: 0,
        preview: "Vincenzo is a darkly entertaining thriller that blends black comedy with intense action. The series follows a mafia consigliere who teams up with a sharp-tongued lawyer to take down a corrupt corporation. Song Joong-ki's charismatic performance makes the antihero irresistibly compelling."
    },
    {
        id: 205,
        title: "It's Okay to Not Be Okay",
        category: "Kdrama",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/iKqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A psychiatric ward caretaker and an antisocial children's book author heal each other's emotional wounds.",
        themes: "Mental Health, Healing, Trauma, Love, Family",
        director: "Park Shin-woo",
        rating: 0,
        preview: "It's Okay to Not Be Okay beautifully addresses mental health issues through a unconventional romance. The series follows two damaged individuals who find healing through their connection. Its fairy tale aesthetics and psychological depth create a unique viewing experience."
    },
    {
        id: 206,
        title: "My Love from the Star",
        category: "Kdrama",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/mLqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "An alien who landed on Earth 400 years ago falls in love with a top actress in the modern day.",
        themes: "Love, Time, Fate, Destiny, Supernatural",
        director: "Jang Tae-yoo",
        rating: 0,
        preview: "My Love from the Star is a romantic fantasy that took Asia by storm. The series follows an immortal alien who falls for a vibrant but shallow actress. Its unique premise, combined with genuine chemistry between the leads, created a cultural phenomenon across Asia."
    },
    {
        id: 207,
        title: "Alchemy of Souls",
        category: "Kdrama",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/aOqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A powerful sorceress trapped in a blind woman's body becomes entangled with a young magician from a prestigious family.",
        themes: "Magic, Identity, Love, Power, Destiny",
        director: "Park Joon-hwa",
        rating: 0,
        preview: "Alchemy of Souls is an epic fantasy K-drama that showcases Korea's storytelling prowess in the fantasy genre. The series combines martial arts, magic, and romance in a fictional kingdom. Its intricate plot and stunning visuals make it a standout fantasy series."
    },
    {
        id: 208,
        title: "Hometown Cha-Cha-Cha",
        category: "Kdrama",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/hOqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A dentist moves to a seaside village and clashes with a handy jack-of-all-trades who helps everyone.",
        themes: "Community, Healing, Romance, Small Town, Happiness",
        director: "Yoo Je-won",
        rating: 0,
        preview: "Hometown Cha-Cha-Cha is a feel-good romance that captures the charm of small-town life. The series follows a city dentist who learns to appreciate the simple joys of village life through a charismatic local handyman. Its heartwarming community and beautiful coastal setting create perfect escapism."
    },
    {
        id: 209,
        title: "The Glory",
        category: "Kdrama",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/tGqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A woman seeks revenge against her high school bullies who made her life a living hell.",
        themes: "Revenge, Trauma, Justice, Bullying, Resilience",
        director: "Ahn Gil-ho",
        rating: 0,
        preview: "The Glory is a gripping revenge thriller that addresses the lasting impact of school violence. The series follows a woman who meticulously plans revenge against those who tortured her in school. Song Hye-kyo's powerful performance and the tight storytelling make it unmissable."
    },
    {
        id: 210,
        title: "Extraordinary Attorney Woo",
        category: "Kdrama",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/eOqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A brilliant attorney with autism spectrum disorder joins a major law firm and tackles challenging cases.",
        themes: "Justice, Autism, Diversity, Law, Acceptance",
        director: "Yoo In-sik",
        rating: 0,
        preview: "Extraordinary Attorney Woo is a heartwarming legal drama that celebrates neurodiversity. The series follows Woo Young-woo, an autistic attorney who brings unique perspectives to complex cases. Its blend of legal battles, personal growth, and whale metaphors creates an uplifting viewing experience."
    },
    // Nollywood
    {
        id: 9,
        title: "The Wedding Party",
        category: "Nollywood",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/wP8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A lavish wedding day descends into chaos as families clash and secrets are revealed.",
        themes: "Family, Culture, Love, Comedy",
        director: "Kemi Adetiba",
        rating: 0,
        preview: "The Wedding Party became Nigeria's highest-grossing film at its release. It explores Nigerian wedding culture with humor and heart, showing how family dynamics and cultural expectations can turn the perfect day into beautiful chaos."
    },
    {
        id: 10,
        title: "Lionheart",
        category: "Nollywood",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/lH8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A woman takes over her father's transport company and fights to prove herself in a male-dominated industry.",
        themes: "Leadership, Gender Equality, Family Business, Tradition",
        director: "Genevieve Nnaji",
        rating: 0,
        preview: "Lionheart addresses gender inequality in corporate Nigeria while celebrating family legacy. It was Nigeria's first submission for the Academy Awards. The film highlights the challenges women face in male-dominated industries."
    },
    {
        id: 11,
        title: "King of Boys",
        category: "Nollywood",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/kB8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A businesswoman and politician becomes entangled in a dangerous power struggle with a young soldier.",
        themes: "Power, Politics, Ambition, Survival",
        director: "Kemi Adetiba",
        rating: 0,
        preview: "King of Boys is a gripping political thriller that examines power dynamics in Nigeria. The film explores how ambition and politics intersect, showing the dangerous games played by those seeking influence. Its intense narrative keeps viewers engaged."
    },
    {
        id: 12,
        title: "Half of a Yellow Sun",
        category: "Nollywood",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/hY8LqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Sisters' lives are upended by the Nigerian Civil War in this adaptation of Chimamanda Ngozi Adichie's novel.",
        themes: "War, Love, Identity, Nigerian History",
        director: "Biyi Bandele",
        rating: 0,
        preview: "Half of a Yellow Sun brings to life the Biafran War through intimate personal stories. Based on the acclaimed novel, it shows how war affects ordinary people and relationships. The film serves as both entertainment and historical education."
    },
    {
        id: 301,
        title: "Citation",
        category: "Nollywood",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/cIqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A bright student seeks justice after experiencing harassment from a powerful professor at her university.",
        themes: "Justice, Sexual Harassment, Education, Courage, Empowerment",
        director: "Kunle Afolayan",
        rating: 0,
        preview: "Citation tackles the sensitive issue of sexual harassment in African universities. The film follows a student who fights back against a respected lecturer with institutional protection. Its bold subject matter and strong performances make it an important conversation starter."
    },
    {
        id: 302,
        title: "October 1",
        category: "Nollywood",
        year: 2014,
        image: "https://image.tmdb.org/t/p/w500/oCqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A police detective investigates a series of murders in a remote Nigerian village on the eve of independence.",
        themes: "Colonialism, Mystery, Nigerian History, Justice, Identity",
        director: "Kunle Afolayan",
        rating: 0,
        preview: "October 1 is a historical thriller set in colonial Nigeria during the final days before independence. The film combines murder mystery with exploration of cultural tensions between traditional Nigerian society and British colonial rule. Its atmospheric cinematography and complex narrative make it a masterpiece."
    },
    {
        id: 303,
        title: "The Figurine",
        category: "Nollywood",
        year: 2009,
        image: "https://image.tmdb.org/t/p/w500/fIqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "Two friends discover a mystical figurine that brings them good fortune but at a terrible price.",
        themes: "Greed, Superstition, Friendship, Consequences, Fate",
        director: "Kunle Afolayan",
        rating: 0,
        preview: "The Figurine revolutionized Nollywood by proving Nigerian films could have Hollywood-level production values. The psychological thriller explores how superstition and greed can destroy lives. Its ambiguous ending and excellent cinematography raised the bar for Nigerian cinema."
    },
    {
        id: 304,
        title: "Phone Swap",
        category: "Nollywood",
        year: 2012,
        image: "https://image.tmdb.org/t/p/w500/pSqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "Two strangers from different backgrounds accidentally swap phones and are forced to work together to retrieve their lives.",
        themes: "Class Differences, Romance, Comedy, Modern Nigeria, Connection",
        director: "Kunle Afolayan",
        rating: 0,
        preview: "Phone Swap is a romantic comedy that explores class divides in modern Nigeria through an accidental phone swap. The film brings together two people from completely different worlds and forces them to confront their prejudices. Its humor and heart make it an enjoyable exploration of contemporary Lagos life."
    },
    {
        id: 305,
        title: "Chief Daddy",
        category: "Nollywood",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/cDqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A wealthy patriarch's death brings his greedy family together to fight over his massive estate.",
        themes: "Family, Greed, Wealth, Inheritance, Comedy",
        director: "Niyi Akinmolayan",
        rating: 0,
        preview: "Chief Daddy is a family comedy-drama that satirizes the excesses of Nigeria's ultra-rich. The film follows a dysfunctional family fighting over inheritance after the death of their billionaire patriarch. Its star-studded cast and comedic timing make it a crowd-pleaser."
    },
    {
        id: 306,
        title: "Sugar Rush",
        category: "Nollywood",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/sRqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "Three friends running a bakery get entangled in a money laundering scheme involving a popular pastry shop.",
        themes: "Friendship, Crime, Entrepreneurship, Consequences, Ambition",
        director: "Kayode Kasum",
        rating: 0,
        preview: "Sugar Rush combines comedy and crime in a story about three friends whose bakery business becomes a front for money laundering. The film explores how ordinary people can get caught up in criminal activities. Its fast-paced narrative and strong female leads make it refreshing."
    },
    {
        id: 307,
        title: "Aníkúlápó",
        category: "Nollywood",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/aKqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A weaver discovers a mystical cloth that can raise the dead, but using it comes with deadly consequences.",
        themes: "Power, Death, Tradition, Temptation, Yoruba Mythology",
        director: "Kunle Afolayan",
        rating: 0,
        preview: "Aníkúlápó is an epic fantasy rooted in Yoruba mythology and folklore. The film tells the story of a man who gains the power to resurrect the dead but must face the consequences. Its rich cultural authenticity and stunning visuals make it a landmark in Nigerian cinema."
    },
    {
        id: 308,
        title: "Brotherhood",
        category: "Nollywood",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/bRqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "Two brothers on opposite sides of the law must confront their past when a heist brings them together.",
        themes: "Family, Crime, Loyalty, Redemption, Brotherhood",
        director: "Loukman Ali",
        rating: 0,
        preview: "Brotherhood is an action-packed thriller about two brothers separated by their life choices. The film explores how family bonds are tested when duty and loyalty collide. Its intense action sequences and emotional core make it a gripping Nigerian crime story."
    },
    {
        id: 309,
        title: "Blood & Water",
        category: "Nollywood",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/bWqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A mother's desperate search for her kidnapped daughter reveals dark family secrets and dangerous betrayals.",
        themes: "Family, Betrayal, Motherhood, Secrets, Survival",
        director: "Biodun Stephen",
        rating: 0,
        preview: "Blood & Water is a tense thriller that explores the lengths a mother will go to protect her family. The film unravels dark secrets as a kidnapping exposes hidden betrayals within a wealthy family. Its suspenseful narrative and strong performances keep viewers engaged."
    },
    {
        id: 310,
        title: "Mamba's Diamond",
        category: "Nollywood",
        year: 2023,
        image: "https://image.tmdb.org/t/p/w500/mMqLqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A group of thieves plan an elaborate heist to steal a legendary diamond from a heavily guarded vault.",
        themes: "Crime, Heist, Greed, Strategy, Consequences",
        director: "Tope Adebayo",
        rating: 0,
        preview: "Mamba's Diamond is a thrilling heist film that brings Nigerian cinema into the crime genre with style. The film follows a team of thieves planning an ambitious robbery while dealing with personal conflicts. Its tense plotting and unexpected twists make it an exciting addition to Nollywood."
    },
    // Sci-Fi - 10 more movies
    {
        id: 401,
        title: "The Matrix",
        category: "Sci-Fi",
        year: 1999,
        image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A hacker discovers reality is a simulation created by machines and joins a rebellion to free humanity.",
        themes: "Reality, Freedom, Technology, Destiny, Revolution",
        director: "The Wachowskis",
        rating: 0,
        preview: "The Matrix revolutionized science fiction cinema with its groundbreaking visual effects and philosophical depth. The film explores the nature of reality through a hacker who discovers the truth about existence. Its blend of action, philosophy, and innovative bullet-time effects changed cinema forever."
    },
    {
        id: 402,
        title: "Blade Runner 2049",
        category: "Sci-Fi",
        year: 2017,
        image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        description: "A young blade runner discovers a secret that could plunge society into chaos and searches for a former blade runner.",
        themes: "Identity, Humanity, Memory, Artificial Intelligence, Soul",
        director: "Denis Villeneuve",
        rating: 0,
        preview: "Blade Runner 2049 is a visually stunning sequel that expands on the original's themes while telling a compelling new story. The film explores what it means to be human through a replicant who discovers a mysterious secret. Its breathtaking cinematography and thoughtful narrative make it a sci-fi masterpiece."
    },
    {
        id: 403,
        title: "Arrival",
        category: "Sci-Fi",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/x2FJsf1trrI0QuoJixWdQMJspen.jpg",
        description: "A linguist is recruited to communicate with aliens who have landed on Earth and discovers their true purpose.",
        themes: "Communication, Time, Loss, Language, Destiny",
        director: "Denis Villeneuve",
        rating: 0,
        preview: "Arrival is an intelligent sci-fi that prioritizes communication over explosions. The film follows a linguist tasked with deciphering an alien language, leading to unexpected revelations about time and human connection. Its emotional depth and unique approach to first contact make it unforgettable."
    },
    {
        id: 404,
        title: "Inception",
        category: "Sci-Fi",
        year: 2010,
        image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        description: "A skilled thief who steals secrets from dreams is tasked with planting an idea in someone's subconscious.",
        themes: "Dreams, Reality, Guilt, Time, Obsession",
        director: "Christopher Nolan",
        rating: 0,
        preview: "Inception is a mind-bending heist film set within the architecture of dreams. Christopher Nolan crafts a complex narrative that operates on multiple dream levels while exploring themes of guilt and loss. Its spectacular visuals and intricate plotting reward multiple viewings."
    },
    {
        id: 405,
        title: "Dune",
        category: "Sci-Fi",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        description: "A young noble must navigate political intrigue and survival on a desert planet that produces the universe's most valuable substance.",
        themes: "Politics, Ecology, Destiny, Power, Survival",
        director: "Denis Villeneuve",
        rating: 0,
        preview: "Dune brings Frank Herbert's epic novel to life with stunning visuals and faithful storytelling. The film follows Paul Atreides as he navigates betrayal and destiny on the desert planet Arrakis. Its sweeping scope and environmental themes resonate strongly with modern audiences."
    },
    {
        id: 406,
        title: "Gravity",
        category: "Sci-Fi",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/j1834GJSjVrHQKBw8x4SJl8M4Qq.jpg",
        description: "Two astronauts struggle to survive after their shuttle is destroyed and they are left floating in space with no hope of rescue.",
        themes: "Survival, Isolation, Rebirth, Resilience, Space",
        director: "Alfonso Cuarón",
        rating: 0,
        preview: "Gravity is a visceral survival experience that places viewers directly in the void of space. The film follows an astronaut fighting to return to Earth after a catastrophic accident. Its technical achievements and emotional journey make it an unforgettable cinematic achievement."
    },
    {
        id: 407,
        title: "Ex Machina",
        category: "Sci-Fi",
        year: 2014,
        image: "https://image.tmdb.org/t/p/w500/9goPE2hMhpeCZHzx9yR1hVbOq3K.jpg",
        description: "A programmer is invited to evaluate an advanced AI and discovers the true nature of consciousness and manipulation.",
        themes: "Artificial Intelligence, Consciousness, Manipulation, Ethics, Humanity",
        director: "Alex Garland",
        rating: 0,
        preview: "Ex Machina is a tense psychological thriller that explores the boundaries of artificial intelligence. The film examines what happens when a programmer meets an AI that may be truly conscious. Its claustrophobic setting and philosophical questions create an unsettling viewing experience."
    },
    {
        id: 408,
        title: "The Martian",
        category: "Sci-Fi",
        year: 2015,
        image: "https://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
        description: "An astronaut is stranded on Mars and must use his ingenuity to survive until rescue is possible.",
        themes: "Survival, Science, Ingenuity, Hope, Problem-Solving",
        director: "Ridley Scott",
        rating: 0,
        preview: "The Martian is an uplifting survival story that celebrates human ingenuity and scientific problem-solving. The film follows an astronaut using his knowledge to survive on Mars while NASA works to bring him home. Its optimistic tone and humor make science exciting and accessible."
    },
    {
        id: 409,
        title: "Ad Astra",
        category: "Sci-Fi",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/xJUILBRgGP1wQQgJbYlBJvPtE5Y.jpg",
        description: "An astronaut travels to the outer reaches of the solar system to find his father who disappeared on a mission.",
        themes: "Father-Son Relationship, Isolation, Identity, Space, Emotional Distance",
        director: "James Gray",
        rating: 0,
        preview: "Ad Astra is a contemplative space drama that uses the cosmos to explore emotional distance between fathers and sons. The film follows an astronaut on a journey that becomes as much internal as external. Its stunning visuals and Brad Pitt's restrained performance create a meditative experience."
    },
    {
        id: 410,
        title: "Tenet",
        category: "Sci-Fi",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/yY76zq9xSuJ4nHG4N2E6XJrBiEa.jpg",
        description: "A secret agent manipulates time inversion to prevent World War III in this mind-bending thriller.",
        themes: "Time, Paradox, War, Manipulation, Destiny",
        director: "Christopher Nolan",
        rating: 0,
        preview: "Tenet is Christopher Nolan's most ambitious puzzle box, exploring time inversion through spectacular action sequences. The film challenges viewers to think differently about cause and effect. Its complex narrative and innovative visuals reward attention and repeat viewing."
    },
    // Action - 10 more movies
    {
        id: 501,
        title: "John Wick",
        category: "Action",
        year: 2014,
        image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        description: "A retired assassin is forced back into the criminal underworld after thieves steal his car and kill his dog.",
        themes: "Revenge, Grief, Loyalty, Honor, Violence",
        director: "Chad Stahelski",
        rating: 0,
        preview: "John Wick revitalized the action genre with its innovative choreography and world-building. The film follows a retired hitman seeking vengeance for the loss of his last connection to his wife. Its stylish gun-fu action and Keanu Reeves' committed performance launched a beloved franchise."
    },
    {
        id: 502,
        title: "Mad Max: Fury Road",
        category: "Action",
        year: 2015,
        image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a drifter.",
        themes: "Freedom, Survival, Feminism, Redemption, Tyranny",
        director: "George Miller",
        rating: 0,
        preview: "Mad Max: Fury Road is a breathtaking action masterpiece that proves practical effects still reign supreme. The film is essentially one long chase sequence through a desert wasteland, yet it tells a compelling story about liberation and redemption. Its feminist undertones and spectacular stunts earned it multiple Oscars."
    },
    {
        id: 503,
        title: "Die Hard",
        category: "Action",
        year: 1988,
        image: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBRB1QM675fPcEge.jpg",
        description: "A New York cop battles terrorists who have taken over a Los Angeles skyscraper during a Christmas party.",
        themes: "Heroism, Survival, Wit, Family, Resilience",
        director: "John McTiernan",
        rating: 0,
        preview: "Die Hard defined the modern action film and established Bruce Willis as an action star. The film's confined setting and vulnerable hero create tension throughout as an ordinary cop faces extraordinary circumstances. Its influence on action cinema remains undeniable decades after release."
    },
    {
        id: 504,
        title: "The Dark Knight",
        category: "Action",
        year: 2008,
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911BTUgMe1nNaD.jpg",
        description: "Batman faces the Joker, a criminal mastermind who seeks to create chaos in Gotham City.",
        themes: "Chaos vs Order, Morality, Heroism, Corruption, Sacrifice",
        director: "Christopher Nolan",
        rating: 0,
        preview: "The Dark Knight transcends the superhero genre to become a crime epic for the ages. Heath Ledger's iconic Joker performance creates a philosophical battle between order and chaos. Its exploration of moral compromise and heroism makes it one of cinema's greatest achievements."
    },
    {
        id: 505,
        title: "Mission: Impossible - Fallout",
        category: "Action",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
        description: "Ethan Hunt and his team race against time after a mission goes wrong and nuclear weapons are threatened.",
        themes: "Duty, Sacrifice, Trust, Consequences, Espionage",
        director: "Christopher McQuarrie",
        rating: 0,
        preview: "Fallout is widely considered the best Mission: Impossible film, featuring death-defying stunts and breakneck pacing. The film follows Ethan Hunt as he faces consequences of past decisions while preventing global catastrophe. Tom Cruise's commitment to practical stunts elevates every sequence."
    },
    {
        id: 506,
        title: "Gladiator",
        category: "Action",
        year: 2000,
        image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIwaCLYV.jpg",
        description: "A Roman general seeks revenge against the corrupt emperor who murdered his family and enslaved him.",
        themes: "Revenge, Honor, Justice, Loyalty, Redemption",
        director: "Ridley Scott",
        rating: 0,
        preview: "Gladiator is an epic historical drama that combines spectacle with deeply personal storytelling. The film follows a betrayed general fighting for justice in the colosseum while plotting revenge against an emperor. Russell Crowe's powerful performance and Hans Zimmer's score make it unforgettable."
    },
    {
        id: 507,
        title: "Top Gun: Maverick",
        category: "Action",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DGXUQ7s.jpg",
        description: "After decades of service, Maverick trains a new generation of pilots for a dangerous mission while confronting his past.",
        themes: "Legacy, Mentorship, Fear, Excellence, Redemption",
        director: "Joseph Kosinski",
        rating: 0,
        preview: "Top Gun: Maverick surpassed expectations by delivering a sequel that honors the original while standing on its own. The film explores aging, legacy, and letting go through spectacular aerial sequences. Tom Cruise's dedication to practical flying creates visceral action that must be seen on the biggest screen."
    },
    {
        id: 508,
        title: "The Raid",
        category: "Action",
        year: 2011,
        image: "https://image.tmdb.org/t/p/w500/jrW80pVLZieuKmJBLpTqfFmggAG.jpg",
        description: "A SWAT team becomes trapped in a building controlled by a ruthless crime lord and must fight to survive.",
        themes: "Survival, Violence, Brotherhood, Survival, Martial Arts",
        director: "Gareth Evans",
        rating: 0,
        preview: "The Raid redefined action cinema with its relentless martial arts choreography and minimal dialogue. The film follows a police team trapped in a crime lord's building, forcing them to fight floor by floor. Its brutal efficiency and innovative combat sequences influenced countless action films."
    },
    {
        id: 509,
        title: "Avengers: Endgame",
        category: "Action",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "The remaining Avengers assemble one final time to undo Thanos's destruction and restore balance to the universe.",
        themes: "Sacrifice, Teamwork, Loss, Hope, Heroism",
        director: "Anthony Russo, Joe Russo",
        rating: 0,
        preview: "Endgame is a monumental achievement in blockbuster filmmaking, concluding a 22-film saga. The film balances grief and hope as heroes face their greatest defeat and must find a way forward. Its emotional payoffs and spectacular final battle delivered a satisfying conclusion to the Infinity Saga."
    },
    {
        id: 510,
        title: "Terminator 2: Judgment Day",
        category: "Action",
        year: 1991,
        image: "https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5giwRhfjjmCOxF.jpg",
        description: "A cyborg is sent back in time to protect a boy who will lead humanity against machines in the future.",
        themes: "Fate, Technology, Family, Sacrifice, Future",
        director: "James Cameron",
        rating: 0,
        preview: "Terminator 2 is a rare sequel that surpasses the original through groundbreaking effects and emotional depth. The film explores destiny and choice through a protector cyborg learning humanity. Its revolutionary CGI and heartfelt story make it one of the greatest action films ever made."
    },
    {
        id: 18,
        title: "Fast & Furious",
        category: "Action",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/jnJFMTJfHNhVxMmAJqvFZy7jEjT.jpg",
        description: "An undercover cop infiltrates the world of illegal street racing and becomes torn between duty and loyalty.",
        themes: "Family, Loyalty, Speed, Crime, Redemption",
        director: "Rob Cohen",
        rating: 0,
        preview: "Fast & Furious launched a global franchise built on high-octane action and the theme of family. The film combines underground racing culture with heist elements, creating an adrenaline-fueled experience. Its emphasis on loyalty and found family resonated with audiences worldwide, spawning one of cinema's most successful franchises."
    },
    {
        id: 23,
        title: "F9: The Fast Saga",
        category: "Action",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
        description: "Dom Toretto faces his past when he must confront his estranged brother and a dangerous cipher seeking revenge.",
        themes: "Family, Redemption, Loyalty, Brotherhood, Forgiveness",
        director: "Justin Lin",
        rating: 0,
        preview: "F9: The Fast Saga takes the franchise to new heights with explosive action and emotional family drama. The film explores Dom's troubled past and introduces his brother Jakob, adding layers of betrayal and redemption. With jaw-dropping stunts and the series' signature emphasis on family, it pushes the boundaries of action cinema."
    },
    // Sci-Fi
    {
        id: 17,
        title: "Interstellar",
        category: "Sci-Fi",
        year: 2014,
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlZNvJI.jpg",
        description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        themes: "Time, Space, Love, Survival, Sacrifice",
        director: "Christopher Nolan",
        rating: 0,
        preview: "Interstellar is a visually stunning epic that explores the boundaries of human endurance and the power of love across time and space. Set in a dystopian future where Earth is becoming uninhabitable, the film follows astronauts as they search for a new home for humanity. Its scientific accuracy combined with emotional depth creates an unforgettable cinematic experience."
    },
    // Animation - 10 more movies
    {
        id: 601,
        title: "Toy Story",
        category: "Animation",
        year: 1995,
        image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPftKwF2p.jpg",
        description: "A cowboy doll feels threatened when a new space ranger toy arrives and becomes the favorite.",
        themes: "Friendship, Jealousy, Growing Up, Loyalty, Identity",
        director: "John Lasseter",
        rating: 0,
        preview: "Toy Story revolutionized animation as the first fully computer-animated feature film. The story explores friendship and jealousy through toys that come alive when humans aren't watching. Its heartfelt message about accepting change and finding your place resonates with all ages."
    },
    {
        id: 602,
        title: "Finding Nemo",
        category: "Animation",
        year: 2003,
        image: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1pOY7c8JhTNgT0HY.jpg",
        description: "A clownfish embarks on an epic journey across the ocean to find his son who was captured by divers.",
        themes: "Parenthood, Courage, Disability, Ocean, Letting Go",
        director: "Andrew Stanton",
        rating: 0,
        preview: "Finding Nemo is an underwater adventure that explores the bond between parent and child. The film follows an overprotective father learning to let go while his son discovers independence. Its stunning ocean visuals and emotional depth make it a Pixar masterpiece."
    },
    {
        id: 603,
        title: "The Lion King",
        category: "Animation",
        year: 1994,
        image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        description: "A young lion prince flees his kingdom after his father's murder, only to return and claim his rightful place.",
        themes: "Responsibility, Legacy, Guilt, Identity, Leadership",
        director: "Roger Allers, Rob Minkoff",
        rating: 0,
        preview: "The Lion King is Disney's most Shakespearean film, telling a story of guilt, redemption, and destiny. The young Simba's journey from carefree cub to reluctant king mirrors Hamlet's arc. Its unforgettable music by Elton John and Hans Zimmer's score make it timeless."
    },
    {
        id: 604,
        title: "Frozen",
        category: "Animation",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/kgwjIb2JDIDhNBOXPBR8dbRSCHT.jpg",
        description: "A princess sets out to find her sister whose icy powers have trapped their kingdom in eternal winter.",
        themes: "Sisterhood, Self-Acceptance, Love, Fear, Identity",
        director: "Chris Buck, Jennifer Lee",
        rating: 0,
        preview: "Frozen redefined Disney princess narratives by focusing on sisterly love rather than romantic love. The film explores fear, self-acceptance, and the power of embracing who you are. 'Let It Go' became an anthem for anyone who has ever felt different."
    },
    {
        id: 605,
        title: "Coco",
        category: "Animation",
        year: 2017,
        image: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt8.jpg",
        description: "A boy enters the Land of the Dead to discover the truth about his family's history with music.",
        themes: "Family, Memory, Music, Death, Mexican Culture",
        director: "Lee Unkrich",
        rating: 0,
        preview: "Coco is a vibrant celebration of Mexican culture and the Day of the Dead. The film explores how memory keeps our loved ones alive even after death. Its stunning visuals, original music, and emotional family story make it one of Pixar's most beautiful films."
    },
    {
        id: 606,
        title: "Inside Out",
        category: "Animation",
        year: 2015,
        image: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKNLpEiVpTt1.jpg",
        description: "A young girl's emotions come to life inside her mind as she struggles with a major move to a new city.",
        themes: "Emotions, Growing Up, Mental Health, Memory, Change",
        director: "Pete Docter",
        rating: 0,
        preview: "Inside Out is a brilliant exploration of human psychology through the lens of personified emotions. The film shows how sadness is just as important as joy in shaping who we are. Its creative approach to mental health makes complex psychology accessible to children and adults."
    },
    {
        id: 607,
        title: "Shrek",
        category: "Animation",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/dyhaB29AICAPmlKp3NrIiITl1OE.jpg",
        description: "An ogre embarks on a quest to rescue a princess with the help of a talking donkey to reclaim his swamp.",
        themes: "Self-Acceptance, Prejudice, Fairy Tales, Friendship, Identity",
        director: "Andrew Adamson, Vicky Jenson",
        rating: 0,
        preview: "Shrek subverted fairy tale conventions with irreverent humor and genuine heart. The film challenges beauty standards and prejudices while telling a story about finding where you belong. Its pop culture references and Eddie Murphy's Donkey made it an instant classic."
    },
    {
        id: 608,
        title: "Spider-Man: Into the Spider-Verse",
        category: "Animation",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cHAGAOmKw.jpg",
        description: "A teenager gains spider powers and meets alternate versions of Spider-Man from different dimensions.",
        themes: "Identity, Responsibility, Diversity, Mentorship, Heroism",
        director: "Bob Persichetti, Peter Ramsey",
        rating: 0,
        preview: "Into the Spider-Verse revolutionized animation with its comic book-inspired visual style. The film explores what it means to be a hero through multiple Spider-People from different backgrounds. Its message that anyone can wear the mask resonated powerfully with diverse audiences."
    },
    {
        id: 609,
        title: "Ratatouille",
        category: "Animation",
        year: 2007,
        image: "https://image.tmdb.org/t/p/w500/npHNjldbeTHdKKw28bJKs7lzqzj.jpg",
        description: "A rat with an exceptional sense of taste dreams of becoming a chef in a prestigious Parisian restaurant.",
        themes: "Passion, Dreams, Class, Art, Perseverance",
        director: "Brad Bird",
        rating: 0,
        preview: "Ratatouille is Pixar's love letter to cooking and artistic passion. The film explores how talent can come from the most unexpected places and how art transcends social boundaries. Its celebration of cooking as art form and the famous 'anyone can cook' philosophy make it inspiring."
    },
    {
        id: 610,
        title: "Up",
        category: "Animation",
        year: 2009,
        image: "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOT17KZ0pRe.jpg",
        description: "An elderly man ties thousands of balloons to his house to fulfill a dream, accidentally bringing a young stowaway.",
        themes: "Grief, Adventure, Intergenerational Friendship, Dreams, Letting Go",
        director: "Pete Docter",
        rating: 0,
        preview: "Up's opening sequence is one of cinema's most emotional montages, telling a lifetime of love without words. The film explores grief and new beginnings through an unlikely friendship between a grumpy old man and an enthusiastic boy scout. Its adventure is as much emotional as physical."
    },
    // Action Fantasy
    {
        id: 20,
        title: "KPop Demon Hunters",
        category: "Action Fantasy",
        year: 2025,
        image: "https://image.tmdb.org/t/p/w500/3bOG8HfMsMdbEByRlq6MnqvN1rD.jpg",
        description: "A world-famous K-pop girl group must use their talents and fighting skills to battle demons threatening humanity.",
        themes: "Music, Friendship, Good vs Evil, Empowerment, Teamwork",
        director: "Maggie Kang, Chris Appelhans",
        rating: 0,
        preview: "KPop Demon Hunters is a genre-blending animated musical that combines K-pop culture with supernatural action. The film follows a popular girl group who secretly fights demons, balancing their celebrity lives with their sacred duties. Its vibrant animation, catchy soundtrack, and unique premise create an entertaining and empowering experience."
    },
    {
        id: 19,
        title: "Moana",
        category: "Animation",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/4JeejGugONQpJAsPQVTLwQ0mVhH.jpg",
        description: "A spirited Polynesian teenager sails across the Pacific to save her island home with the help of demigod Maui.",
        themes: "Identity, Courage, Heritage, Self-Discovery, Nature",
        director: "Ron Clements, John Musker",
        rating: 0,
        preview: "Moana is a vibrant animated adventure that celebrates Polynesian culture and the power of following your calling. The film features stunning ocean animation, catchy music by Lin-Manuel Miranda, and a empowering message about finding your own path. Its cultural authenticity and universal themes made it a beloved Disney classic."
    },
    {
        id: 701,
        title: "Doctor Strange in the Multiverse of Madness",
        category: "Action Fantasy",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiKbS.jpg",
        description: "Doctor Strange travels through the multiverse to protect a teenager from a powerful witch seeking her powers.",
        themes: "Multiverse, Magic, Consequences, Power, Sacrifice",
        director: "Sam Raimi",
        rating: 0,
        preview: "Multiverse of Madness brings Sam Raimi's horror sensibilities to the Marvel universe. The film explores the consequences of tampering with reality through spectacular multiverse sequences. Its darker tone and creative magic make it stand out in the superhero genre."
    },
    {
        id: 702,
        title: "Pacific Rim",
        category: "Action Fantasy",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/8KJByjBFZwkJvZvFqJJkKsLbMmP.jpg",
        description: "Giant robots piloted by humans battle monstrous aliens emerging from a portal beneath the ocean.",
        themes: "Teamwork, Technology vs Nature, Heroism, Unity, Kaiju",
        director: "Guillermo del Toro",
        rating: 0,
        preview: "Pacific Rim is Guillermo del Toro's love letter to kaiju and mecha genres. The film delivers spectacular giant robot battles while exploring the bond required to pilot these machines. Its visual spectacle and celebration of global cooperation make it thrilling entertainment."
    },
    {
        id: 703,
        title: "Stardust",
        category: "Action Fantasy",
        year: 2007,
        image: "https://image.tmdb.org/t/p/w500/zSQqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A young man crosses into a magical realm to retrieve a fallen star for his beloved, discovering adventure and true love.",
        themes: "Love, Magic, Adventure, Destiny, Self-Discovery",
        director: "Matthew Vaughn",
        rating: 0,
        preview: "Stardust is a charming fairy tale adventure that captures the magic of classic fantasy literature. The film follows an ordinary young man who discovers extraordinary courage and love. Its whimsical tone, memorable characters, and Robert De Niro's scene-stealing performance make it delightful."
    },
    {
        id: 704,
        title: "The Wheel of Time: Season One",
        category: "Action Fantasy",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/wpTJmLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A powerful woman leads a group of young people who may hold the key to saving or destroying the world.",
        themes: "Destiny, Power, Prophecy, Good vs Evil, Leadership",
        director: "Uta Briesewitz",
        rating: 0,
        preview: "The Wheel of Time brings Robert Jordan's epic fantasy series to life with stunning world-building. The series explores destiny and power through characters discovering their magical abilities. Its complex mythology and diverse cast create an immersive fantasy experience."
    },
    {
        id: 705,
        title: "Shadow and Bone",
        category: "Action Fantasy",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/sHBoLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A young soldier discovers a power that could unite her war-torn world and destroy the darkness threatening it.",
        themes: "Power, War, Identity, Destiny, Oppression",
        director: "Eric Heisserer",
        rating: 0,
        preview: "Shadow and Bone combines fantasy and heist elements in a richly imagined world divided by darkness. The series follows a young woman discovering extraordinary power while navigating political intrigue. Its dual storylines and compelling characters create an engaging fantasy epic."
    },
    // Fantasy
    {
        id: 13,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        category: "Fantasy",
        year: 2001,
        director: "Peter Jackson",
        rating: 0,
        preview: "The Fellowship of the Ring is an epic fantasy adventure that redefined the genre. The film explores themes of power, corruption, and the strength found in unity. Its groundbreaking visual effects and rich world-building created a new standard for fantasy cinema."
    },
    {
        id: 14,
        title: "Harry Potter and the Sorcerer's Stone",
        category: "Fantasy",
        year: 2001,
        image: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
        description: "A young boy discovers he is a wizard and begins his magical education at Hogwarts School.",
        themes: "Magic, Friendship, Identity, Good vs Evil",
        director: "Chris Columbus",
        rating: 0,
        preview: "The Sorcerer's Stone introduces audiences to the magical world of Harry Potter. The film captures the wonder of discovering hidden abilities and the importance of choosing your own path. Its enchanting world-building launched one of cinema's most beloved franchises."
    },
    {
        id: 15,
        title: "Pan's Labyrinth",
        category: "Fantasy",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/9jOJ6pPqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A young girl escapes into a dark fairy tale world while facing the horrors of post-Civil War Spain.",
        themes: "Fantasy vs Reality, Innocence, War, Rebellion",
        director: "Guillermo del Toro",
        rating: 0,
        preview: "Pan's Labyrinth masterfully blends dark fantasy with historical drama. The film uses fairy tale elements to explore the horrors of war and the power of imagination. Its haunting visuals and emotional depth make it a fantasy masterpiece."
    },
    {
        id: 16,
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        category: "Fantasy",
        year: 2005,
        image: "https://image.tmdb.org/t/p/w500/iEuaOQdVqLqLqLqLqLqLqLqLqL.jpg",
        description: "Four siblings discover a magical land through a wardrobe and must help defeat an evil witch.",
        themes: "Faith, Courage, Sacrifice, Family",
        director: "Andrew Adamson",
        rating: 0,
        preview: "The Lion, the Witch and the Wardrobe brings C.S. Lewis's beloved novel to life. The film explores themes of faith, sacrifice, and the battle between good and evil through the eyes of children. Its magical world continues to captivate audiences of all ages."
    },
    {
        id: 801,
        title: "The Hobbit: An Unexpected Journey",
        category: "Fantasy",
        year: 2012,
        image: "https://image.tmdb.org/t/p/w500/yHA9eli3Rq3rCKZxqZdrtSPHNzl.jpg",
        description: "A reluctant hobbit joins a quest to reclaim a dwarf kingdom from a fearsome dragon.",
        themes: "Adventure, Courage, Home, Greed, Friendship",
        director: "Peter Jackson",
        rating: 0,
        preview: "The Hobbit brings Tolkien's lighter tale to the screen with spectacular world-building and humor. The film follows Bilbo Baggins as he discovers courage he never knew he had. Its connection to the Lord of the Rings universe adds depth to Middle-earth lore."
    },
    {
        id: 802,
        title: "The Shape of Water",
        category: "Fantasy",
        year: 2017,
        image: "https://image.tmdb.org/t/p/w500/9ZZGxvqHqLqLqLqLqLqLqLqLq.jpg",
        description: "A mute woman falls in love with an amphibious creature held in a secret government laboratory.",
        themes: "Love, Otherness, Cold War, Acceptance, Beauty",
        director: "Guillermo del Toro",
        rating: 0,
        preview: "The Shape of Water is a dark fairy tale about love transcending boundaries. The film explores acceptance and otherness through an unconventional romance between a woman and a creature. Its beautiful cinematography and unique story earned it the Academy Award for Best Picture."
    },
    {
        id: 803,
        title: "Big Fish",
        category: "Fantasy",
        year: 2003,
        image: "https://image.tmdb.org/t/p/w500/tjKvw2cKqLqLqLqLqLqLqLqLq.jpg",
        description: "A son tries to separate fact from fiction in his father's larger-than-life stories.",
        themes: "Storytelling, Father-Son Relationship, Truth, Imagination, Legacy",
        director: "Tim Burton",
        rating: 0,
        preview: "Big Fish is Tim Burton's most heartfelt film about the power of storytelling. The movie explores the relationship between a dying father and his skeptical son through fantastical flashbacks. Its emotional ending and celebration of imagination make it deeply moving."
    },
    {
        id: 804,
        title: "The Green Knight",
        category: "Fantasy",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/gGKqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A young knight embarks on a quest to confront the Green Knight and prove his honor.",
        themes: "Honor, Destiny, Mortality, Courage, Myth",
        director: "David Lowery",
        rating: 0,
        preview: "The Green Knight is an atmospheric retelling of the Arthurian legend that prioritizes mood over action. The film explores honor and mortality through a young knight's journey of self-discovery. Its stunning visuals and Dev Patel's performance create a meditative fantasy experience."
    },
    {
        id: 805,
        title: "The NeverEnding Story",
        category: "Fantasy",
        year: 1984,
        image: "https://image.tmdb.org/t/p/w500/nNqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A young boy reads a magical book that transports him to a fantasy world that needs saving.",
        themes: "Imagination, Courage, Storytelling, Destiny, Childhood",
        director: "Wolfgang Petersen",
        rating: 0,
        preview: "The NeverEnding Story captures the magic of reading and imagination for a generation. The film follows a boy who becomes part of the fantasy world he's reading about. Its practical effects and memorable characters like Falkor make it a beloved childhood classic."
    },
    {
        id: 806,
        title: "Willow",
        category: "Fantasy",
        year: 1988,
        image: "https://image.tmdb.org/t/p/w500/wIqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A reluctant sorcerer must protect a special baby from an evil queen in a medieval fantasy world.",
        themes: "Heroism, Magic, Destiny, Good vs Evil, Courage",
        director: "Ron Howard",
        rating: 0,
        preview: "Willow is a charming fantasy adventure that predates the modern blockbuster formula. The film follows an unlikely hero on a quest to protect a child from dark forces. Its practical effects and Val Kilmer's charismatic performance make it an overlooked gem."
    },
    {
        id: 807,
        title: "The Princess Bride",
        category: "Fantasy",
        year: 1987,
        image: "https://image.tmdb.org/t/p/w500/pBqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A grandfather reads a story of true love, adventure, and romance to his sick grandson.",
        themes: "True Love, Adventure, Storytelling, Humor, Family",
        director: "Rob Reiner",
        rating: 0,
        preview: "The Princess Bride is a perfect fairy tale that parodies and celebrates the genre simultaneously. The film combines sword fights, true love, and memorable characters into an endlessly entertaining adventure. Its quotable dialogue and warm framing device make it timeless."
    },
    {
        id: 808,
        title: "Eragon",
        category: "Fantasy",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/eRqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A farm boy discovers a dragon egg and becomes the last Dragon Rider destined to fight an evil king.",
        themes: "Destiny, Power, Good vs Evil, Mentorship, Growth",
        director: "Stefen Fangmeier",
        rating: 0,
        preview: "Eragon brings Christopher Paolini's beloved novel to life with impressive dragon effects and fantasy world-building. The film follows a young hero's journey from farm boy to Dragon Rider. Despite mixed reviews, its story of destiny and courage resonates with fantasy fans."
    },
    {
        id: 809,
        title: "The Golden Compass",
        category: "Fantasy",
        year: 2007,
        image: "https://image.tmdb.org/t/p/w500/gCqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A young girl embarks on a dangerous journey to the far North to rescue her friend and uncover dark secrets.",
        themes: "Religion, Truth, Courage, Childhood, Authority",
        director: "Chris Weitz",
        rating: 0,
        preview: "The Golden Compass adapts Philip Pullman's complex fantasy novel with stunning visual effects. The film explores themes of authority and truth through a young girl's journey into a dangerous world. Its rich world-building and Nicole Kidman's performance add depth."
    },
    {
        id: 810,
        title: "Percy Jackson: The Lightning Thief",
        category: "Fantasy",
        year: 2010,
        image: "https://image.tmdb.org/t/p/w500/pPqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A teenager discovers he is the son of a Greek god and must prevent a war among the gods.",
        themes: "Mythology, Identity, Friendship, Destiny, Family",
        director: "Chris Columbus",
        rating: 0,
        preview: "Percy Jackson brings Greek mythology into the modern world through a relatable teenage hero. The film combines adventure, humor, and mythology as Percy discovers his divine heritage. Its celebration of difference and ADHD/dyslexia as godly traits is empowering."
    },
    // Thriller - 10 more movies
    {
        id: 21,
        title: "Beast",
        category: "Thriller",
        year: 2022,
        image: "https://image.tmdb.org/t/p/w500/xtn9iKzqJeOgHbFLZfyFq8m0qKE.jpg",
        description: "A father and his two teenage daughters find themselves hunted by a massive rogue lion in the South African wilderness.",
        themes: "Survival, Family, Nature's Fury, Protection, Fear",
        director: "Baltasar Kormákur",
        rating: 0,
        preview: "Beast is a relentless survival thriller that pits humans against nature's deadliest predator. Idris Elba stars as a grieving father who must protect his daughters from a relentless lion. The film's minimal cast and isolated setting create an intense, claustrophobic experience that keeps audiences on the edge of their seats."
    },
    // Comedy Drama
    {
        id: 22,
        title: "3 Idiots",
        category: "Comedy Drama",
        year: 2009,
        image: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z85ew.jpg",
        description: "Two friends search for their long-lost companion while reflecting on their college days and the impact of an unconventional student.",
        themes: "Education, Friendship, Passion vs Pressure, Success, Innovation",
        director: "Rajkumar Hirani",
        rating: 0,
        preview: "3 Idiots is a beloved Indian film that critiques the pressures of the education system while celebrating the power of genuine curiosity and friendship. The film blends humor with powerful social commentary, encouraging viewers to pursue excellence rather than success. Its message resonated globally, making it one of the highest-grossing Indian films of all time."
    },
    {
        id: 1001,
        title: "The Hangover",
        category: "Comedy Drama",
        year: 2009,
        image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxjVTLPBWRCBJBqL.jpg",
        description: "Three friends wake up from a bachelor party with no memory and the groom missing.",
        themes: "Friendship, Responsibility, Comedy, Chaos, Brotherhood",
        director: "Todd Phillips",
        rating: 0,
        preview: "The Hangover became a cultural phenomenon with its simple premise executed perfectly. The film follows friends retracing their steps after a wild Vegas bachelor party. Its mystery structure and outrageous reveals make it endlessly rewatchable."
    },
    {
        id: 1002,
        title: "Good Will Hunting",
        category: "Comedy Drama",
        year: 1997,
        image: "https://image.tmdb.org/t/p/w500/bABCBKYBK7A5G1x0FzmSQwLqLqL.jpg",
        description: "A janitor at M.I.T. has a gift for mathematics but needs help from a psychologist to find direction.",
        themes: "Potential, Trauma, Class, Mentorship, Self-Discovery",
        director: "Gus Van Sant",
        rating: 0,
        preview: "Good Will Hunting is a deeply moving story about wasted potential and the courage to change. The film explores how trauma and class hold back a mathematical genius. Robin Williams' supporting performance and Matt Damon's script earned them Oscars."
    },
    {
        id: 1003,
        title: "The Intouchables",
        category: "Comedy Drama",
        year: 2011,
        image: "https://image.tmdb.org/t/p/w500/4mFsPqDqLqLqLqLqLqLqLqLqL.jpg",
        description: "A wealthy quadriplegic hires a young man from the projects to be his caregiver.",
        themes: "Friendship, Disability, Class, Humor, Humanity",
        director: "Olivier Nakache, Éric Toledano",
        rating: 0,
        preview: "The Intouchables is a heartwarming French film about an unlikely friendship that transforms both lives. The true story explores how humor and honesty bridge class and cultural divides. Its joy and warmth made it one of the highest-grossing foreign films in the U.S."
    },
    {
        id: 1004,
        title: "Little Miss Sunshine",
        category: "Comedy Drama",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/9DqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A dysfunctional family drives across the country so their daughter can compete in a beauty pageant.",
        themes: "Family, Dreams, Failure, Support, Individuality",
        director: "Jonathan Dayton, Valerie Faris",
        rating: 0,
        preview: "Little Miss Sunshine is an indie gem that celebrates family dysfunction and unconditional love. The road trip brings together characters each dealing with their own failures. Its message that winning isn't everything resonates deeply."
    },
    {
        id: 1005,
        title: "The Grand Budapest Hotel",
        category: "Comedy Drama",
        year: 2014,
        image: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWVrrWgp.jpg",
        description: "The adventures of a legendary concierge at a famous European hotel and his loyal protégé.",
        themes: "Friendship, Nostalgia, War, Hospitality, Elegance",
        director: "Wes Anderson",
        rating: 0,
        preview: "The Grand Budapest Hotel is Wes Anderson at his most visually stunning and narratively engaging. The film explores European elegance between the wars through a concierge and his lobby boy. Its meticulous design and dark humor create a unique cinematic experience."
    },
    {
        id: 1006,
        title: "Juno",
        category: "Comedy Drama",
        year: 2007,
        image: "https://image.tmdb.org/t/p/w500/zCqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A pregnant teenager navigates high school and unplanned pregnancy with her signature wit.",
        themes: "Pregnancy, Growing Up, Family, Responsibility, Love",
        director: "Jason Reitman",
        rating: 0,
        preview: "Juno surprised audiences with its sharp dialogue and mature handling of teen pregnancy. The film follows a teenager whose wit masks deep vulnerability. Ellen Page's breakout performance and Diablo Cody's Oscar-winning script make it memorable."
    },
    {
        id: 1007,
        title: "The Devil Wears Prada",
        category: "Comedy Drama",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/8912LqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A young journalist takes a job at a fashion magazine and struggles to balance her values with demanding expectations.",
        themes: "Ambition, Identity, Fashion, Work-Life Balance, Integrity",
        director: "David Frankel",
        rating: 0,
        preview: "The Devil Wears Prada is a workplace comedy-drama about finding yourself while losing yourself. The film explores the cost of ambition through a young woman working for a ruthless editor. Meryl Streep's Miranda is iconic, and the fashion world fascination is irresistible."
    },
    {
        id: 1008,
        title: "About Time",
        category: "Comedy Drama",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/aBqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A young man discovers he can travel in time and uses it to improve his life and find love.",
        themes: "Time, Love, Family, Appreciation, Life",
        director: "Richard Curtis",
        rating: 0,
        preview: "About Time is a romantic comedy with a deeper message about appreciating every day. The film uses time travel not for adventure but to explore how we live our lives. Its emotional ending about living each day as if it's the last is deeply moving."
    },
    {
        id: 1009,
        title: "School of Rock",
        category: "Comedy Drama",
        year: 2003,
        image: "https://image.tmdb.org/t/p/w500/sSqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A fake substitute teacher forms a band of elementary school students to compete in a battle of the bands.",
        themes: "Music, Education, Passion, Rebellion, Self-Expression",
        director: "Richard Linklater",
        rating: 0,
        preview: "School of Rock is Jack Black at his most energetic and endearing. The film celebrates music education and self-expression through kids discovering their talents. Its infectious enthusiasm and actual musical performances make it endlessly entertaining."
    },
    {
        id: 1010,
        title: "Forrest Gump",
        category: "Comedy Drama",
        year: 1994,
        image: "https://image.tmdb.org/t/p/w500/fSSqLqLqLqLqLqLqLqLqLqLqL.jpg",
        description: "A man with low IQ inadvertently influences several defining historical events while searching for his true love.",
        themes: "Love, Destiny, American History, Innocence, Perseverance",
        director: "Robert Zemeckis",
        rating: 0,
        preview: "Forrest Gump is an American epic that combines humor, heart, and historical fiction. The film follows a simple man who accomplishes extraordinary things through perseverance and love. Tom Hanks' iconic performance and the film's emotional depth make it a timeless classic."
    },
    // Documentary - 10 more movies
    {
        id: 23,
        title: "F9: The Fast Saga",
        category: "Action",
        year: 2021,
        image: "https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
        description: "Dom Toretto faces his past when he must confront his estranged brother and a dangerous cipher seeking revenge.",
        themes: "Family, Redemption, Loyalty, Brotherhood, Forgiveness",
        director: "Justin Lin",
        rating: 0,
        preview: "F9: The Fast Saga takes the franchise to new heights with explosive action and emotional family drama. The film explores Dom's troubled past and introduces his brother Jakob, adding layers of betrayal and redemption. With jaw-dropping stunts and the series' signature emphasis on family, it pushes the boundaries of action cinema."
    },
    // Documentary
    {
        id: 24,
        title: "Styles: On Earth",
        category: "Documentary",
        year: 2024,
        image: "https://image.tmdb.org/t/p/w500/placeholder.jpg",
        description: "A documentary exploring the intersection of fashion, culture, and personal identity across diverse global communities.",
        themes: "Fashion, Culture, Identity, Global Perspectives, Self-Expression",
        director: "Various",
        rating: 0,
        preview: "Styles: On Earth takes viewers on a visual journey through the world's most fascinating fashion cultures and personal style expressions. The documentary examines how clothing shapes identity and reflects cultural values across different societies. Its celebration of diversity and creativity offers a fresh perspective on how fashion connects humanity."
    },
    {
        id: 1101,
        title: "Free Solo",
        category: "Documentary",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/v4QfKZqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Rock climber Alex Honnold attempts to scale El Capitan without ropes in this breathtaking documentary.",
        themes: "Fear, Excellence, Risk, Achievement, Nature",
        director: "Jimmy Chin, Elizabeth Chai Vasarhelyi",
        rating: 0,
        preview: "Free Solo is a nail-biting documentary that pushes the boundaries of human achievement. The film follows Alex Honnold's preparation for an impossible climb while exploring the psychology of risk. Its tension and beauty make it an unforgettable viewing experience."
    },
    {
        id: 1102,
        title: "13th",
        category: "Documentary",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/sGqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "An examination of the U.S. prison system and how it reveals the nation's history of racial inequality.",
        themes: "Justice, Race, Incarceration, History, Inequality",
        director: "Ava DuVernay",
        rating: 0,
        preview: "13th is a powerful documentary that exposes the intersection of race and the American justice system. Ava DuVernay traces the history of racial inequality from slavery to mass incarceration. Its eye-opening analysis and urgent message make it essential viewing."
    },
    {
        id: 1103,
        title: "Won't You Be My Neighbor?",
        category: "Documentary",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/wNqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "An intimate look at Fred Rogers and his enduring legacy as America's favorite neighbor.",
        themes: "Kindness, Childhood, Education, Empathy, Legacy",
        director: "Morgan Neville",
        rating: 0,
        preview: "Won't You Be My Neighbor? is a heartwarming tribute to Fred Rogers and his radical kindness. The documentary explores how Mr. Rogers revolutionized children's television through empathy and honesty. Its emotional impact reminds us why he remains beloved."
    },
    {
        id: 1104,
        title: "The Social Dilemma",
        category: "Documentary",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/sDqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Tech experts sound the alarm on the dangerous impact of social media on society and mental health.",
        themes: "Technology, Social Media, Mental Health, Democracy, Privacy",
        director: "Jeff Orlowski",
        rating: 0,
        preview: "The Social Dilemma is a wake-up call about the hidden dangers of social media technology. Former tech insiders reveal how platforms are designed to manipulate behavior. Its warnings about democracy and mental health sparked global conversations."
    },
    {
        id: 1105,
        title: "March of the Penguins",
        category: "Documentary",
        year: 2005,
        image: "https://image.tmdb.org/t/p/w500/mPqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Emperor penguins journey hundreds of miles to breeding grounds in one of nature's most difficult treks.",
        themes: "Nature, Survival, Family, Perseverance, Antarctica",
        director: "Luc Jacquet",
        rating: 0,
        preview: "March of the Penguins is a stunning nature documentary that reveals the incredible journey of emperor penguins. The film captures the harsh beauty of Antarctica through the penguins' annual breeding cycle. Its Oscar-winning cinematography and Morgan Freeman's narration make it magical."
    },
    {
        id: 1106,
        title: "Searching for Sugar Man",
        category: "Documentary",
        year: 2012,
        image: "https://image.tmdb.org/t/p/w500/sRqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Two fans set out to discover what happened to their musical hero who mysteriously disappeared decades ago.",
        themes: "Music, Mystery, Fame, Identity, South Africa",
        director: "Malik Bendjelloul",
        rating: 0,
        preview: "Searching for Sugar Man is an incredible true story about music, mystery, and unexpected fame. The documentary follows the search for Rodriguez, a forgotten American musician who became a legend in apartheid South Africa. Its unbelievable twists make it unforgettable."
    },
    {
        id: 1107,
        title: "Icarus",
        category: "Documentary",
        year: 2017,
        image: "https://image.tmdb.org/t/p/w500/iCqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A filmmaker accidentally uncovers a massive international doping scandal involving Russia.",
        themes: "Doping, Corruption, Sports, Russia, Investigation",
        director: "Bryan Fogel",
        rating: 0,
        preview: "Icarus began as a personal experiment and became an international scandal. The documentary exposes state-sponsored doping in Russia through accidental discovery. Its Oscar win and political impact show how documentaries can change the world."
    },
    {
        id: 1108,
        title: "My Octopus Teacher",
        category: "Documentary",
        year: 2020,
        image: "https://image.tmdb.org/t/p/w500/mOqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A filmmaker forms an unusual friendship with an octopus in a South African kelp forest.",
        themes: "Nature, Connection, Mortality, Ocean, Healing",
        director: "Pippa Ehrlich, James Reed",
        rating: 0,
        preview: "My Octopus Teacher is a meditation on connection and mortality through an unlikely friendship. The film follows a man who finds healing through observing an octopus in her natural habitat. Its emotional depth and stunning underwater photography won it the Oscar."
    },
    {
        id: 1109,
        title: "Blackfish",
        category: "Documentary",
        year: 2013,
        image: "https://image.tmdb.org/t/p/w500/bFqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "The story of Tilikum, a captive orca that killed three people, and the ethics of keeping animals in captivity.",
        themes: "Captivity, Ethics, Animals, Corporate Responsibility, Tragedy",
        director: "Gabriela Cowperthwaite",
        rating: 0,
        preview: "Blackfish is a groundbreaking documentary that changed public perception about SeaWorld and captive orcas. The film examines the tragedy of Tilikum through former trainers and footage. Its impact on animal welfare and corporate practices demonstrates documentary power."
    },
    {
        id: 1110,
        title: "Planet Earth II",
        category: "Documentary",
        year: 2016,
        image: "https://image.tmdb.org/t/p/w500/pE qLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "David Attenborough returns with stunning footage of wildlife and natural wonders from around the world.",
        themes: "Nature, Wildlife, Planet Earth, Conservation, Beauty",
        director: "Various",
        rating: 0,
        preview: "Planet Earth II is a visual masterpiece that showcases the natural world's incredible diversity. The documentary uses cutting-edge technology to capture behavior never before filmed. David Attenborough's narration and Hans Zimmer's score create an immersive experience."
    },
    // Thriller - adding more 10 movies  
    {
        id: 911,
        title: "Se7en",
        category: "Thriller",
        year: 1995,
        image: "https://image.tmdb.org/t/p/w500/s7qLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
        themes: "Sin, Morality, Evil, Investigation, Despair",
        director: "David Fincher",
        rating: 0,
        preview: "Se7en is a dark masterpiece that redefined the serial killer thriller. The film follows two detectives through a city consumed by moral decay as they hunt a methodical killer. Its shocking ending and atmospheric dread make it unforgettable."
    },
    {
        id: 912,
        title: "The Usual Suspects",
        category: "Thriller",
        year: 1995,
        image: "https://image.tmdb.org/t/p/w500/uS qLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A survivor tells the twisted story of how a group of criminals was brought together for a heist.",
        themes: "Deception, Identity, Crime, Manipulation, Truth",
        director: "Bryan Singer",
        rating: 0,
        preview: "The Usual Suspects is a twisty thriller that keeps audiences guessing until its iconic reveal. The film's unreliable narrator and layered storytelling create a puzzle box narrative. Kevin Spacey's Oscar-winning performance anchors this clever thriller."
    },
    {
        id: 913,
        title: "Memories of Murder",
        category: "Thriller",
        year: 2003,
        image: "https://image.tmdb.org/t/p/w500/mMqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Detectives in 1980s Korea struggle to catch a serial killer despite their best efforts.",
        themes: "Justice, Frustration, Corruption, History, Investigation",
        director: "Bong Joon-ho",
        rating: 0,
        preview: "Memories of Murder is Bong Joon-ho's masterpiece about the limits of justice and human fallibility. The film follows frustrated detectives hunting Korea's first serial killer. Its blend of humor and darkness and its real-life basis make it deeply affecting."
    },
    {
        id: 914,
        title: "The Prestige",
        category: "Thriller",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/pRqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "Two rival magicians engage in a dangerous competition to outdo each other with increasingly elaborate tricks.",
        themes: "Obsession, Rivalry, Sacrifice, Secrets, Illusion",
        director: "Christopher Nolan",
        rating: 0,
        preview: "The Prestige is a thriller about obsession and the cost of greatness disguised as a period mystery. The film follows two magicians whose rivalry consumes their lives. Its twist ending and exploration of sacrifice make it one of Nolan's best."
    },
    {
        id: 915,
        title: "Memento",
        category: "Thriller",
        year: 2000,
        image: "https://image.tmdb.org/t/p/w500/mMqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A man with short-term memory loss uses notes and tattoos to hunt for his wife's killer.",
        themes: "Memory, Identity, Revenge, Time, Truth",
        director: "Christopher Nolan",
        rating: 0,
        preview: "Memento revolutionized narrative structure in cinema with its backward storytelling. The film forces viewers to experience the protagonist's confusion through its unique structure. Its exploration of memory and truth makes it a modern thriller classic."
    },
    {
        id: 916,
        title: "The Departed",
        category: "Thriller",
        year: 2006,
        image: "https://image.tmdb.org/t/p/w500/dDqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "An undercover cop and a mole in the police force try to identify each other while infiltrating an Irish gang.",
        themes: "Identity, Loyalty, Betrayal, Crime, Corruption",
        director: "Martin Scorsese",
        rating: 0,
        preview: "The Departed is Scorsese's tense thriller about identity and loyalty in the criminal underworld. The cat-and-mouse game between an undercover cop and a police mole creates unbearable tension. Its ensemble cast and Boston setting make it gripping."
    },
    {
        id: 917,
        title: "Parasite",
        category: "Thriller",
        year: 2019,
        image: "https://image.tmdb.org/t/p/w500/pPqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A poor family schemes their way into employment with a wealthy family, with unexpected consequences.",
        themes: "Class, Inequality, Deception, Family, Capitalism",
        director: "Bong Joon-ho",
        rating: 0,
        preview: "Parasite made history as the first foreign-language Best Picture winner, and for good reason. The film brilliantly explores class inequality through a darkly comic thriller. Its genre shifts and social commentary create an unforgettable experience."
    },
    {
        id: 918,
        title: "Get Out",
        category: "Thriller",
        year: 2017,
        image: "https://image.tmdb.org/t/p/w500/gOqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A young Black man discovers disturbing secrets when he meets his white girlfriend's family.",
        themes: "Race, Identity, Manipulation, Horror, Liberal Racism",
        director: "Jordan Peele",
        rating: 0,
        preview: "Get Out redefined horror by making racism the monster. Jordan Peele's directorial debut blends social commentary with genuine thrills and scares. Its exploration of liberal racism and the Sunken Place made it a cultural phenomenon."
    },
    {
        id: 919,
        title: "A Quiet Place",
        category: "Thriller",
        year: 2018,
        image: "https://image.tmdb.org/t/p/w500/aQqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A family must live in silence to avoid mysterious creatures that hunt by sound.",
        themes: "Family, Survival, Sound, Fear, Sacrifice",
        director: "John Krasinski",
        rating: 0,
        preview: "A Quiet Place is an innovative thriller that uses silence as its greatest weapon. The film creates unbearable tension through its simple premise executed perfectly. Its exploration of parental protection and sacrifice in a post-apocalyptic world is deeply emotional."
    },
    {
        id: 920,
        title: "Wind River",
        category: "Thriller",
        year: 2017,
        image: "https://image.tmdb.org/t/p/w500/wRqLqLqLqLqLqLqLqLqLqLqLq.jpg",
        description: "A wildlife officer teams with an FBI agent to investigate a murder on a Wyoming Native American reservation.",
        themes: "Justice, Grief, Native Americans, Isolation, Violence",
        director: "Taylor Sheridan",
        rating: 0,
        preview: "Wind River is a tense thriller that explores violence against Native American women. The film follows a tracker and FBI agent investigating murder in harsh Wyoming winter. Its social commentary and Jeremy Renner's performance make it compelling."
    }
];

// Category Filter
const categories = ["All", "Anime", "Kdrama", "Nollywood", "Fantasy", "Sci-Fi", "Action", "Animation", "Action Fantasy", "Thriller", "Comedy Drama", "Documentary"];
let currentCategory = "All";

// DOM Elements
const moviesGrid = document.getElementById('movies-grid');
const modal = document.getElementById('preview-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const categoryTabs = document.getElementById('category-tabs');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryTabs();
    renderMovies();
    setupEventListeners();
    loadRatings();
});

// Render Category Tabs
function renderCategoryTabs() {
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'tab-btn' + (category === 'All' ? ' active' : '');
        tab.textContent = category;
        tab.addEventListener('click', () => filterByCategory(category));
        categoryTabs.appendChild(tab);
    });
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === category);
    });
    renderMovies();
}

// Render Movies
function renderMovies() {
    const filteredMovies = currentCategory === 'All' 
        ? movies 
        : movies.filter(movie => movie.category === currentCategory);
    
    moviesGrid.innerHTML = '';
    
    filteredMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

// Create Movie Card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        window.location.href = `movie-detail.html?id=${movie.id}`;
    });
    
    const stars = [1, 2, 3, 4, 5].map(num => {
        const star = document.createElement('span');
        star.className = 'star' + (num <= movie.rating ? ' active' : '');
        star.innerHTML = '★';
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            rateMovie(movie.id, num);
        });
        return star;
    });
    
    // Get comments for this movie
    const comments = typeof sharedComments !== 'undefined'
        ? sharedComments.getComments(movie.id)
        : JSON.parse(localStorage.getItem(`comments_${movie.id}`)) || [];
    const commentsPreview = comments.length > 0
        ? `<div class="card-comments-preview">
            <span class="comments-count">💬 ${comments.length} comment${comments.length > 1 ? 's' : ''}</span>
            <p class="latest-comment">"${comments[0].text.substring(0, 60)}${comments[0].text.length > 60 ? '...' : ''}"</p>
          </div>`
        : `<div class="card-comments-preview no-comments">
            <span class="comments-count">💬 No comments yet</span>
          </div>`;
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;" onerror="handleMovieImageError(this, '${movie.title.replace(/'/g, "\\'")}')">
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-category">${movie.category}</span>
                <span>${movie.year}</span>
            </div>
            <p class="movie-description">${movie.description}</p>
            <div class="rating-section">
                <div class="rating-stars">
                    ${stars.map(s => s.outerHTML).join('')}
                </div>
                <span class="rating-value">${movie.rating > 0 ? movie.rating + '/5' : 'Not rated'}</span>
            </div>
            ${commentsPreview}
            <button class="btn-preview" data-id="${movie.id}">View Details & Comments</button>
        </div>
    `;
    
    return card;
}

// Rate Movie
function rateMovie(movieId, rating) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        movie.rating = rating;
        saveRatings();
        renderMovies();
    }
}

// Save Ratings to LocalStorage
function saveRatings() {
    const ratings = {};
    movies.forEach(movie => {
        if (movie.rating > 0) {
            ratings[movie.id] = movie.rating;
        }
    });
    localStorage.setItem('movieRatings', JSON.stringify(ratings));
}

// Load Ratings from LocalStorage
function loadRatings() {
    const ratings = JSON.parse(localStorage.getItem('movieRatings')) || {};
    movies.forEach(movie => {
        if (ratings[movie.id]) {
            movie.rating = ratings[movie.id];
        }
    });
}

// Show Movie Preview
function showMoviePreview(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;
    
    modalBody.innerHTML = `
        <h2>${movie.emoji} ${movie.title}</h2>
        <div class="movie-details">
            <div class="detail-row">
                <span class="detail-label">Category:</span>
                <span class="detail-value">${movie.category}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Year:</span>
                <span class="detail-value">${movie.year}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Director:</span>
                <span class="detail-value">${movie.director}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Themes:</span>
                <span class="detail-value">${movie.themes}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Your Rating:</span>
                <span class="detail-value">${movie.rating > 0 ? movie.rating + ' ★' : 'Not rated yet'}</span>
            </div>
        </div>
        <div class="preview-section">
            <h3>Movie Preview & Analysis</h3>
            <p class="preview-text">${movie.preview}</p>
        </div>
        <div class="preview-section">
            <h3>What You'll Learn</h3>
            <p class="preview-text">This film offers valuable insights into ${movie.themes.toLowerCase()}. Understanding these elements will deepen your appreciation of cinema and help you analyze storytelling techniques used by filmmakers.</p>
        </div>
    `;
    
    modal.classList.add('active');
}

// Setup Event Listeners
function setupEventListeners() {
    // Preview buttons - navigate to detail page
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-preview')) {
            const movieId = parseInt(e.target.dataset.id);
            window.location.href = `movie-detail.html?id=${movieId}`;
        }
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    // Initialize search
    initializeSearch();
}

// ==================== SEARCH FUNCTIONALITY ====================
function initializeSearch() {
    const searchInput = document.getElementById('nav-search');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            searchResults.innerHTML = '';
            return;
        }

        const results = searchMovies(query);
        displaySearchResults(results, query);
    });

    searchInput.addEventListener('focus', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query.length >= 2) {
            const results = searchMovies(query);
            displaySearchResults(results, query);
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
        }
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        const items = searchResults.querySelectorAll('.search-result-item');
        const activeItem = searchResults.querySelector('.search-result-item:hover');
        const currentIndex = Array.from(items).indexOf(activeItem);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex]?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex]?.focus();
        } else if (e.key === 'Enter' && activeItem) {
            e.preventDefault();
            activeItem.click();
        } else if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
}

function searchMovies(query) {
    return movies.filter(movie => {
        const searchableText = [
            movie.title,
            movie.category,
            movie.director,
            movie.themes,
            movie.description,
            movie.year.toString()
        ].join(' ').toLowerCase();

        return searchableText.includes(query);
    }).slice(0, 8); // Limit to 8 results
}

function displaySearchResults(results, query) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <span>🎬</span>
                <p>No movies found matching "<strong>${escapeHtml(query)}</strong>"</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">Try searching by title, category, director, or themes</p>
            </div>
        `;
        searchResults.classList.add('active');
        return;
    }

    searchResults.innerHTML = results.map(movie => `
        <a href="movie-detail.html?id=${movie.id}" class="search-result-item">
            <div class="search-result-poster">
                <img src="${movie.image}" alt="${movie.title}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;"
                     onerror="handleMovieImageError(this, '${movie.title.replace(/'/g, "\\'")}')">
            </div>
            <div class="search-result-info">
                <div class="search-result-title">${highlightText(movie.title, query)}</div>
                <div class="search-result-meta">
                    ${movie.category} • ${movie.year} • ${movie.director}
                </div>
            </div>
        </a>
    `).join('');

    searchResults.classList.add('active');
}

function highlightText(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

