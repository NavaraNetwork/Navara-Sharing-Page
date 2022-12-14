import Image from 'next/image'
import { useRouter } from 'next/router'
import IconError from '../../assets/icons/icon-error.svg'
import navaraLogo from '../../assets/logos/icon-navara.svg'
import Button from '../../src/commons/UI/Button'
const ErrorPage = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center bg-[#F3F4F6] dark:bg-[#0F172A] h-[100vh] overflow-y-auto ">
      <div className="hide-scrollbar border bg-white dark:bg-slate-900   w-[400px] overflow-y-scroll overflow-x-hidden p-7 pt-5 rounded-xl">
        <div className="flex justify-center ">
          <Image src={navaraLogo} width="30" height="30" className="mx-auto" alt="navara logo" />
          <span className="my-3 px-3 font-bold text-3xl dark:text-white">Navara</span>
        </div>
        <div className="my-10">
          <p className="text-2xl font-bold text-black dark:text-white">Page Not Found!</p>
          <p className="my-5 dark:text-gray-200">
            We are sorry, the page you requested could not be found. Please go back to the homepage
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={IconError} width="300px" height="300px" />
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={() => {
              router.push('/navara')
            }}
            styleMore="font-bold"
          >
            Back Homepage
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
