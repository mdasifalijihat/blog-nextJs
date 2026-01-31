"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface User {
  phone?: string;
  role?: "USER" | "ADMIN";
  status?: "ACTIVE" | "BLOCKED";
  image?: string | null;
}



export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <p>Loading...</p>;
  if (!session?.user) return <p>Not logged in</p>;

  const user = session.user;

  return (
    <div className="max-w-md mx-auto space-y-4 p-6 border rounded-lg">
      <div className="flex items-center gap-4">
        <Image
          src={user.image ?? "/avatar.png"}
          alt={user.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <div className="space-y-1 text-sm">
        <p>
          <b>Email Verified:</b> {user.emailVerified ? "Yes" : "No"}
        </p>
      </div>

      <Button
        variant="destructive"
        className="w-full"
        onClick={async () => {
          await authClient.signOut();
          window.location.href = "/";
        }}
      >
        Logout
      </Button>
    </div>
  );
}
