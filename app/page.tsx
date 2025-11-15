// Components:
import Sidebar from './components/Sidebar'
import Step from './components/Step'

// Functions:
const Home = () => (
  <main className='flex justify-center items-center gap-1 w-screen h-screen p-2.5 bg-[#E8F0FD]'>
    <Sidebar />
    <Step />
  </main>
)

// Exports:
export default Home
