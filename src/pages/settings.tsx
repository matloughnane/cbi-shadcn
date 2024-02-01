import { MetaHead } from '@/components/common/metahead'
import Link from 'next/link'
import { LoggedInHeader } from '@/components/navigation/loggedin-header'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from "next/image";
import { ChevronRightIcon, DownloadIcon } from '@radix-ui/react-icons'
import { integration_data } from '@/constants/integration_data'
import { IntegrationData } from '@/models/IntegrationData'
import { CalendarDateRangePicker } from '@/components/dashboard/date-range-picker'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { UserTable } from '@/components/settings/usertable';
import { BillingTable } from '@/components/settings/billingtable';

export default function Integrations() {
    return (
        <>
            <MetaHead />
            <div className="flex-col md:flex h-full">
                <LoggedInHeader />
                <div className="mx-auto min-w-[960px] max-w-6xl flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Settings
                        </h1>
                    </div>

                    <div className='space-y-4 max-w-6xl min-w-[960px]'>
                        <Tabs defaultValue="accounts" className="">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="accounts">Account</TabsTrigger>
                                <TabsTrigger value="billing">Billing</TabsTrigger>
                                <TabsTrigger value="help">Help</TabsTrigger>
                            </TabsList>
                            <TabsContent value="accounts">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Manage Users</CardTitle>
                                        <CardDescription>
                                            {`Make changes to your account here. Click save when you're done.`}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2 pt-4">
                                        <UserTable />
                                        <hr />
                                        <div className="space-y-2 pt-6">
                                            <h4 className='font-bold text-lg'>Add New Users</h4>
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-bold uppercase">Name</h4>
                                                <Input id="name" placeholder="First Surname" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-bold uppercase">Email</h4>
                                                <Input id="username" placeholder="user@charity.bi" />
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Add User</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="billing">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Billing</CardTitle>
                                        <CardDescription>
                                            View and request your charities invoices.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2 pt-4">
                                        <BillingTable />
                                    </CardContent>
                                    <CardFooter>
                                        {/* <Button>Save password</Button> */}
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="help">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Help</CardTitle>
                                        <CardDescription>
                                            Basic help description, with a resource list.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">

                                    </CardContent>
                                    <CardFooter className='justify-end'>
                                        <Button variant={"link"}>Learn More <ChevronRightIcon className='ml-2' /></Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div >
        </>
    )
}
