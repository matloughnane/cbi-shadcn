import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-2 lg:space-x-2", className)}
            {...props}
        >
            <h1 className="font-bold text-xl">CharityBI</h1>
            <Badge variant={"secondary"}>BETA</Badge>
        </nav>
    )
}