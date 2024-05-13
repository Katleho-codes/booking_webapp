import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { datetimestamp } from '../../../utils/datetime';
type TSearchCustomer = {
    id: number;
    firstname: string;
    lastname: string;
    businessname: string;
    email: string;
    phone: string;
    mobile: string;
}

const customUUID = uuidv4();
function SearchCustomer() {
    const [searchCustomer, setSearchCustomer] = useState("");
    const [result, setResult] = useState<TSearchCustomer[] | any>([]);
    const [customerId, setCustomerId] = useState("")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [businessname, setBusinessname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumber2, setPhoneNumber2] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("")


    const router = useRouter()

    useEffect(() => {
        const checkIfCustomerWasHere = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/customers?query=${searchCustomer}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
                    },
                })
                // console.log(data)
                if (data?.customers[0]?.email || data?.customer[0]?.phone === searchCustomer) {
                    setResult(data?.customers)
                    setCustomerId(data?.customers[0]?.id)
                    setFirstname(data?.customers[0]?.firstname)
                    setLastname(data?.customers[0]?.lastname)
                    setBusinessname(data?.customers[0]?.business_name)
                    setEmail(data?.customers[0]?.email)
                    setPhoneNumber(data?.customers[0]?.mobile);
                    setPhoneNumber2(data?.customers[0]?.phone);
                    setAddress(data?.customers[0]?.address);
                    setAddress2(data?.customers[0]?.address_2);
                    setCity(data?.customers[0]?.city);
                    setState(data?.customers[0]?.state);
                    setZip(data?.customers[0]?.zip);
                }
            } catch (error) {
                // console.log("search repair customer error", error)
            }

        }
        checkIfCustomerWasHere()
    }, [searchCustomer])

    const createEntry = async () => {
        const createdAt = datetimestamp;
        const values = {
            firstname, lastname, businessname, email, phoneNumber, phoneNumber2, createdAt, customUUID, address, address2, city, state, zip
        }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/entry`, values);
            // console.log('Data created successfully:', response.data);
            return response.data; // Optionally return the updated data
        } catch (error) {
            // console.error('Error creating data:', error);
            throw error; // Re-throw the error to handle it in the calling code
        }
    }
    const addExistingCustomer = async () => {
        const custInfo = {
            customerId: customerId,
            email: email,
            customUUID: customUUID,
            firstname: firstname,
            lastname: lastname,
            businessname: businessname,
            phoneNumber: phoneNumber,
            phoneNumber2: phoneNumber2,
            address: address,
            address2: address2,
            city: city,
            state: state,
            zip: zip
        };
        // console.log(custInfo)
        // Convert the custInfo object to a JSON string
        const custInfoString = JSON.stringify(custInfo);
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem("custInfo", custInfoString);
            // console.log('Dummy object stored successfully!');
            createEntry();
            // router.push("/device_inspection")
            router.push("/assets")
        }
    }
    return (
        <>

            <Head>
                <title>Search customer | MM ALL ELECTRONICS</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-screen bg-white border w-30 border-sky-500">
                <h4 className="text-3xl font-bold mb-2 text-center dark:text-gray-700">Search customer</h4>
                <p className='tracking-tighter text-gray-500 md:text-lg dark:text-gray-400'>Email or phone number</p>
                <div className="">
                    <input
                        value={searchCustomer}
                        onChange={(e) => setSearchCustomer(e.target.value)}
                        autoComplete='false'
                        type="text"
                        placeholder="Search..."
                        className="w-full py-3 px-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-center flex-col text-center">
                    {
                        searchCustomer === result[0]?.email || searchCustomer === result[0]?.phone || searchCustomer === result[0]?.mobile ? (
                            result.map((x: any) => (
                                <div
                                    className="my-2"
                                    key={x.id}
                                >
                                    <p
                                        className='font-medium text-gray-800'

                                    >
                                        {x?.fullname}
                                    </p>
                                    <p
                                        className='font-medium text-gray-800'

                                    >
                                        {x?.email}
                                    </p>
                                    <p
                                        className='font-medium text-gray-800'

                                    >
                                        {x?.phone} {x?.mobile}
                                    </p>
                                </div>
                            ))
                        ) : null
                    }

                    {searchCustomer === result[0]?.email || searchCustomer === result[0]?.phone || searchCustomer === result[0]?.mobile ?
                        <button type='button' onClick={addExistingCustomer} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Add customer</button> : null}

                    {searchCustomer === result[0]?.email || searchCustomer === result[0]?.phone || searchCustomer === result[0]?.mobile ? null :
                        <div>
                            <small className="block text-gray-500 text-center">Cannot find customer?</small>
                            <Link href="/booking_form" className='text-center font-medium text-blue-600'>Create customer</Link>
                        </div>}
                </div>
            </div>
        </>
    );
}

export default SearchCustomer
