import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  export interface ColumnDefBase<TData extends RowData, TValue = unknown>
    extends ColumnDefExtensions<TData, TValue> {
    title?: string
    accessorKey?: string
  }

  // export interface IdentifiedColumnDef<TData, TValue> {
  //   title?: name
  // }

  // export interface CoreColumn<TData extends RowData, TValue> {
  //   title?: string
  // }

  // export type ColumnDef<TData extends RowData, TValue = unknown> =
  //   | ({
  //       title?: string
  //     } & DisplayColumnDef<TData, TValue>)
  //   | GroupColumnDef<TData, TValue>
  //   | AccessorColumnDef<TData, TValue>
}
