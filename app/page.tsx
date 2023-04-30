import HeroTitle from './(components)/HeroTitle'
import SearchBar from './(components)/SearchBar'
import BottomWave1 from './(components)/waves/BottomWave1'
import BottomWave2 from './(components)/waves/BottomWave2'

const HeroContainer = () => {
  return (
    <main className="flex align-middle relative px-mobilex h-full w-full overflow-y-hidden">
      <div className="m-auto mt-[15rem] w-full text-center">
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
    <div className='absolute inset-0'>
      <HeroContainer />
    </div>
  )
}
