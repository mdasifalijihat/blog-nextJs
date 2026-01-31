import React from "react";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight">About Me</h1>

        <p className="mb-10 text-muted-foreground">
          Learn more about who I am, what I do, and what I’m passionate about.
        </p>

        {/* Content */}
        <div className="space-y-6 text-base leading-relaxed">
          <p>
            I am a passionate JavaScript developer focused on building modern,
            scalable, and user-friendly web applications using React, Next.js,
            and the MERN stack.
          </p>

          <p>
            I enjoy turning complex problems into simple, clean, and
            maintainable solutions. Writing clean code, following best
            practices, and continuously learning new technologies are core parts
            of my development philosophy.
          </p>

          <p>
            Currently, I am sharpening my skills in full-stack development,
            working with authentication, role-based authorization, and
            performance-optimized UI design.
          </p>
        </div>
      </div>
    </section>
  );
}
