import { Separator } from "@/components/ui/separator";
import { blogService } from "@/services/blog.service";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await blogService.getBlogById(id);

  const { data: blog } = await blogService.getBlogById(id);
  // console.log("=== ALL AVAILABLE BLOGS ===");
  // console.log("=== ALL AVAILABLE BLOGS ===", blog);

  // // 🔥 THIS IS NON-NEGOTIABLE
  if (blog.error || !blog) {
    return (
      <div className="container mx-auto py-12 text-center text-red-500">
        {blog.error || "Blog not found"}
      </div>
    );
  }

  const formattedDate = new Date(blog.createAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // // Safely calculate word count and reading time
  const wordCount = blog.content?.split(/\s+/).filter(Boolean).length || 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <article className="container mx-auto px-4 py-12 max-w-2xl">
      {/* header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{readingTime} min read</span>
          {blog.views !== undefined && (
            <>
              <span>•</span>
              <span>{blog.views} views</span>
            </>
          )}
        </div>
      </header>

      <Separator className="my-8" />

      {/* content */}
      <div className="prose prose-lg max-w-none">{blog.content}</div>

      <Separator className="my-8" />

      {/* footer */}
      <footer className="mt-12 text-center text-gray-500">
        {blog.tags && blog.tags.length > 0 && (
          <div className="mb-4">
            {blog.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="mx-1 inline-block px-2 py-1 bg-gray-200 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div>
          <span>{blog._count?.comments ?? 0} comments</span>
          {blog.isFeatured && (
            <span className="ml-4 inline-block px-2 py-1 bg-gray-200 rounded text-sm">
              Featured
            </span>
          )}
        </div>
      </footer>
    </article>
  );
}
