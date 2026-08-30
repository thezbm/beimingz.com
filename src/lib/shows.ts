export type Tier = 1 | 2 | 3 | 4 | 5;

export interface Show {
  title: string;
  status: string;
  tier?: Tier;
  note?: string;
}

export const shows: Show[] = [
  {
    title: "The Newsroom",
    status: "Finished",
    tier: 5,
  },
  {
    title: "Ted Lasso",
    status: "Finished",
    tier: 4,
  },
  {
    title: "Silicon Valley",
    status: "Finished",
    tier: 5,
  },
  {
    title: "Warehouse 13",
    status: "Finished",
    tier: 4,
  },
  {
    title: "Person of Interest",
    status: "Finished",
    tier: 5,
  },
  {
    title: "Community",
    status: "Finished",
    tier: 4,
  },
  {
    title: "Sherlock",
    status: "Finished",
    tier: 5,
  },
  {
    title: "Game of Thrones",
    status: "Finished",
    tier: 4,
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
  },
  {
    title: "This Is Us",
    status: "S1E3",
    tier: 4,
  },
  {
    title: "Brooklyn Nine-Nine",
    status: "S3E9",
    tier: 2,
  },
  {
    title: "Friends",
    status: "S5E9",
    tier: 4,
  },
  {
    title: "Andor",
    status: "S2",
    tier: 4,
  },
  {
    title: "Slow Horses",
    status: "S4",
    tier: 4,
  },
  {
    title: "Stranger Things",
    status: "S4",
    tier: 4,
  },
  {
    title: "Warrior",
    status: "S3E5",
    tier: 4,
  },
  {
    title: "Black Sails",
    status: "S2",
    tier: 3,
  },
  {
    title: "Peaky Blinders",
    status: "?",
    tier: 4,
  },
  {
    title: "The Mandalorian",
    status: "S3",
    tier: 4,
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
  },
  {
    title: "The Lincoln Lawyer",
    status: "S4",
    tier: 4,
  },
  {
    title: "The Days of the Jackal",
    status: "S1",
    tier: 4,
  },
  {
    title: "Interior Chinatown",
    status: "Finished",
    tier: 3,
  },
  {
    title: "Reacher",
    status: "S3",
    tier: 3,
  },
  {
    title: "The Residence",
    status: "S1",
    tier: 2,
  },
  {
    title: "The Wheel of Time",
    status: "S3",
    tier: 3,
  },
  {
    title: "The Studio",
    status: "S1",
    tier: 4,
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
  },
  {
    title: "Daredevil",
    status: "Finished",
    tier: 4,
  },
  {
    title: "Marvel's The Defenders",
    status: "Finished",
    tier: 2,
  },
  {
    title: "Marvel's The Punisher",
    status: "Finished",
    tier: 4,
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
  },
  {
    title: "One Piece",
    status: "S2",
    tier: 4,
  },
  {
    title: "The Office",
    status: "S9E17",
    tier: 5,
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
  },
  {
    title: "Gen V",
    status: "S2E1?",
    tier: 3,
  },
  {
    title: "The Boys",
    status: "S5E2?",
    tier: 3,
  },
  {
    title: "Breaking Bad",
    status: "S5E1",
    tier: 5,
  },
  {
    title: "The Book of Boba Fett",
    status: "Finished",
    tier: 4,
  },
  {
    title: "Agents of S.H.I.E.L.D.",
    status: "?",
    tier: 3,
  },
  {
    title: "Mr. Robot",
    status: "?",
    tier: 2,
  },
  {
    title: "The IT Crowd",
    status: "?",
    tier: 4,
  },
  {
    title: "A Knight of the Seven Kingdoms",
    status: "S1",
    tier: 4,
  },
  {
    title: "Arrested Development",
    status: "S1?",
    tier: 3,
  },
];
