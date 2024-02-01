import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

interface AdvancedTablePaginationProps<TData> {
    table: Table<TData>
}

export function AdvancedTablePagination<TData>({ table }: AdvancedTablePaginationProps<TData>) {
    return table.options.data.length > table.getState().pagination.pageSize
        ? <div className="flex flex-row">
            <Button size={"sm"}
                onClick={() => table.setPageIndex(0)}
                // isDisabled={!table.getCanPreviousPage()}
                color={"grey"}
            >
                <DoubleArrowLeftIcon />
            </Button>
            <Button size={"sm"}
                onClick={() => table.previousPage()}
                // isDisabled={!table.getCanPreviousPage()}
                color={"grey"}
            >
                <ChevronLeftIcon />
            </Button>
            <div
                className="px-2"
            >
                <span className="justify-center">
                    <span className="text-sm">Page {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}</span>
                </span>
            </div>
            <Button size={"sm"}
                onClick={() => table.nextPage()}
                // isDisabled={!table.getCanNextPage()}
                color={"grey"}
            >
                <ChevronRightIcon />
            </Button>
            <Button size={"sm"}
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                // isDisabled={!table.getCanNextPage()}
                color={"grey"}
            >
                <DoubleArrowRightIcon />
            </Button>

            <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value: any) => {
                    table.setPageSize(Number(value.target.value))
                }}
            >
                <SelectContent>
                    {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Page Size {pageSize}
                        </option>
                    ))}
                </SelectContent>
            </Select>
        </div>
        : <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value: any) => {
                table.setPageSize(Number(value.target.value))
            }}
        >
            <SelectContent>
                {[10, 25, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                        Page Size {pageSize}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
}