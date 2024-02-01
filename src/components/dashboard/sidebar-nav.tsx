"use client"
import { useState } from "react"

import { SideNav } from "@/components/dashboard/side-nav"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ArchiveIcon, CardStackIcon, EnvelopeClosedIcon, EraserIcon, ExclamationTriangleIcon, FileIcon, PaperPlaneIcon, PersonIcon, RocketIcon, SquareIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback } from "../ui/avatar"

export function SidebarNav({ defaultLayout = [265, 440, 655], children }: {
    defaultLayout: number[] | undefined,
    children: any
}) {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    return <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes: number[]) => {
                document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                    sizes
                )}`
            }}
            // className="h-full 
            // // max-h-[800px] 
            // items-stretch"
            className="h-screen 
            items-stretch"
        >
            <ResizablePanel
                defaultSize={defaultLayout[0]}
                collapsedSize={4}
                collapsible={true}
                minSize={15}
                maxSize={20}
                onCollapse={() => {
                    setIsCollapsed(true)
                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                        true
                    )}`
                }}
                onExpand={() => {
                    setIsCollapsed(false)
                    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                        false
                    )}`
                }}
                className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
            >
                <div className={cn("flex h-16 items-center justify-center", isCollapsed ? 'h-16' : 'px-4')}>
                    {isCollapsed ? <Avatar >
                        <AvatarFallback>AF</AvatarFallback>
                    </Avatar> : <span className="font-medium">Arranmore Ferry</span>}
                    {/* <AccountSwitcher isCollapsed={isCollapsed} accounts={[]} /> */}
                    {/* <Button variant={"ghost"} onClick={() => {
                        if (isCollapsed) {
                            setIsCollapsed(false)
                            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                false
                            )}`
                        } else {
                            setIsCollapsed(true)
                            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                                true
                            )}`
                        }
                    }}>Collapse</Button> */}
                </div>
                <Separator />
                <SideNav
                    isCollapsed={isCollapsed}
                    links={[
                        {
                            title: "Inbox",
                            label: "128",
                            icon: EnvelopeClosedIcon,
                            variant: "default",
                        },
                        {
                            title: "Drafts",
                            label: "9",
                            icon: FileIcon,
                            variant: "ghost",
                        },
                        {
                            title: "Sent",
                            label: "",
                            icon: PaperPlaneIcon,
                            variant: "ghost",
                        },
                        {
                            title: "Junk",
                            label: "23",
                            icon: ArchiveIcon,
                            variant: "ghost",
                        },
                        {
                            title: "Trash",
                            label: "",
                            icon: EraserIcon,
                            variant: "ghost",
                        },
                        {
                            title: "Archive",
                            label: "",
                            icon: CardStackIcon,
                            variant: "ghost",
                        },
                    ]}
                />
                <Separator />
                <SideNav
                    isCollapsed={isCollapsed}
                    links={[
                        {
                            title: "Social",
                            label: "972",
                            icon: PersonIcon,
                            variant: "ghost",
                        },
                        {
                            title: "Updates",
                            label: "342",
                            icon: ExclamationTriangleIcon,
                            variant: "ghost",
                        },
                        {
                            title: "Forums",
                            label: "128",
                            icon: SquareIcon,
                            variant: "ghost",
                        },
                        {
                            title: "Shopping",
                            label: "8",
                            icon: RocketIcon,
                            variant: "ghost",
                        },
                        {
                            title: "Promotions",
                            label: "21",
                            icon: PersonIcon,
                            variant: "ghost",
                        },
                    ]}
                />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                {children}
            </ResizablePanel>
        </ResizablePanelGroup>
    </TooltipProvider >
}