import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { datetimestamp } from '../../../utils/datetime';
import Image from 'next/image';
import { provinces } from '../../../utils/provinces';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik';

type TBookingFormValues = {
    firstname: string,
    lastname: string,
    business_name: string,
    email: string,
    phone: string,
    phoneNumber2: string,
    address: string,
    address_2: string,
    city: string,
    state: string,
    zip: string,
    customer_id: string;
}

const BookingFormValidationSchema = Yup.object({
    firstname: Yup.string()
        .required('First Name is required'),
    lastname: Yup.string()
        .required('Last Name is required'),
    business_name: Yup.string(),
    email: Yup.string()
        .email("Email is invalid!")
        .required("Email is required!"),
    phone: Yup.string()
        .required('Phone Number is required'),
    phoneNumber2: Yup.string(),
    address: Yup.string()
        .required('Address is required'),
    address_2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zip: Yup.string(),
    customer_id: Yup.string(),
})

const customUUID = uuidv4();
function CustomerDetails() {
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
    const [gspnProvince, setGSPNProvince] = useState("")
    const [provinceFocus, setProvinceFocus] = useState(false)
    const [zip, setZip] = useState("");


    const initialValues: TBookingFormValues = {
        firstname: "",
        lastname: "",
        business_name: "",
        email: "",
        phone: "",
        phoneNumber2: "",
        address: "",
        address_2: "",
        city: "",
        state: "",
        zip: "",
        customer_id: ""
    }
    const router = useRouter()

    const createEntry = async (customerId: string | number) => {
        const createdAt = datetimestamp;
        const values = {
            customerId,
            firstname,
            lastname,
            businessname,
            email,
            phoneNumber,
            phoneNumber2,
            address,
            address2,
            city,
            state,
            zip,
            createdAt,
            customUUID
        }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/entry`, values);
            // console.log('Data created successfully:', response.data);
            return response.data; // Optionally return the updated data
        } catch (error) {
            console.error('Error creating data:', error);

        }
    }

    const createCustomer = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        var values = {
            "firstname": firstname,
            "lastname": lastname,
            "businessname": businessname,
            "email": email,
            "phone": phoneNumber,
            "address": address,
            "address_2": address2,
            "city": city,
            "state": state,
            "zip": zip,
        }
        // console.log(values)
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/customers`, values, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
                },
            })

            // console.log(data);
            let customerId = data?.customer?.id;

            // Convert the custInfo object to a JSON string
            // values['customer_id'] = `${customerId}`
            const spreadCustomer = {
                ...values,
                customerId: `${customerId}`
            }
            const custInfoString = JSON.stringify(spreadCustomer);

            createEntry(customerId);
            if (typeof window !== "undefined" && window.localStorage) {
                window.localStorage.setItem("custInfo", custInfoString);
                // console.log('Dummy object stored successfully!');

                // router.push("/device_inspection")
                router.push("/assets")
            }


        } catch (error: any) {
            // console.log(error)
        }


    }

    return (



        <>
            <Head>
                <title>Booking Form | MM ALL ELECTRONICS</title>
            </Head>


            <div className="w-[90%] mx-auto p-2">
                <Image
                    className='mx-auto py-3'
                    src={"/mmlogo.png"}
                    alt="allelectronics logo"
                    width={100}
                    height={40}
                    priority={true}
                />

                <h1 className="my-4 text-3xl antialiased font-extrabold leading-none tracking-tight text-gray-900 text-center underline underline-offset-5 decoration-5 decoration-blue-400">Create customer</h1>

                <form onSubmit={createCustomer}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label htmlFor='firstname'>First Name</label>
                            <input type="text" name='firstname' id='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='lastname'>Last Name</label>
                            <input type="text" id='lastname' name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='email'>Email</label>
                            <input type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label htmlFor='business_name'>Business Name</label>
                            <input type="text" id='business_name' name='business_name' value={businessname} onChange={(e) => setBusinessname(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone">Phone </label>
                            <input type="text" id="phone" name="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />


                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber2">Phone (alternative)</label>
                            <input type="text" id="phoneNumber2" name="phoneNumber2" value={phoneNumber2} onChange={(e) => setPhoneNumber2(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                        </div>


                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="mb-4">
                            <label htmlFor='address'>Address 1</label>
                            <input type="text" id='address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                        </div>
                        <div className="mb-4">
                            <label htmlFor='address_2'>Address 2</label>
                            <input type="text" name='address_2' id='address_2' value={address2} onChange={(e) => setAddress2(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label htmlFor='city'>City</label>
                            <input type="text" name='city' id='city' value={city} onChange={(e) => setCity(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                        </div>
                        <div className="mb-4">
                            <label htmlFor='state'>Province</label>
                            <select
                                // required
                                // aria-required
                                name='state'
                                id="state"
                                value={state} onChange={(e) => setState(e.target.value)}
                                className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                                <option disabled value="">
                                    Choose province
                                </option>
                                {provinces.map((province) => (
                                    <option key={province.label} value={`${province.label}`}>
                                        {province?.label}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className="mb-4">
                            <label htmlFor='zip'>Zip /Postal code</label>
                            <input type="text" id="zip" name="zip" value={zip} onChange={(e) => setZip(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                        </div>
                    </div>

                    <button type="submit" className="items-center gap-2 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-centerfocus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 me-2 mb-2">
                        Create customer
                    </button>



                </form>
            </div>
        </>
    )
}

export default CustomerDetails
