import { Route } from "@/types";

export const userRoutes: Route[] = [
  {
    title: "Blog Management",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        title: "Create Blog",
        url: "/dashboard/create-blog",
      },
      {
        title: "History",
        url: "/dashboard/history",
      },
    ],
  },
];
