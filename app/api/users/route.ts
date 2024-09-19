import { fetchUsers, saveUser } from "@/utils/actions";
import { NextRequest } from "next/server";
// using NextRequest instead of Request to access new features
export const GET = async (req: NextRequest) => {
  console.log(req.url);
  console.log(req.nextUrl.searchParams.get("id"));

  const users = await fetchUsers();
  // URL constructor: new URL(url, base)
  return Response.json({ users });
};

export const POST = async (req: Request) => {
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);
  return Response.json({ msg: "userc created" });
};
