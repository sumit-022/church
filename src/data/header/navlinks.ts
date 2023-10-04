const navLinks: Navlinks[] = [
  {
    type: "link",
    title: "Home",
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
        type: "link",
        title: "Events",
        slug: "/events",
      },
      {
        type: "link",
        title: "Gallery",
        slug: "/gallery-columns",
      },
      // {
      //   type: "dropdown",
      //   title: "Our Pastors",
      //   slug: "/our-pastors",
      //   children: [
      //     {
      //       title: "Our Pastors Slide",
      //       slug: "/our-pastors-slide",
      //     },
      //   ],
      // },
      {
        type: "dropdown",
        title: "Campaigns",
        children: [{ title: "Donate Now", slug: "/donate-now" }],
      },
    ],
  },
  {
    type: "link",
    title: "Sermons",
    slug: "/sermons-grid",
  },
  // {
  //   type: "grid",
  //   title: "Ministries",
  //   gridItems: [
  //     {
  //       title: "Ministries Details",
  //       slug: "/ministries-details",
  //       children: [
  //         {
  //           title: "Children Minstry",
  //           slug: "/ministries-details",
  //         },
  //         {
  //           title: "Family Ministry",
  //           slug: "/ministries-details",
  //         },
  //         {
  //           title: "Global Ministry",
  //           slug: "/ministries-details",
  //         },
  //         {
  //           title: "Music Ministry",
  //           slug: "/ministries-details",
  //         },
  //         {
  //           title: "Prison Ministry",
  //           slug: "/ministries-details",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Ministry Layouts",
  //       slug: "/ministry-layouts",
  //       children: [
  //         {
  //           title: "Ministries Grid 2",
  //           slug: "/ministry-layouts",
  //         },
  //         {
  //           title: "Ministries Grid 3",
  //           slug: "/ministry-layouts",
  //         },
  //         {
  //           title: "Ministries Grid 4",
  //           slug: "/ministry-layouts",
  //         },
  //         {
  //           title: "Ministries Left Sidebar",
  //           slug: "/ministry-layouts",
  //         },
  //         {
  //           title: "Ministries Right Sidebar",
  //           slug: "/ministry-layouts",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    type: "link",
    title: "Blog",
    slug: "/blog-grid",
  },
  {
    type: "link",
    title: "Contact Us",
    slug: "/contact-us",
  },
];

export default navLinks;
