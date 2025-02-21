export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <h1>Dashboard Layout</h1>
      {children}
    </>
  )
}
