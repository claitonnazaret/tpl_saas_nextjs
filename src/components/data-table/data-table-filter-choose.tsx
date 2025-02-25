import { Column, ColumnDef, Table } from '@tanstack/react-table'
import { PlusCircle, X } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'

interface DataTableFilterChooseProps<TData, TValue> {
  table: Table<TData>
  columns: ColumnDef<TData, TValue>[]
}

export function DataTableFilterChoose<TData, TValue>({
  table,
  columns,
}: DataTableFilterChooseProps<TData, TValue>) {
  const [filterValue, setFilterValue] = useState<string>('')
  const [filterSelect, setFilterSelect] = useState<string>('')
  const [columnFilter, setColumnFilter] = useState<
    Column<TData, unknown> | undefined
  >()
  const isFiltered = table.getState().columnFilters.length > 0

  const getTitle = (key: string) => {
    return columns.filter((column) => column.accessorKey === key)[0]?.title
  }

  const isCanFilter = (key: string | undefined) => {
    if (key) {
      return (
        table.getColumn(key)?.getCanFilter() &&
        table.getColumn(key)?.getIsVisible()
      )
    }
    return true
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value)
    if (columnFilter) {
      columnFilter.setFilterValue(e.target.value)
    }
  }
  const handleFilterSelect = (accessorKey: string) => {
    clearFields()
    setFilterSelect(accessorKey)
    setColumnFilter(table.getColumn(accessorKey))
  }

  const handleResetField = () => {
    handleReset()
    setFilterSelect('')
  }

  const handleReset = () => {
    clearFields()
    table.resetColumnFilters()
  }

  const clearFields = () => {
    setFilterValue('')
    if (columnFilter) columnFilter.setFilterValue('')
  }
  return (
    <div className="flex flex-1 items-center gap-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 border-dashed">
            <PlusCircle />
            Filtrar por
            {filterSelect && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-lg px-1 font-normal uppercase"
                >
                  {getTitle(filterSelect)}
                </Badge>
              </>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="w-full cursor-pointer justify-center"
            onClick={handleResetField}
          >
            Limpar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={filterSelect}
            onValueChange={handleFilterSelect}
          >
            {columns
              .filter((column) => isCanFilter(column.accessorKey?.toString()))
              .map((column, index) => {
                return (
                  <DropdownMenuRadioItem
                    key={index}
                    value={column.accessorKey as string}
                    className="capitalize"
                  >
                    {column.title}
                  </DropdownMenuRadioItem>
                )
              })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {filterSelect && filterSelect !== '' && (
        <>
          <Input
            className="h-8 border-dashed pr-4"
            placeholder="Digite para filtrar"
            value={filterValue}
            onChange={handleFilterChange}
          />
          {isFiltered && (
            <Button
              variant="outline"
              onClick={handleReset}
              className="mr-2 h-8 px-2 lg:px-3"
            >
              Limpar
              <X />
            </Button>
          )}
        </>
      )}
    </div>
  )
}
