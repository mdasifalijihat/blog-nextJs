import React from "react";
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
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      {post.thumbnail && (
        <div className="relative h-48 w-full">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {post.content.substring(0, 100)}...
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/blog/${post.id}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {post.types && post.types.length > 0 && (
          <div className="flex space-x-2">
            {post.types.map((type, index) => (
              <span
                key={index}
                className="bg-secondary px-2 py-1 rounded text-xs"
              >
                {type}
              </span>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
