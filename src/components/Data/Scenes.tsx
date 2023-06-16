export interface ListProps {
  name: string;
  cycle: "day" | "night";
  daySrc: string;
  nightSrc: string;
}

export const List: ListProps[] = [
  {
    name: "Coffee Shop",
    daySrc: "/coffee.jpeg",
    nightSrc: "/coffee.jpeg",
    cycle: "day",
  },
  {
    name: "Corner",
    daySrc: "/corner.jpg",
    nightSrc: "/corner.jpeg",
    cycle: "day",
  },
  {
    name: "Jungle",
    daySrc: "/jungle.jpeg",
    nightSrc: "/jungle.jpeg",
    cycle: "day",
  },
];
