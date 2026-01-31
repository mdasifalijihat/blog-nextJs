import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { revalidateTag, updateTag } from "next/cache";
import { cookies } from "next/headers";
const API_URL = env.API_URL;

export default function CreateBlogFormServer() {
  const createBlog = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const thumbnail = formData.get("thumbnail") as string;
    const tags = formData.get("tags") as string;

    const blogData = {
      title,
      content,
      thumbnail,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== ""),
    };

    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    });

    if(res.ok){
      revalidateTag("blogPosts", "max");
      updateTag("blogPosts")
    }


  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle> Create Blog Form </CardTitle>
        <CardDescription>
          {" "}
          You can create a new blog post here.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="blog-form" action={createBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input
                id="title"
                name="title"
                placeholder="Blog title"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="content">Content</FieldLabel>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your blog"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="tags">Tags</FieldLabel>
              <Input id="tags" name="tags" placeholder="web,next,js" />
            </Field>
            <Field>
              <FieldLabel htmlFor="thumbnail">Thumbnail</FieldLabel>
              <Input id="thumbnail" name="thumbnail" placeholder="img url" />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" form="blog-form" type="submit">
          {" "}
          Submit{" "}
        </Button>
      </CardFooter>
    </Card>
  );
}
