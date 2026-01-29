import { env } from "@/env";
import { on } from "events";

const API_URL = env.API_URL;

// * no dynamic and no cache no-store ssg---> static page 
//* {cache: 'no-store'} SSR -> dynamic server side rendering on every request
// * revalidate: 10 seconds ISR -> incremental static regeneration


 interface ServicesOptions{
  cache?: RequestCache;
  revalidate?: number; 
 }
 interface GetBlogsParams{
  isFeatured?: boolean;
  search?: string;
 }

export const blogService = {
  getBlogPosts: async function (params?: GetBlogsParams, options?: ServicesOptions) {
    try {

      const url = new URL(`${API_URL}/posts`);
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, String(value));
          }
        });
      }

      const config : RequestInit = {};
      if(options?.cache){
        config.cache = options.cache;
      } 

      if(options?.revalidate){
       config.next = { revalidate: options.revalidate };
      }

      const res = await fetch(url.toString(), config); 
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
