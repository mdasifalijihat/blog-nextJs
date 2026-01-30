import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Eye } from "lucide-react";
import { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="w-full max-w-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg">
      {/* Thumbnail */}
      <div className="relative h-48 w-full bg-gray-100">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {post.content.length > 100
            ? post.content.substring(0, 100) + "..."
            : post.content}
        </p>
        <div className="flex flex-wrap items-center p-2 ">
          {/* Tags */}
          {post.tags?.length && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-white px-2 py-1 rounded text-xs font-medium border border-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 border-t pt-4 border-t-black">
        {/* Tags with border & stats */}
        {/* Stats: comments & views */}
        <div className="flex items-center text-sm text-muted-foreground ml-2 gap-3">
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            {post.views}
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {post._count?.comments ?? 0}
          </div>
        </div>
        {/* Read More button */}
        <Button variant="outline" asChild>
          <Link href={`/blog/${post.id}`} className="flex items-center">
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
