'use client'

import { ColumnDef, Table } from '@tanstack/react-table'

import { DataTableFilterChoose } from './data-table-filter-choose'
import { DataTableViewOptions } from './data-table-view-options'

interface DataTableToolbarProps<TData, TValue> {
  table: Table<TData>
  columns: ColumnDef<TData, TValue>[]
}

export function DataTableToolbar<TData, TValue>({
  table,
  columns,
}: DataTableToolbarProps<TData, TValue>) {
  return (
    <div className="flex items-center justify-between">
      <DataTableFilterChoose table={table} columns={columns} />
      <DataTableViewOptions table={table} />
    </div>
  )
}
