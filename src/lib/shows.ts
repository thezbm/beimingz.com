export type Tier = 1 | 2 | 3 | 4 | 5;

export interface Show {
  title: string;
  status: string;
  tier?: Tier;
  review?: string;
}

export const shows: Show[] = [
  {
    title: "The Newsroom",
    status: "Finished",
    tier: 5,
    review:
      "A really good drama about the world of newsrooms and journalism. The pacing is great, and the main character, Will McAvoy, is full of charisma.",
  },
  {
    title: "Ted Lasso",
    status: "Finished",
    tier: 4,
    review:
      "I started watching because it's about soccer, but really it's for everyone. Very funny and warm-hearted.",
  },
  {
    title: "Silicon Valley",
    status: "Finished",
    tier: 5,
    review:
      "The funniest comedy show for me (not sure if being a software engineer makes it funnier). Couldn't stop watching. Jimmy O. Yang was killing it. The portrayal of Silicon Valley, startups, and the tech industry feels very accurate.",
  },
  {
    title: "Warehouse 13",
    status: "Finished",
    tier: 4,
    review:
      "A very engaging sci-fi and mystery show. Had a great time watching it as a teenager.",
  },
  {
    title: "Person of Interest",
    status: "Finished",
    tier: 5,
    review:
      "A fascinating sci-fi/crime show. The storytelling is just really good.",
  },
  {
    title: "Community",
    status: "Finished",
    tier: 4,
    review:
      "This is possibly the first TV show I ever finished. I still remember staying up way too late watching it the night before school and dozing off in class. It gave me my first impression of a US community college, which turned out to be way too exaggerated.",
  },
  {
    title: "Sherlock",
    status: "Finished",
    tier: 5,
    review:
      "Another show I couldn't stop watching. Benedict Cumberbatch did a great job collaborating with Martin Freeman as Sherlock and Watson. The plot is very addictive.",
  },
  {
    title: "Game of Thrones",
    status: "Finished",
    tier: 4,
    review:
      "As someone who loves The Hobbit and Lord of the Rings, I loved this epic fantasy. I enjoyed the grand storytelling and the way each character was depicted, from the politics and the fights to the magic, the dragons, the religions, the houses, and all the myths. The last season was a bit of a bummer, though, alas.",
  },
  {
    title: "Dirk Gently's Holistic Detective Agency",
    status: "Finished",
    tier: 3,
  },
  {
    title: "The Capture",
    status: "S1",
    tier: 4,
  },
  {
    title: "All Creatures Great and Small",
    status: "S2E2?",
    tier: 5,
    review:
      "The show is very soothing to watch. All the little stories set in the Yorkshire Dales countryside are just full of warmth.",
  },
  {
    title: "This Is Us",
    status: "S1E3",
    tier: 4,
    review:
      "This show depicts authentic family dynamics and is genuinely moving. The pilot is absolutely perfect and could stand on its own as a short film. I didn't finish it though. In fact I didn't really start it, but I can see myself picking it up again in the future.",
  },
  {
    title: "Brooklyn Nine-Nine",
    status: "S3E9",
    tier: 3,
    review:
      "Didn't really get the hype. At first it was funny and I kept watching, but then I felt it wasn't that funny anymore.",
  },
  {
    title: "Friends",
    status: "S5E9",
    tier: 4,
    review:
      "A classic. Everyone around me was watching it, so I did too. A pretty good comedy. Joey and Chandler are funny as heck.",
  },
  {
    title: "Andor",
    status: "S2",
    tier: 4,
    review:
      "The grown-up Star Wars show. Complex characters, great writing. The build-up could be a bit faster, but the climax is worth the wait.",
  },
  {
    title: "Slow Horses",
    status: "S4",
    tier: 4,
    review:
      "I like that this crime thriller is told from the perspective of a bunch of \"loser\" agents who don't have the best resources. Jackson Lamb is a well-written character, really brought to life by Gary Oldman. The plot doesn't feel cliched at all.",
  },
  {
    title: "Stranger Things",
    status: "S4",
    tier: 4,
    review:
      "A little overhyped, but it's a really good sci-fi thriller told through the eyes of a bunch of kids. I really like the music in this show.",
  },
  {
    title: "Warrior",
    status: "S3E5",
    tier: 4,
    review:
      "A San Francisco Chinatown version of Peaky Blinders. I love the packed martial arts fight scenes.",
  },
  {
    title: "Black Sails",
    status: "S2",
    tier: 3,
    review:
      "Kind of like Game of Thrones but with pirates. Didn't have time to finish it.",
  },
  {
    title: "Peaky Blinders",
    status: "?",
    tier: 4,
    review:
      "Great show with stunning storytelling. Didn't have time to finish it, but I'll likely pick it up again.",
  },
  {
    title: "The Mandalorian",
    status: "S3",
    tier: 4,
    review:
      "One of the best Star Wars spin-offs. Season 3 is a sharp drop in quality though.",
  },
  {
    title: "Wayne",
    status: "S1",
    tier: 3,
  },
  {
    title: "How to with John Wilson",
    status: "S3E1",
    tier: 4,
    review:
      "Probably the most unique TV show on my list. The way he shoots the show and tells stories is fascinating, and I kind of like the way he narrates the show. He talks about some very interesting topics that are often thought-provoking.",
  },
  {
    title: "Peacemaker",
    status: "S2",
    tier: 3,
  },
  {
    title: "Shameless",
    status: "S2E5",
    tier: 4,
    review:
      "A good show depicting dysfunctional yet compelling family dynamics on the South Side of Chicago. I'd probably pick it back up.",
  },
  {
    title: "9-1-1",
    status: "S3E9",
    tier: 3,
  },
  {
    title: "Gotham",
    status: "S1E13",
    tier: 3,
  },
  {
    title: "White Collar",
    status: "S3E9",
    tier: 3,
  },
  {
    title: "Fresh off the Boat",
    status: "S2E10",
    tier: 3,
    review: "A pretty funny comedy about an Asian American family.",
  },
  {
    title: "The Young Offenders",
    status: "S3E1",
    tier: 2,
  },
  {
    title: "Preacher",
    status: "S2E5",
    tier: 2,
  },
  {
    title: "The Out Laws",
    status: "S2E2",
    tier: 2,
  },
  {
    title: "The Wrong Mans",
    status: "S1",
    tier: 3,
    review: "A comedy thriller with clever twists.",
  },
  {
    title: "Only Murders in the Building",
    status: "S2",
    tier: 2,
  },
  {
    title: "Ludwig",
    status: "S1",
    tier: 2,
  },
  {
    title: "Tulsa King",
    status: "S1E?",
    tier: 3,
  },
  {
    title: "A Man On the Inside",
    status: "S1",
    tier: 2,
    review:
      "Watched it purely because it's set in San Francisco and I missed the city. The plot is kind of boring.",
  },
  {
    title: "The Lincoln Lawyer",
    status: "S4",
    tier: 4,
    review:
      "A really fascinating legal/crime drama. The main character, Mickey Haller, is very charismatic.",
  },
  {
    title: "The Day of the Jackal",
    status: "S1",
    tier: 4,
    review: "An excellent action show with a captivating plot.",
  },
  {
    title: "Interior Chinatown",
    status: "Finished",
    tier: 3,
    review:
      "Watched it because of Jimmy O. Yang and Ronny Chieng, but the pacing and the plot are a bit confusing.",
  },
  {
    title: "Reacher",
    status: "S3",
    tier: 3,
    review: "A pretty good one-man-solves-all-problems action thriller.",
  },
  {
    title: "The Residence",
    status: "S1",
    tier: 2,
    review: "Found it a little boring for a detective show, to be honest.",
  },
  {
    title: "The Wheel of Time",
    status: "S3",
    tier: 3,
    review:
      "Another epic fantasy with magic and a lot going on, but not as good as Game of Thrones.",
  },
  {
    title: "The Studio",
    status: "S1",
    tier: 4,
    review:
      'A very interesting show about a Hollywood studio striving to survive. My favorite episode is S1E2 "The Oner", which tells the story of a chaotic shoot of a oner (a long take), while the episode itself is a single long take.',
  },
  {
    title: "Your Friends & Neighbors",
    status: "S1E3",
    tier: 2,
  },
  {
    title: "Wednesday",
    status: "S2",
    tier: 3,
    review:
      "A pretty good supernatural fantasy from Netflix with compelling mystery elements. The high school drama feels a little silly.",
  },
  {
    title: "Bodyguard",
    status: "Finished",
    tier: 3,
  },
  {
    title: "Poker Face",
    status: "S2E3",
    tier: 2,
  },
  {
    title: "Dept. Q",
    status: "S1",
    tier: 3,
  },
  {
    title: "The Witcher",
    status: "S1E5",
    tier: 3,
    review:
      "Didn't like it very much, probably because I hadn't read the original books and some of the concepts and background are hard to comprehend.",
  },
  {
    title: "Daredevil",
    status: "Finished",
    tier: 4,
    review:
      "In my opinion, the best superhero TV series out there. Exceptional fight scenes and a very engaging plot. Excellent character building, especially in S3, where Matt Murdock goes through a personal crisis of identity and faith.",
  },
  {
    title: "The Defenders",
    status: "Finished",
    tier: 2,
    review:
      "Watched it because it bridges Daredevil S2 and S3. Not as good as Daredevil or The Punisher.",
  },
  {
    title: "The Punisher",
    status: "Finished",
    tier: 4,
    review:
      "Watched it because it bridges Daredevil S2 and S3. The Punisher is an anti-hero who believes criminals deserve lethal and permanent punishment, while Daredevil believes in institutional justice and rehabilitation, creating an interesting moral opposition and dynamic.",
  },
  {
    title: "Matlock",
    status: "S1",
    tier: 3,
  },
  {
    title: "Tom Clancy's Jack Ryan",
    status: "S3",
    tier: 3,
    review:
      "Started watching because of John Krasinski (Jim Halpert in The Office). The first season is intriguing, but the quality declines after S1.",
  },
  {
    title: "One Piece",
    status: "S2",
    tier: 4,
    review:
      "I was surprised by how good Netflix's remake of the original anime is. I know I'll never have a chance to finish the original One Piece anime, so I'm glad Netflix is making a TV series out of it. I'll just keep following it and see how far it goes.",
  },
  {
    title: "The Office",
    status: "S9E17",
    tier: 5,
    review:
      "One of my favorite TV shows. It gets better as you grow familiar with each character. I enjoyed watching an episode every day during lunch and relished the funny, cozy moments of office life. Angela Kinsey (Angela Martin) and Jenna Fischer (Pam Beesly) host a lovely re-watch podcast called Office Ladies, where they break down episodes and tell behind-the-scenes stories.",
  },
  {
    title: "Fallout",
    status: "S2E3",
    tier: 3,
  },
  {
    title: "Yellowstone",
    status: "S4",
    tier: 4,
    review:
      "An awesome western show by Taylor Sheridan, with stunning cinematography and beautiful landscapes. It's about the Dutton family protecting their ranch from corporations and rival neighbors. An epic storyline, though the pacing and overall quality get worse after season 3.",
  },
  {
    title: "Gen V",
    status: "S2E1?",
    tier: 3,
    review: "A spin-off of The Boys. Not as good as The Boys.",
  },
  {
    title: "The Boys",
    status: "S5E2?",
    tier: 4,
    review:
      "It shows a world where superheroes are the bad guys, working for an evil corporation while a group of ordinary people tries to stop them, which is a pretty eye-catching idea. The early seasons are great, but I kind of lost interest in the later ones.",
  },
  {
    title: "Breaking Bad",
    status: "S5E1",
    tier: 5,
    review:
      "A TV show masterpiece that tells the story of a high school chemistry teacher, Walter White, slowly becoming a ruthless drug lord. A fascinating plot, full of moral ambiguity and character depth. Totally worth the hype. I'll definitely finish it when I have time, and I'll probably start Better Call Saul after that.",
  },
  {
    title: "The Book of Boba Fett",
    status: "Finished",
    tier: 4,
    review:
      "A spinoff of The Mandalorian. The crossover with Din Djarin and Grogu is awesome.",
  },
  {
    title: "Agents of S.H.I.E.L.D.",
    status: "?",
    tier: 3,
    review:
      "A fascinating sci-fi show from Marvel. I started watching it in middle school but never got the chance to finish it because it was just way too long.",
  },
  {
    title: "Mr. Robot",
    status: "?",
    tier: 2,
    review:
      "Didn't meet my expectations. The pace is too slow. Maybe I should have been more patient.",
  },
  {
    title: "The IT Crowd",
    status: "?",
    tier: 4,
    review:
      "An absolutely hilarious British comedy. I love the sharp side parting of Moss's hair.",
  },
  {
    title: "A Knight of the Seven Kingdoms",
    status: "S1",
    tier: 4,
    review:
      "A spinoff of Game of Thrones. Unlike Game of Thrones, there's no epic storytelling, no world-ending threats, and no political backstabbing. Just a simple story about a knight and his squire.",
  },
  {
    title: "Arrested Development",
    status: "S1?",
    tier: 3,
  },
];
