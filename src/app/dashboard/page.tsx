import { LayoutDashboard } from "@/components/layoutDashboard";
import { verificaToken } from "@/services";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const cookie = cookies()
  const token = cookie.get("@cokkie")

  if (!token?.value || !verificaToken(token.value)) {
    redirect('/login')
  }

  return (
    <LayoutDashboard token={token.value}>
      <h1>Dashboard</h1>
    </LayoutDashboard>
  )
}