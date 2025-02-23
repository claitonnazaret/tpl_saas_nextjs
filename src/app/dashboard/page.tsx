import { auth } from '@/services/auth'
import { fetchDashboard } from '@/services/dashboard'

export default async function Dashboard() {
  const session = await auth()

  const posts = await fetchDashboard()

  return (
    <>
      <div>Dashboard</div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  )
}
