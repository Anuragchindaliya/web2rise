import {
  BookmarkAltIcon,
  ChartBarIcon,
  CursorClickIcon,
  SupportIcon,
} from "@heroicons/react/outline";

const menus = [
  {
    id: "1",
    name: "Home",
    href: "/",
  },
  {
    id: "2",
    name: "About",
    href: "/about",
  },
  {
    id: "3",
    name: "Project",
    href: "/project",
  },
  {
    id: "4",
    name: "Career",
    href: "/career",
  },
  {
    id: "5",
    name: "Sevices",
    href: "/service",
    childs: [
      {
        id: "1",
        name: "Website Desining",
        description:
          "We attempt to provide you with a fantastic framework that piques user interest and gives you an edge over the competition..",
        href: "#",
        icon: CursorClickIcon,
      },
      {
        id: "2",
        name: "Logo Designing",
        description:
          "Get a better understanding of where your traffic is coming from.",
        href: "/logo-design",
        icon: ChartBarIcon,
      },
      {
        id: "3",
        name: "Digital Marketing",
        description:
          "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: SupportIcon,
      },
      {
        id: "4",
        name: "App Developement",
        description:
          "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkAltIcon,
      },
    ],
  },
  {
    id: "6",
    name: "Contact",
    href: "/contact",
  },
];

export default menus;
