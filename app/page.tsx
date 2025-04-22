import { redirect } from "next/navigation"

export default function Home() {
  // Redirect from the root to the dashboard
  redirect("/dashboard")
}
