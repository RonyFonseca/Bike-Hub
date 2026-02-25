import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("token");

  if (!cookie) {
    redirect("/auth/login");
  }

  const token = JSON.parse(cookie.value);

  if (token.typeCount === "locador") {
    redirect("/locador");
  }

  if (token.typeCount === "locatario") {
    redirect("/locatario");
  }

  return null;
}