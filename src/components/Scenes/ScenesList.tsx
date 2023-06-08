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
    nightSrc: "/cornerN.jpeg",
    cycle: "day",
  },
  {
    name: "Hentai Room",
    daySrc: "/coffee.jpeg",
    nightSrc: "/coffee.jpeg",
    cycle: "day",
  },
];
