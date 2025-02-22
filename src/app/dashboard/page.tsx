import { auth } from '@/services/auth'

export default async function Dashboard() {
  const session = await auth()
  return (
    <>
      <div>Dashboard</div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}
