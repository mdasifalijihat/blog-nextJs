import { env } from "@/env";

const API_URL = env.API_URL;

export const blogService = {
  getBlogPosts: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`, { cache: "no-store" });
      const data = await res.json();

      //       this is an example
      //       if (res.ok) {
      //         return { data, error: null };
      //       } else {
      //         return { data: null, error: { message: "Failed to fetch blog posts" } };
      //       }

      return { data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Failed to fetch blog posts" } };
    }
  },
};
