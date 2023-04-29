import HeroTitle from './(component)/HeroTitle'
import SearchBar from './(component)/SearchBar'
import BottomWave1 from './(component)/waves/BottomWave1'
import BottomWave2 from './(component)/waves/BottomWave2'

const HeroContainer = () => {
  return (
    <main className="flex align-middle relative px-mobilex h-full w-full overflow-y-hidden bg-gradient">
      <div className="mt-[10rem] w-full text-center">
        <HeroTitle title={`Earth's wildlife at your fingertips.`} />
        <div className="w-full mt-[3rem] md:max-w-xl lg:max-w-2xl m-auto transition-all">
          <SearchBar type={'normal'} />
          <div className="mx-mobilex min-w-0 md:w-auto">
          </div>
        </div>
      </div>
      <BottomWave1 />
      <BottomWave2 />
    </main>
  )
}

export default function Home() {
  return (
    <>
      <HeroContainer />
    </>
  )
}
