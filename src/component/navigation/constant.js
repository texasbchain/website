export const routes = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Divisions",
    link: "/divisions",
    subRoutes: [
      {
        name: "Engineering",
        link: "/divisions/engineering",
      },
      {
        name: "Finance",
        link: "/divisions/finance",
      },
      {
        name: "Research and Writing",
        link: "/divisions/randw",
      },
      {
        name: "Incubator",
        link: "/divisions/incubator",
      },
    ],
  },
  {
    name: "Resources",
    link: "/resources",
    subRoutes: [
      {
        name: "Community",
        link: "/resources/community"
      },
      {
        name: "Events",
        link: "/resources/events"
      },
      {
        name: "Internships",
        link: "/resources/internships"
      },
    ]
  },
  {
    name: "Contact Us",
    link: "/about",
  },
];