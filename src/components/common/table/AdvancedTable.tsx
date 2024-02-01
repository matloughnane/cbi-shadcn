import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    VisibilityState,
    ColumnFiltersState,
    getFilteredRowModel,
    SortingState,
    getSortedRowModel,
    getPaginationRowModel
} from "@tanstack/react-table"

import { useState } from "react"
import { AdvancedTablePagination } from "./AdvancedTablePagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    showColumnChanger: boolean,
    filteredColumn: string,
    hideColumnDefault?: string[],
    size?: "sm" | "md" | "lg"
}

export function AdvancedTable<TData, TValue>({
    columns,
    data,
    showColumnChanger = true,
    filteredColumn = "",
    hideColumnDefault = [],
    size = "sm"
}: DataTableProps<TData, TValue>) {
    // COLUMN CHANGED
    const [columnVisibility, setColumnVisibility] =
        useState<VisibilityState>(hideColumnDefault.reduce((a, v) => ({ ...a, [v]: false }), {}))
    // SORTING
    const [sorting, setSorting] = useState<SortingState>([])

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getCoreRowModel: getCoreRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            columnVisibility,
            columnFilters,
            sorting
        }
    })

    return (
        <div className="flex flex-col space-y-4">
            {showColumnChanger ?
                <div className={`flex ${filteredColumn == "" ? "justify-end" : "justify-between"} w-full`}>

                    {filteredColumn == ""
                        ? <></>
                        : <div className={`flex flex-row`}>
                            <Input placeholder={`Filter ${filteredColumn}s...`}
                                value={(table.getColumn(`${filteredColumn}`)?.getFilterValue() as string) ?? ""}
                                onChange={(event) =>
                                    table.getColumn(`${filteredColumn}`)?.setFilterValue(event.target.value)
                                }
                            />

                        </div>
                    }
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    Columns
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {table
                                    .getAllColumns()
                                    .filter(
                                        (column) => column.getCanHide()
                                    )
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {`${column.columnDef!.header}`}
                                            </DropdownMenuCheckboxItem>
                                        )
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                : <></>}
            <Table
            >
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No data
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex w-sm justify-end">
                <AdvancedTablePagination table={table} />
            </div>
        </div >
    )
}
