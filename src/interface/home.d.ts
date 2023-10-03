interface EventCardProps {
  id: number;
  image: string | StaticImport;
  date: string;
  time: string;
  title: string;
  images: string[] | StaticImport[];
  description: string;
  about: string;
  venue: string;
  startDate: string;
  endDate: string;
  organizer: string;
  cost: string;
  address: string;
  email: string;
  phone: string;
  website: string;
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
