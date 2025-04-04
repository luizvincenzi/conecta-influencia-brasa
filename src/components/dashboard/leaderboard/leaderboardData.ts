
// Types for leaderboard data
export interface Influencer {
  id: number;
  name: string;
  handle: string;
  points: number;
  rank: number;
  badge: "gold" | "silver" | "bronze";
}

// Sample data for the component
export const LEADERBOARD: Influencer[] = [
  { id: 1, name: "Ana Silva", handle: "@anasilva", points: 950, rank: 1, badge: "gold" },
  { id: 2, name: "Pedro Santos", handle: "@pedrosantos", points: 820, rank: 2, badge: "gold" },
  { id: 3, name: "Carla Mendes", handle: "@carlamendes", points: 780, rank: 3, badge: "gold" },
  { id: 4, name: "Marcos Oliveira", handle: "@marcosoliveira", points: 650, rank: 4, badge: "silver" },
  { id: 5, name: "Lucia Ferreira", handle: "@luciaferreira", points: 580, rank: 5, badge: "silver" },
];

// Extended leaderboard data for full view
export const EXTENDED_LEADERBOARD: Influencer[] = [
  ...LEADERBOARD,
  { id: 6, name: "Bruno Costa", handle: "@brunocosta", points: 520, rank: 6, badge: "silver" },
  { id: 7, name: "Mariana Dias", handle: "@marianadias", points: 480, rank: 7, badge: "silver" },
  { id: 8, name: "Ricardo Lima", handle: "@ricardolima", points: 450, rank: 8, badge: "bronze" },
  { id: 9, name: "Fernanda Rocha", handle: "@fernandarocha", points: 420, rank: 9, badge: "bronze" },
  { id: 10, name: "Paulo Vieira", handle: "@paulovieira", points: 380, rank: 10, badge: "bronze" },
];
