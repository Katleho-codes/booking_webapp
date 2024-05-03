import Container from '@/components/Container';
import { useRouter } from 'next/router';

import React, { useState } from 'react'
import { useFetchTicketById } from '../../../../hooks/useFetch';
import { HHPSymptom1, HHPSymptom2A, HHPSymptom2B, HHPSymptom2C, HHPSymptom2D, HHPSymptom2E, HHPSymptom2F, HHPSymptom2G, HHPSymptom2H, HHPSymptom2I, HHPSymptom2J, HHPSymptom2K, HHPSymptom2L, HHPSymptom2M, HHPSymptom2N, HHPSymptom2O, HHPSymptom2P, HHPSymptom2Q, HHPSymptom3A, HHPSymptom3B, HHPSymptom3C, HHPSymptom3CA, HHPSymptom3CB, HHPSymptom3CC, HHPSymptom3CD, HHPSymptom3CE, HHPSymptom3CF, HHPSymptom3CG, HHPSymptom3CH, HHPSymptom3CI, HHPSymptom3CJ, HHPSymptom3CK, HHPSymptom3CL, HHPSymptom3CM, HHPSymptom3CN, HHPSymptom3CO, HHPSymptom3CP, HHPSymptom3CQ, HHPSymptom3CR, HHPSymptom3CS, HHPSymptom3CT, HHPSymptom3CU, HHPSymptom3CV, HHPSymptom3CW, HHPSymptom3CX, HHPSymptom3CY, HHPSymptom3D, HHPSymptom3DA, HHPSymptom3DB, HHPSymptom3DC, HHPSymptom3DD, HHPSymptom3DE, HHPSymptom3DF, HHPSymptom3DH, HHPSymptom3DI, HHPSymptom3DJ, HHPSymptom3DK, HHPSymptom3DL, HHPSymptom3DM, HHPSymptom3DN, HHPSymptom3DO, HHPSymptom3DP, HHPSymptom3DQ, HHPSymptom3DR, HHPSymptom3DS, HHPSymptom3DT, HHPSymptom3DU, HHPSymptom3DV, HHPSymptom3DW, HHPSymptom3DX, HHPSymptom3DY, HHPSymptom3DZ, HHPSymptom3E, HHPSymptom3EA, HHPSymptom3EB, HHPSymptom3EC, HHPSymptom3ED, HHPSymptom3EE, HHPSymptom3EF, HHPSymptom3EG, HHPSymptom3EH, HHPSymptom3EI, HHPSymptom3EJ, HHPSymptom3EK, HHPSymptom3EL, HHPSymptom3EM, HHPSymptom3EN, HHPSymptom3EO, HHPSymptom3EP, HHPSymptom3EQ, HHPSymptom3F, HHPSymptom3FL, HHPSymptom3FM, HHPSymptom3FN, HHPSymptom3FO, HHPSymptom3FP, HHPSymptom3FR, HHPSymptom3FS, HHPSymptom3G, HHPSymptom3H, HHPSymptom3I, HHPSymptom3J, HHPSymptom3K, HHPSymptom3L, HHPSymptom3M } from '../../../../utils/gspn_hhp_symptoms';
import moment from 'moment';
import axios from 'axios';
import { serviceTypes } from '../../../../utils/service_types';
import Head from 'next/head';

function EditHHPTicket() {
    const [symptom1, setSymptom1] = useState("")
    const [symptom1Label, setSymptom1Label] = useState("")
    const [symptom2, setSymptom2] = useState("")
    const [symptom2Label, setSymptom2Label] = useState("")
    const [symptom3, setSymptom3] = useState("")
    const [symptom3Label, setSymptom3Label] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")
    const [accessory, setAccessory] = useState("")
    const modifiedPurchaseDate = moment(purchaseDate).format("YYYYMMDD");
    const [serviceType, setSetServiceType] = useState("")


    const [getServiceOrderNumber, setGetServiceOrderNumber] = useState("")
    // console.log(purchaseDate === "" ? "" : modifiedPurchaseDate)
    const router = useRouter();
    const { id } = router?.query;

    const { getTicketByid, getTicketByidError } = useFetchTicketById(id)

    const { unique_id, customer_fullname, customer_firstname, customer_lastname, customer_email, customer_phone, phone_number_2, customer_address, customer_address_2, customer_city, customer_state, customer_zip, unit_fault, fault_occurence, type_of_unit, ticket_number, imei, backup_needed, model_number, serial_number, warranty_period, service_order_number, created_date, department } = getTicketByid[0] || {}

    const onChangeSymp1 = (e: any) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex];
        const selectedLabel = selectedOption.text;
        setSymptom1Label(selectedLabel)
        setSymptom1(e.target.value)
    }
    const onChangeSymp2 = (e: any) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex];
        const selectedLabel = selectedOption.text;
        setSymptom2Label(selectedLabel)
        setSymptom2(e.target.value)
    }
    const onChangeSymp3 = (e: any) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex];
        const selectedLabel = selectedOption.text;
        setSymptom3Label(selectedLabel)
        setSymptom3(e.target.value)
    }


    const patchServiceOrder = async () => {
        const values = { getServiceOrderNumber }
        try {
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/${id}`, values); // Replace with your API endpoint
            // console.log('Updated data:', response.data);
            // Optionally, you can update the state with the response data to reflect the changes
            // console.log("patch data", response.data);
        } catch (error) {
            // console.error('Error updating data:', error);
        }
    }

    const createServiceOrder = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const generateTimeStampForPacCode = moment(new Date(
            Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
        )
            .toISOString()
            .replace("T", " ")
            .replace("Z", "")).format("YYMMDDhhmmss");
        const todaysDate = moment(new Date(
            Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
        )
            .toISOString()
            .replace("T", " ")
            .replace("Z", "")).format("YYYYMMDD");
        const timeNow = moment(new Date(
            Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
        )
            .toISOString()
            .replace("T", " ")
            .replace("Z", "")).format("hhmmss");

        const values = {
            "IsCommonHeader": {
                "Company": `${process.env.NEXT_PUBLIC_IPAAS_COMPANY}`,
                "AscCode": `${process.env.NEXT_PUBLIC_IPAAS_ASC_CODE}`,
                "Lang": `${process.env.NEXT_PUBLIC_IPAAS_LANG}`,
                "Country": `${process.env.NEXT_PUBLIC_IPAAS_COUNTRY}`,
                "Pac": `9999999${generateTimeStampForPacCode}`
            },
            "IvCreationCheck": `${todaysDate}`,
            "IsHeaderInfo": {
                "AscJobNo": ""
            },
            "IsBpInfo": {
                "CustomerCode": "",
                "Addrnumber": ""
            },
            "IsModelInfo": {
                "Model": `${model_number}`,
                "SerialNo": `${serial_number}`,
                "IMEI": `${imei}`,
                "PurchaseDate": `${modifiedPurchaseDate === "Invalid date" ? "" : modifiedPurchaseDate}`,
                "Accessory": `${accessory}`,
                "DefectDesc": `${unit_fault}`,
                "Remark": "",
                "WtyException": ""
            },
            "IsJobInfo": {
                "SymCode1": `${symptom1}`,
                "SymCode2": `${symptom2}`,
                "SymCode3": `${symptom3}`,
                "SvcType": `${serviceType}`,
                "QueueTokenNo": "",
            },
            "IsDateInfo": {
                "RequestDate": `${todaysDate}`,
                "RequestTime": `${timeNow}`,
                "UntRecvDate": `${todaysDate}`,
                "UntRecvTime": `${timeNow}`,
                "FirstAppDate": `${todaysDate}`,
                "FirstAppTime": `${timeNow}`
            },
            "IsWtyInfo": {
                "WtyConsType": ""
            },
            "IsBpDetail": {
                "CustFirstName": `${customer_firstname}`,
                "CustLastName": `${customer_lastname}`,
                "CustHomePhone": `${phone_number_2}`,
                "CustOfficePhone": "",
                "CustMobilePhone": `${customer_phone}`,
                "CustEmail": `${customer_email}`,
                "CustAddrStreet2": `${customer_address_2}`,
                "CustAddrStreet1": `${customer_address}`,
                "CustCity": `${customer_city}`,
                "CustState": "GP",
                "CustZipcode": `${customer_zip}`,
                "Country": "SA"
            }
        }
        // console.log(values)
        await axios.post(`${process.env.NEXT_PUBLIC_IPAAS_LINK}/CreateSO/1.0/ImportSet`, values, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_IPAAS_TOKEN} `
            },
        }).then(function (response) {
            // console.log(response)
            if (response?.data?.Return?.EsCommonResult?.Codedesc === 'OK') {
                alert(response?.data?.Return?.EvRetMsg);
                setGetServiceOrderNumber(response?.data?.Return?.EvSvcOrderNo);
                patchServiceOrder();

            }

        })
            .catch(function (error: any) {
                // console.log(error)
            });

    }
    return (
        <>
            <Head>
                <title>Edit ticket</title>
            </Head>
            <Container>
                <span className="flex items-center justify-between my-5">
                    <button
                        type="button"
                        onClick={() => history.back()}
                        className="bg-[#273e47] font-semibold text-white hover:bg-[#273e47bd] rounded-sm text-sm  py-1 px-2.5 text-center"
                    >
                        Back
                    </button>

                    <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center">Edit HHP Ticket</h1>

                    <div />
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="card rounded-sm shadow-sm p-2 bg-white h-full">
                        <h2 className='text-gray-800 font-bold my-3 text-xl'>Customer details</h2>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Full name</small> {customer_fullname}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Email</small> {customer_email}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Phone</small> {customer_phone}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Phone (alternative)</small> {phone_number_2}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Address</small> {customer_address}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Address (alternative)</small> {customer_address_2}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Address (alternative)</small> {customer_city}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Address (alternative)</small> {customer_state}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Address (alternative)</small> {customer_zip}</p>

                    </article>
                    <article className="card rounded-sm shadow-sm p-2 bg-white">
                        <h2 className='text-gray-800 font-bold my-3 text-xl'>Ticket details</h2>
                        <p className='text-gray-900 font-semibold text-sm my-2 '><small className='font-normal text-gray-500 text-xs'>Ticket no:</small> {ticket_number}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Service order no:</small> {service_order_number}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Fault:</small> {unit_fault}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>How often:</small> {fault_occurence}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Type:</small> {type_of_unit}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>IMEI:</small> {imei}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Needs backup:</small> {backup_needed === true && "Yes"}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Model:</small> {model_number}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Serial number:</small> {serial_number}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Warranty:</small> {warranty_period}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Created:</small> {created_date}</p>
                        <p className='text-gray-900 font-semibold text-sm my-2'><small className='font-normal text-gray-500 text-xs'>Department:</small> {department}</p>

                        <div>
                            <span className="my-4">
                                <input value={purchaseDate} onChange={(e) => {
                                    setPurchaseDate(e.target.value)
                                }} type="date" name="purchaseDate" id="purchaseDate" className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-2.5" />
                            </span>
                            <span className="my-4">
                                <input value={accessory} onChange={(e) => {
                                    setAccessory(e.target.value)
                                }} placeholder="Accessories" type="text" name="accessory" id="accessory" className="mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5" />
                            </span>
                            <div className="my-4">
                                <select
                                    // required
                                    // aria-required
                                    name='serviceType'
                                    id="serviceType"
                                    value={serviceType} onChange={(e) => setSetServiceType(e.target.value)}
                                    className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                >
                                    <option disabled value="">
                                        Choose service type
                                    </option>
                                    {serviceTypes.map((x) => (
                                        <option key={x._value} value={`${x._value}`}>
                                            {x?._name}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            {/* Symptom 1 */}
                            <div className="my-4">
                                <select
                                    // required
                                    // aria-required
                                    name='symptom1'
                                    id="symptom1"
                                    value={symptom1} onChange={onChangeSymp1}
                                    className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                >
                                    <option disabled value="">
                                        Choose symptom 1
                                    </option>
                                    {HHPSymptom1.map((x) => (
                                        <option key={x._name} value={`${x.value}`}>
                                            {x?._name}
                                        </option>
                                    ))}
                                </select>

                            </div>


                            {/* Symptom 2 */}
                            <div>
                                {symptom1 === "02" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2Q.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "05" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2A.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "AS" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2C.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L1" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2D.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L2" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2E.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L3" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2F.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L4" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2G.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L5" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2H.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L6" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2I.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L7" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2J.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L8" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2K.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "L9" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2L.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "LA" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2M.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "LB" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2N.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "LC" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2O.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>}
                                {symptom1 === "Z1" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom2'
                                        id="symptom2"
                                        value={symptom2} onChange={onChangeSymp2}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 2
                                        </option>
                                        {HHPSymptom2P.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                            </div>
                            {/* Symptom 3 */}

                            <div className="my-4">
                                {symptom2Label === "01 - [Usage (How to Start)]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3F.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Usage (function)]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3G.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Usage (How to Stop)]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3H.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [Quality/Trouble (Website)]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3I.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "05 - [Quality/Trouble (Function)]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3J.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Usage]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3K.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Installation]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3L.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [Quality/Trouble)]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3M.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Information about Software Update]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CA.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Problems after downloading update]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CB.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Turn on/off]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CC.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [No charge]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CD.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Intermittent Power]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CE.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [Quick discharge]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CF.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Carrier Lock]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CG.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [SIM Card Lock]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CH.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Device Lock]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CI.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [Non technical]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CJ.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Touch screen]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CK.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Defective color]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CL.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Display color tone]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CM.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Coverage problems]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CN.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Sound problems]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CO.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Non technical]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CP.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Bluetooth]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CQ.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Mobile data]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CR.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [PC= KIES / Kiers Air / New PC Studio / PC Studio]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [PC = Massive storage]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CT.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "05 - [TV connection]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CU.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "06 - [Wireless connection]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CV.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "07 - [NFC]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CW.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "08 - [WiFi direct]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CX.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "09 - [Non technical]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3CY.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Antenna]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DA.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Head devices / accessories]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DB.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [In battery]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DC.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [In camera]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DD.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "05 - [In cover]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DE.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "06 - [In keyboard]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DF.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "07 - [Overheating]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DH.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "08 - [SD card, SIM card]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DI.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "09 - [Vibration]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DJ.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "10 - [Broken screen]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DK.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "11 - [Defective color]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DL.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "12 - [Liquid trace]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DM.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "13 - [Stains]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DN.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "14 - [Non technical]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DO.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "15 - [Hinge]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DP.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Hardware]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DQ.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Software]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DR.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Product feature]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [User manual]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DT.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "05 - [Non technical]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DU.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Adaptors]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DV.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Headphones]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DW.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Case / cover]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DX.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [Battery]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DY.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "05 - [Charger]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3DZ.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "06 - [S pen]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EA.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "07 - [DOA Battery cover]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EB.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "08 - [Hands free accessories]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EC.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "09 - [Bluetooth]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3ED.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "10 - [Memory card]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EE.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "11 - [Dock]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EF.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "12 - [Data cable]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EG.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "13 - [Cast dongle]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EH.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "14 - [Others]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EI.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Email / accounts]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EJ.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Google play]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EK.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Webpages]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EL.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [Sync]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EM.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "05 - [Operating system]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EN.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "06 - [MAC OS]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EO.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "07 - [Zune]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EP.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "08 - [Non technical]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3EQ.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Game hub]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FL.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Media hub]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FM.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Music hub]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FN.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [Social hub]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FO.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "05 - [Samsung hub]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FP.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "06 - [Hubs (others)]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FR.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "01 - [Power]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "02 - [Battery]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "03 - [Charging]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "04 - [Sound]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "05 - [Display]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "06 - [Touch]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "07 - [Button]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "08 - [Camera]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "09 - [Call]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "10 - [Operation / Performance]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "12 - [FW / SW]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "13 - [Sensors]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "14 - [SMS]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "15 - [Vibrations]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }
                                {symptom2Label === "16 - [Others]" && <div className="my-4">

                                    <select
                                        // required
                                        // aria-required
                                        name='symptom3'
                                        id="symptom3"
                                        value={symptom3} onChange={onChangeSymp3}
                                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                                    >
                                        <option disabled value="">
                                            Choose symptom 3
                                        </option>
                                        {HHPSymptom3FS.map((x) => (
                                            <option key={x._name} value={`${x.value}`}>
                                                {x?._name}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                }


                            </div>

                            <button type="button" onClick={createServiceOrder} className=" rounded-md border-none shadow-sm px-4 py-2 bg-[#273e47] hover:bg-[#273e47bd] active:bg-[#273e47bd] focus:bg-[#273e47bd] text-sm font-medium text-white outline-none">Create service order</button>
                        </div>
                    </article>
                </div>
            </Container>
        </>
    )
}

export default EditHHPTicket
