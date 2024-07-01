import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='min-h-screen overflow-x-hidden flex flex-col'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <section className='w-full'>{children}</section>
      </div>
    </main>
  )
}
