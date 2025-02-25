'use client'

import { DataTable } from '@/components/data-table'
import { Product } from '@/services/product.service'
import { columns } from './columns'

export function DashboardDataTable({ data }: { data: Product[] }) {
  return <DataTable data={data} columns={columns} />
}
