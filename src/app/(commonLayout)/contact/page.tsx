"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-muted-foreground">
          Have a question or want to work together? We’d love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  support@example.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">
                  +880 1715-587754
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">
                  Dhaka, Bangladesh
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we’ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>

                <Input placeholder="Subject" />

                <Textarea placeholder="Write your message..." rows={6} />

                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
