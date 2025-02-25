import getAllProducts from '@/services/product.service'
import { DashboardDataTable } from './_components/table'

export default async function Dashboard() {
  const products = await getAllProducts()

  return <DashboardDataTable data={products} />
}
