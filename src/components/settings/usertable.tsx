import { User } from "@/models/User.t"
import { Badge } from "../ui/badge"
import { format } from "date-fns"
import { ColumnDef } from "@tanstack/react-table"
import { AdvancedTable } from "../common/table/AdvancedTable"

const accountColumns: ColumnDef<User>[] = [
    {
        id: "name",
        header: "Name",
        accessorKey: "name",
        enableHiding: false
    },
    {
        id: "email",
        header: "Email",
        accessorKey: "email",
        enableHiding: false
    },
    {
        id: "role",
        header: "Role",
        accessorKey: "role",
        cell: ({ row }) => {
            return <Badge className="cursor-pointer" variant={row.original.role == 1 ? "default" : "secondary"}>{row.original.role == 1 ? "Owner" : "Read-Only"}</Badge>
        }
    },
    {
        id: "date_created",
        header: "Date Created",
        accessorKey: "date_created",
        cell: ({ row }) => {
            // return <Text>{row.original.date_created}</Text>
            return <span>{format(new Date(row.original.date_created), "do MMM yyyy")}</span>
        },
        enableHiding: true
    },
]

const users: User[] = [
    { name: "Matthew Loughnane", email: "mat@charity.bi", role: 0, date_created: new Date() },
    { name: "Sean Donnelly", email: "sean@charity.bi", role: 1, date_created: new Date() }
]


export function UserTable() {
    // return <p>{JSON.stringify(accountColumns)}</p>
    return <AdvancedTable columns={accountColumns} data={users} showColumnChanger={true} filteredColumn={"name"} />
}
