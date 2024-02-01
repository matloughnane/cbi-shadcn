import { Button } from '@/components/ui/button'
import { MetaHead } from '@/components/common/metahead'
import { LoggedInHeader } from '@/components/navigation/loggedin-header'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { integration_data } from '@/constants/integration_data'
import Image from "next/image";
import { CaretRightIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export const getStaticPaths: GetStaticPaths = async () => {
    // Generate the paths we want to pre-render based on integrations
    const paths = integration_data.map((integration) => ({
        params: { id: integration.id.toString() },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

export const getStaticProps = (async (context: any) => {

    const { id } = context.params!

    if (!id) {
        return {
            props: { integration: null }
        }
    }
    let available_integrations = integration_data.filter((intdata) => intdata.id == parseInt(id.toString()));
    // integration_data[0]
    // console.log(integration_data[0])

    return {
        props: { integration: available_integrations[0] }
    }
})

export default function IntegrationsById({
    integration,
}: InferGetStaticPropsType<typeof getStaticProps>) {

    if (integration == null) {
        return (
            <>
                <MetaHead />
                <div className="flex-col md:flex h-full">
                    <LoggedInHeader />
                    <div className="mx-auto max-w-6xl flex-1 space-y-4 p-8 pt-6">
                        <div className="flex items-center justify-between space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight">
                                Integration Unknown
                            </h1>
                        </div>
                    </div>
                </div >
            </>
        )
    }

    return (
        <>
            <MetaHead />
            <div className="flex-col md:flex h-full">
                <LoggedInHeader />
                <div className="mx-auto max-w-5xl flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <div className="flex items-center justify-start space-y-2">
                            <div className='aspect-square pr-3 align-bottom'>
                                <Image src={integration.logo} width={60} height={60} alt="" />
                                {/* {JSON.stringify(integration)} */}
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight pl-3">
                                {integration.name}
                            </h1>
                        </div>
                        <Button>Connect <ChevronRightIcon className='ml-2' /> </Button>
                    </div>
                    <Badge variant={"outline"}>Connection: {integration.connection_type == 0 ? " API" : " Scraper"}</Badge>
                    <hr />
                    <div className='flex space-x-2'>
                        <Card className=''>
                            <CardHeader className='text-3xl font-bold'>{`About ${integration.name}`}</CardHeader>
                            <CardContent>
                                {integration.description.split("\n").map((text: string, index: number) => <p key={index} className='pt-4'>{text}</p>)}
                            </CardContent>
                        </Card>
                        <Card className='w-[250px]'>
                            <CardHeader className='text-xl font-bold'>{`Resources`}</CardHeader>
                            <CardContent className='pt-4 space-y-2'>
                                <Button variant={"ghost"}>Learn More <ChevronRightIcon className='ml-2' /> </Button>
                                <Button variant={"ghost"}>Data Dictionary<ChevronRightIcon className='ml-2' /> </Button>
                                <Button variant={"ghost"}>Contact Us<ChevronRightIcon className='ml-2' /> </Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='flex space-x-2'>
                        <Button>Connect <ChevronRightIcon className='ml-2' /> </Button>
                        <Button variant={"ghost"}>Learn More <ChevronRightIcon className='ml-2' /> </Button>
                    </div>
                </div>
            </div >
        </>
    )
}
