const navLinks: Navlinks[] = [
  {
    type: "link",
    title: "Home",
    slug: "/",
    // children: [
    //   {
    //     title: "Home 1",
    //   },
    //   {
    //     title: "Home 2",
    //   },
    //   {
    //     title: "Home 3",
    //   },
    //   {
    //     title: "Home 4",
    //   },
    //   {
    //     title: "Home 5",
    //   },
    //   {
    //     title: "Home 6",
    //   },
    //   {
    //     title: "Home 7",
    //   },
    //   {
    //     title: "Home 8",
    //   },
    //   {
    //     title: "Home 9",
    //   },
    //   {
    //     title: "Home 10",
    //   },
    // ],
  },
  {
    type: "dropdown",
    title: "Pages",
    children: [
      {
        type: "link",
        title: "About Us",
        slug: "/about-us",
      },
      {
        type: "dropdown",
        title: "Events",
        slug: "/events",
        children: [
          {
            title: "Events Default",
            slug: "/events",
          },
          {
            title: "Events 2",
            slug: "/event-2",
          },
          {
            title: "Events 3",
            slug: "/event-3",
          },
          {
            title: "Event Details",
            slug: "/event-details",
          },
        ],
      },
      {
        type: "dropdown",
        title: "Gallery",
        slug: "/gallery",
        children: [
          {
            title: "Gallery 2 Cloumns",
            slug: "/gallery-columns",
          },
          {
            title: "Gallery 3 Columns",
            slug: "/gallery-3",
          },
          {
            title: "Gallery 4 Columns",
            slug: "/gallery-4",
          },
        ],
      },
      {
        type: "dropdown",
        title: "Galley Single",
        slug: "/gallery-single",
        children: [
          {
            title: "Standard",
            slug: "/standard",
          },
          {
            title: "Video",
            slug: "/video",
          },
          {
            title: "Audio",
            slug: "/audio",
          },
          {
            title: "Single Gallery",
            slug: "/single-gallery",
          },
          {
            title: "Google Maps",
            slug: "/google-maps",
          },
        ],
      },
      {
        type: "dropdown",
        title: "Our Pastors",
        slug: "/our-pastors",
        children: [
          {
            title: "Our Pastors Slide",
            slug: "/our-pastors-slide",
          },
        ],
      },
      {
        type: "dropdown",
        title: "Campaigns",
        children: [{ title: "Donate Now", slug: "/donate-now" }],
      },
    ],
  },
  {
    type: "dropdown",
    title: "Sermons",
    children: [
      {
        type: "dropdown",
        title: "Sermons Grid",
        slug: "/sermons-grid",
        children: [
          {
            title: "Sermons Grid 2",
            slug: "/sermons-grid",
          },
          {
            title: "Sermons Grid 3",
            slug: "/sermons-grid-3",
          },
          {
            title: "Sermons Grid 4",
            slug: "/sermons-grid-4",
          },
        ],
      },
      {
        type: "dropdown",
        title: "Sermons List",
        slug: "/sermons-list",
        children: [
          {
            title: "Sermons List Left Sidebar",
            slug: "/sermons-list-left-sidebar",
          },
          {
            title: "Sermons List Right Sidebar",
            slug: "/sermons-list-right-sidebar",
          },
        ],
      },
      {
        type: "link",
        title: "Sermons Details",
        slug: "/sermons-details",
      },
    ],
  },
  {
    type: "grid",
    title: "Ministries",
    gridItems: [
      {
        title: "Ministries Details",
        slug: "/ministries-details",
        children: [
          {
            title: "Children Minstry",
            slug: "/ministries-details",
          },
          {
            title: "Family Ministry",
            slug: "/ministries-details",
          },
          {
            title: "Global Ministry",
            slug: "/ministries-details",
          },
          {
            title: "Music Ministry",
            slug: "/ministries-details",
          },
          {
            title: "Prison Ministry",
            slug: "/ministries-details",
          },
        ],
      },
      {
        title: "Ministry Layouts",
        slug: "/ministry-layouts",
        children: [
          {
            title: "Ministries Grid 2",
            slug: "/ministry-layouts",
          },
          {
            title: "Ministries Grid 3",
            slug: "/ministry-layouts",
          },
          {
            title: "Ministries Grid 4",
            slug: "/ministry-layouts",
          },
          {
            title: "Ministries Left Sidebar",
            slug: "/ministry-layouts",
          },
          {
            title: "Ministries Right Sidebar",
            slug: "/ministry-layouts",
          },
        ],
      },
    ],
  },
  {
    type: "dropdown",
    title: "Blog",
    children: [
      {
        type: "dropdown",
        title: "Blog Grid",
        children: [
          {
            title: "Blog Grid 2",
            slug: "/blog-grid-2",
          },
          {
            title: "Blog Grid 3",
            slug: "/blog-grid-3",
          },
          {
            title: "Blog Grid 4",
            slug: "/blog-grid-4",
          },
          {
            title: "Blog Grid Left Sidebar",
            slug: "/blog-grid-left-sidebar",
          },
          {
            title: "Blog Grid Right Sidebar",
            slug: "/blog-grid-right-sidebar",
          },
        ],
      },
      {
        type: "dropdown",
        title: "Blog Masonry",
        children: [
          {
            title: "Blog Masonry 2",
            slug: "/blog-masonry-2",
          },
          {
            title: "Blog Masonry 3",
            slug: "/blog-masonry-3",
          },
          {
            title: "Blog Masonry 4",
            slug: "/blog-masonry-4",
          },
          {
            title: "Blog Masonry + Left Sidebar",
            slug: "/blog-masonry-left-sidebar",
          },
          {
            title: "Blog Masonry + Right Sidebar",
            slug: "/blog-masonry-right-sidebar",
          },
        ],
      },
      {
        type: "link",
        title: "Blog Single",
        slug: "/blog-single",
      },
    ],
  },
  {
    type: "link",
    title: "Contact Us",
  },
];

export default navLinks;
