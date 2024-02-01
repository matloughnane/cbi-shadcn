import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { MainNav } from '@/components/dashboard/main-nav'
import { ThemeToggle } from '@/components/dashboard/theme-toggle'
import { MetaHead } from '@/components/common/metahead'
import Link from 'next/link'
import { LoggedInHeader } from '@/components/navigation/loggedin-header'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CafLogo } from '@/constants/images'
import Image from "next/image";
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { integration_data } from '@/constants/integration_data'
import { IntegrationData } from '@/models/IntegrationData'

export default function Integrations() {
    return (
        <>
            <MetaHead />
            <div className="flex-col md:flex h-full">
                <LoggedInHeader />
                <div className="mx-auto min-w-[960px] max-w-7xl flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Integrations
                        </h1>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        {integration_data.map((id: IntegrationData, index: number) => {
                            return <Card key={index} className='w-72'>
                                <CardContent className='flex flex-row gap-x-2 pt-4 pb-4'>
                                    <div className='aspect-square pr-3 align-bottom'>
                                        <Image src={id.logo} width={60} height={60} alt="" />
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <CardTitle className='text-2xl'>{`${id.name}`}</CardTitle>
                                        <Link href={`/integrations/${id.id}`}>
                                            <Button className='' variant={"outline"} size={"sm"}>Connect<ChevronRightIcon className='ml-2' /></Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}
