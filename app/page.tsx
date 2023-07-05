import Banner from '@/components/Banner'
import Breadcrumb from '@/components/Breadcrumb'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div
      className="
        h-full
        w-full
      "
    >
      <Header />
      <div className="w-full h-[1px] bg-neutral-200" />
      <main
        className="
          max-w-6xl
          mx-auto
          px-3
        "
      >
        <Breadcrumb />
        <Banner />
      </main>
    </div>
  )
}
