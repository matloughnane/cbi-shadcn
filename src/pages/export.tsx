import { MetaHead } from '@/components/common/metahead'
import Link from 'next/link'
import { LoggedInHeader } from '@/components/navigation/loggedin-header'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from "next/image";
import { ChevronRightIcon, DownloadIcon } from '@radix-ui/react-icons'
import { integration_data } from '@/constants/integration_data'
import { IntegrationData } from '@/models/IntegrationData'
import { CalendarDateRangePicker } from '@/components/dashboard/date-range-picker'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button';

export default function Integrations() {
    return (
        <>
            <MetaHead />
            <div className="flex-col md:flex h-full">
                <LoggedInHeader />
                <div className="mx-auto min-w-[960px] max-w-7xl flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Export
                        </h1>

                    </div>
                    <p className='py-4'>Export all of the data from CharityBI for a simple upload to your CRM.
                    </p>
                    <div className='space-y-4'>
                        <h2 className='font-bold'>Pick A Date Range</h2>
                        <CalendarDateRangePicker />
                        <h2 className='font-bold'>Choose Source</h2>
                        {integration_data.map((id: IntegrationData, index: number) => {
                            return <Card key={index} className='w-[300px] flex flex-row'>
                                <CardContent className='flex flex-row gap-x-2 pt-4 pb-4'>
                                    <div className='aspect-square pr-3 align-bottom'>
                                        <Image src={id.logo} width={40} height={40} alt="" />
                                    </div>
                                    <div className='flex flex-row w-[200px] justify-between'>
                                        <div className='flex flex-col gap-y-2'>
                                            <CardTitle className='text-lg'>{`${id.name}`}</CardTitle>
                                            <Link href={`/integrations/${id.id}`}>
                                                <Badge variant={"outline"}>Connect<ChevronRightIcon className='ml-2' /></Badge>
                                                {/* <Button className='' variant={"outline"} size={"sm"}>Connect<ChevronRightIcon className='ml-2' /></Button> */}
                                            </Link>
                                        </div>
                                        <Checkbox />
                                    </div>
                                </CardContent>
                            </Card>
                        })}
                        <Button className='mt-4'>
                            <DownloadIcon className="mr-2" /> Download
                        </Button>
                    </div>
                </div>
            </div >
        </>
    )
}
