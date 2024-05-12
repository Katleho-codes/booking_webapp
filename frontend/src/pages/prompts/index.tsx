import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

function Prompts() {

    const router = useRouter();


    return (
        <>
            <Head>
                <title>Prompts | MM ALL ELECTRONICS</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-screen bg-white w-30">
                <h3 className='text-xl font-bold text-gray-900 my-4 text-center'>Have you booked anything here before?</h3>
                <Link href="/search" className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2'>Yes, I have</Link>
                <Link href="/booking_form" className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2'>No, first time</Link>
            </div>
        </>
    )
}

export default Prompts
