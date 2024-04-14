import Link from "next/link";
import { MainNav } from "../dashboard/main-nav";
import { ThemeToggle } from "../dashboard/theme-toggle";
import { DownloadIcon, GearIcon, UploadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function LoggedInHeader() {
    return <div className="border-b">
        <div className="flex mx-auto h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-8">
                <Link href="/">
                    <span className='text-sm text-blue-900 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100 cursor-pointer'>Overview</span>
                </Link>
                <Link href="/integrations">
                    <span className='text-sm text-blue-900 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100 cursor-pointer'>Integrations</span>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link href="/export">
                        <Button >
                            {/* <UploadIcon /> */}
                            <DownloadIcon className="mr-2" /> Export
                        </Button>
                    </Link>
                    <Link href="/settings">
                        <Button size="icon" variant="outline" >
                            <GearIcon />
                        </Button>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    </div>
}