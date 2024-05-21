import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";


const inter = Inter({ subsets: ["latin"] });

function Home() {

  const router = useRouter()
  const onClick = () => {
    router.push("/prompts")
  }

  return (
    <>
      <Head>
        <title>Home | MM ALL ELECTRONICS</title>
      </Head>
      <Sidebar />
      <main className="h-screen flex flex-col justify-center items-center gap-4 bg-gray-100">
        <div>
          <h4 className="text-center text-lg text-gray-500 my-0">Welcome to</h4>
          <Image
            className='mx-auto'
            src={"/samsung_logo.svg"}
            alt="samsung logo"
            width={300}
            height={40}
            priority={true}
          />
          <p className="text-center my-0 text-gray-500 font-medium">Customer service</p>
        </div>
        <h1 className="text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 underline underline-offset-9 decoration-5 decoration-blue-400 dark:decoration-blue-600 mb-4">MM ALL ELECTRONICS</h1>
        <button onClick={onClick} type="button" className="flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center">Start process</button>
      </main>

    </>
  )
}

export default Home
