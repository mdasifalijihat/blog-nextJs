import { userService } from "@/services/user.services";

export default async function page() {
  const {data, error} = await userService.getSession();

  console.log("Session Data:", data);
  console.log("Session Error:", error);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Common Layout hOme Page</h1>
    </div>
  );
}
