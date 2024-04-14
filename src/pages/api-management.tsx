import { AdvancedTable } from "@/components/common/table/AdvancedTable";
import { DashboardShell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Token } from "@/models/Token.t";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { CircleCheck, CircleX, Copy, EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";

const exampleTokens: Token[] = [
  {
    token_id: 1,
    charity_id: 93,
    token:
      "tkn_dev_763fdd7776372828c16d7120578340f76a7e2acb1f32af511598c0d796b49b53e3472189a8592b603e5b3c52261db5ff326eb9c3d58ab659145b85f2768fc3b9",
    created_by: 68,
    expired_by: null,
    is_expired: false,
    created_on: new Date("2024-04-14T08:08:29.173Z"),
    expired_on: null,
    is_deleted: false,
  },
  {
    token_id: 2,
    charity_id: 93,
    token:
      "tkn_dev_e90466fd54aa1f00f5609f4d766b0f4cbef962eaac65f6e476f82ae4b0447942fa66b8584966a4d4d373eeed5df19e433645ad0fd0ad204f12d03ffad2e62015",
    created_by: 68,
    expired_by: 68,
    is_expired: true,
    created_on: new Date("2024-04-14T08:08:41.783Z"),
    expired_on: new Date("2024-04-14T00:00:00.000Z"),
    is_deleted: false,
  },
];

export default function APIManagement() {
  //
  const [showTokenTable, setShowTokenTable] = useState<boolean>(false);
  //
  const [showToken, setShowToken] = useState<Token | null>(null);

  const tokenTableColumns: ColumnDef<Token>[] = [
    {
      id: "token_id",
      header: "ID",
      accessorKey: "token_id",
      enableHiding: false,
    },
    {
      id: "token",
      header: "Token",
      accessorKey: "token",
      enableHiding: false,
      cell: ({ value, row }: any) => {
        return (
          <div className="flex justify-between">
            <AlertDialog>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>API Token</AlertDialogTitle>
                  <AlertDialogDescription className="text-wrap">
                    <Textarea
                      className="w-full min-h-[9.5rem]"
                      contentEditable={false}
                      value={row.original.token}
                      readOnly
                    />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="justify-between">
                  <Button
                    variant={"default"}
                    size={"default"}
                    className="mr-4"
                    onClick={() => {
                      navigator.clipboard.writeText(row.original.token);
                      console.log("copied");
                    }}
                  >
                    <Copy className="w-4 h-4" />
                    <span className="ml-2">Copy Token</span>
                  </Button>
                  <AlertDialogCancel>Dismiss</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
              <pre className="pt-2">{`${row.original.token.slice(
                0,
                10
              )}...`}</pre>
              <AlertDialogTrigger asChild>
                <Button variant={"outline"} size={"sm"} className="mr-4">
                  <EyeIcon className="w-4 h-4" />
                </Button>
              </AlertDialogTrigger>
            </AlertDialog>
          </div>
        );
      },
    },
    {
      id: "created",
      header: "Date Created",
      accessorKey: "created_on",
      cell: ({ value, row }: any) => {
        // console.log(value);
        return format(new Date(row.original.created_on), "do MMM yyyy HH:mm");
        // return format(new Date(row.original.created_on), 'do MMM yyyy HH:mm');
      },
    },
    {
      id: "isActive",
      header: "Is Active",
      accessorKey: "is_expired",
      cell: ({ value, row }: any) => {
        return row.original.is_expired == false ? (
          <div className="flex flex-row">
            <CircleCheck color="green" className="w-4 h-4" />
            <span className="pl-2">Active</span>
          </div>
        ) : (
          <div className="flex flex-row">
            <CircleX color="grey" className="w-4 h-4" />
            <span className="pl-2">Expired</span>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "token_id",
      cell: ({ value, row }: any) => {
        // return <p>{row.original.token_id}</p>
        return row.original.is_expired ? (
          <span>No Actions Available</span>
        ) : (
          <Button size={"sm"} variant={"destructive"}>
            Expire Token
          </Button>
        );
      },
    },
  ];

  return (
    <DashboardShell>
      <div className="flex items-center">
        <div className="flex grow flex-row justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold md:text-2xl">API Tokens</h1>
            <p className="py-4">Manage your tokens for the CharityBI API</p>
          </div>
          <div>
            <Button
              className="mt-4"
              onClick={() => setShowTokenTable(!showTokenTable)}
            >
              Generate First Token
            </Button>
          </div>
        </div>
      </div>
      {showTokenTable ? (
        <>
          <AdvancedTable
            columns={tokenTableColumns}
            data={exampleTokens}
            showColumnChanger={false}
            filteredColumn={""}
          />
        </>
      ) : (
        <>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no API tokens yet.
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start making API calls as soon as you generate your
                first token
              </p>
              <Button
                className="mt-4"
                onClick={() => setShowTokenTable(!showTokenTable)}
              >
                Generate First Token
              </Button>
            </div>
          </div>
        </>
      )}
    </DashboardShell>
  );
}
