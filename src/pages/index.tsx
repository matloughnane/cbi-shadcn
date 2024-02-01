import { Button } from '@/components/ui/button'
import { MainNav } from '@/components/dashboard/main-nav'
import { ThemeToggle } from '@/components/dashboard/theme-toggle'
import { MetaHead } from '@/components/common/metahead'
import { Header } from '@/components/navigation/header'

export default function Home() {
  return (
    <>
      <MetaHead />
      <div className="flex-col md:flex h-full">
        <Header />
        {/* <SidebarNav defaultLayout={undefined}> */}
        <div className="mx-auto min-w-[960px] max-w-6xl flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              CharityBI
            </h1>
          </div>
          <h2>Welcome to CharityBI</h2>
          <p
          >We are a data platform for charities. We help you to connect your data, and provide you with the tools to analyse it.
          </p>
          <p>
            We are currently in beta, so please bear with us as we work to improve the platform.
          </p>
          <p>
            If you have any questions or feedback, please email <a href="#" color="blue">hello@charity.bi</a>
          </p>

          <div className="flex-1 space-x-4 pt-6">
            {["integrations", "export", "settings"]
              .map((string: string, index: number) => <a key={index} href={`/${string}`}>
                <Button size={"sm"}>
                  Go to {string.toUpperCase()}
                </Button>
              </a>)}
          </div>
        </div>
      </div >
    </>
  )
}
