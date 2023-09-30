interface EventCardProps {
  image: string | StaticImport;
  date: string;
  time: string;
  title: string;
}

interface TeamCardProps {
  image: string | StaticImport;
  name: string;
  position: string;
}

interface Navlinks {
  type?: "link" | "dropdown" | "grid" | "mega";
  title: string;
  slug?: string;
  gridItems?: Navlinks[];
  children?: {
    type?: "link" | "dropdown" | "grid" | "mega";
    title: string;
    slug?: string;
    gridItems?: Navlinks[];
    children?: {
      title: string;
      slug: string;
    }[];
  }[];
}

interface BlogCardProps {
  image: string | StaticImport;
  title: string;
  date: string;
  slug: string;
}
