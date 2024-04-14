import Link from "next/link";
import { MainNav } from "../dashboard/main-nav";
import { ThemeToggle } from "../dashboard/theme-toggle";

export function Header() {
    return <div className="border-b">
        <div className="flex mx-auto h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center">
                <span className='text-sm text-blue-900 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100 cursor-pointer'>Sign Up</span>
                <Link href="/integrations"><span className='text-sm text-blue-900 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-100 cursor-pointer'>Log In</span></Link>
                <ThemeToggle />
            </div>
        </div>
    </div>
}