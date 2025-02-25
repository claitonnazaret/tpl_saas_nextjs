import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'
import { Badge } from '@/components/ui/badge'
import { formatCurrency } from '@/lib/utils'
import { Product } from '@/services/product.service'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper<Product>()

const columns = [
  // columnSelect(),
  columnHelper.accessor('id', {
    id: 'id',
    title: 'ID',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="ID"
        className="justify-center text-center"
      />
    ),
    // cell: ({ row }) => <Badge>{row.getValue('id')}</Badge>,
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
    filterFn: 'equalsString',
    enableSorting: true,
    enableHiding: false,
  }),
  columnHelper.accessor('title', {
    id: 'title',
    title: 'Tílulo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={'Título'} />
    ),
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  }),

  columnHelper.accessor('description', {
    id: 'description',
    title: 'Descrição',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
    cell: ({ row }) => <div>{row.getValue('description')}</div>,
  }),

  columnHelper.accessor('brand', {
    id: 'brand',
    title: 'Marca',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Marca" />
    ),
    cell: ({ row }) => {
      const value: string | undefined = row.getValue('brand')
      return <>{value ? <Badge>{value}</Badge> : <></>}</>
    },
  }),

  columnHelper.accessor('price', {
    id: 'price',
    title: 'Preço',
    enableColumnFilter: false,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Preço"
        className="justify-end"
      />
    ),
    cell: ({ row }) => (
      <div className="text-end">
        {formatCurrency(row.getValue('price'), true)}
      </div>
    ),
  }),
] as ColumnDef<Product, unknown>[]

export { columns }
