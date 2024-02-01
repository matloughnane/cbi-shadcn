import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { Billing } from "@/models/Billing.t"
import { Badge } from "../ui/badge"
import { format, sub } from "date-fns"
import { AdvancedTable } from "../common/table/AdvancedTable"

export function BillingTable() {


    const billingColumns: ColumnDef<Billing>[] = [
        {
            id: "id",
            header: "#",
            accessorKey: "id",
            enableHiding: false
        },
        {
            id: "subscription",
            header: "Subscription",
            accessorKey: "subscription",
        },
        {
            id: "status",
            header: "Status",
            accessorKey: "status",
            cell: ({ row }) => {
                return <Badge variant={row.original.status == 1 ? "secondary" : "destructive"}>
                    {row.original.status == 1 ? "Paid" : "Outstanding"}
                </Badge>
            }
        },
        {
            id: "date",
            header: "Date Created",
            accessorKey: "date",
            cell: ({ row }) => {
                return <span>{format(new Date(row.original.date), "do MMM yyyy")}</span>
            },
        },
        {
            id: "invoice",
            header: "Invoice",
            accessorKey: "invoice",
            cell: ({ row }) => {
                return <Button
                    variant={"ghost"}
                    size={"sm"}
                    onClick={() => {
                        alert(`Your invoice will be delivered to your inbox`)
                        // toast({ status: "success", title: "Invoice", description: "Your invoice will be delivered to your inbox" })
                    }}
                >Request Invoice</Button>
            },
        },
    ]

    const data: Billing[] = [
        { id: "4566", subscription: "Demo", date: sub(new Date(), { months: 2 }), status: 1 },
        { id: "7890", subscription: "Pro Subscription", date: sub(new Date(), { months: 1 }), status: 1 },
        { id: "1234", subscription: "Pro Subscription", date: new Date(), status: 0 },
    ];


    return <AdvancedTable columns={billingColumns} data={data} showColumnChanger={true} filteredColumn={"id"} />
}