import Container from '@/components/Container';
import { useRouter } from 'next/router';

import TabsTwo from '@/components/TabsTwo';
import TabPane from '@/components/TabsTwo/TabPane';
import axios from 'axios';
import moment from 'moment';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useFetchTicketById } from '../../../../hooks/useFetch';
import Fridges from '../units/fridges';
import Microwaves from '../units/microwaves';
import TV from '../units/tv';
import { serviceTypes } from '../../../../utils/service_types';
import Modal from '@/components/Modals';
import { asset_names } from '../../../../utils/asset_names';
import { provinces } from '../../../../utils/provinces';

function EditDTVHATicket() {
    const [symptom1, setSymptom1] = useState("")
    const [symptom1Label, setSymptom1Label] = useState("")
    const [symptom2, setSymptom2] = useState("")
    const [symptom2Label, setSymptom2Label] = useState("")
    const [symptom3, setSymptom3] = useState("")
    const [symptom3Label, setSymptom3Label] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")
    const modifiedPurchaseDate = moment(purchaseDate).format("YYYYMMDD");
    const [serviceType, setSetServiceType] = useState("")


    // Customer details modal
    const [customerDetailsModal, setCustomerDetailsModal] = useState(false);
    const [editCustomerFirstname, setEditCustomerFirstname] = useState("")
    const [editCustomerLastname, setEditCustomerLastname] = useState("")
    const [editCustomerEmail, setEditCustomerEmail] = useState("")
    const [editCustomerPhone, setEditCustomerPhone] = useState("")
    const [editCustomerPhone2, setEditCustomerPhone2] = useState("")
    const [editCustomerAddress, setEditCustomerAddress] = useState("")
    const [editCustomerAddress2, setEditCustomerAddress2] = useState("")
    const [editCustomerState, setEditCustomerState] = useState("")
    const [editCustomerZip, setEditCustomerZip] = useState("")


    // Assets modal
    const [openAssetsModal, setOpenAssetsModal] = useState(false)
    const [editModelNumber, setEditModelNumber] = useState("")
    const [editSerialNumber, setEditSerialNumber] = useState("")
    const [editAssetType, setEditAssetType] = useState("")



    const [getServiceOrderNumber, setGetServiceOrderNumber] = useState("")
    // console.log(purchaseDate === "" ? "" : modifiedPurchaseDate)
    const router = useRouter();
    const { id } = router?.query;

    const { getTicketByid, getTicketByidError } = useFetchTicketById(id)

    const { unique_id, original_customer_id, original_asset_id, customer_fullname, customer_firstname, customer_lastname, customer_email, customer_phone, phone_number_2, customer_address, customer_address_2, customer_city, customer_state, customer_zip, unit_fault, fault_occurence, type_of_unit, ticket_number, imei, backup_needed, model_number, serial_number, warranty_period, service_order_number, created_date, department } = getTicketByid[0] || {}

    useEffect(() => {
        const loadCustomer = () => {
            setEditCustomerFirstname(customer_firstname)
            setEditCustomerLastname(customer_lastname)
            setEditCustomerEmail(customer_email)
            setEditCustomerPhone(customer_phone)
            setEditCustomerPhone2(phone_number_2)
            setEditCustomerAddress(customer_address)
            setEditCustomerAddress2(customer_address_2)
            setEditCustomerState(customer_state)
            setEditCustomerZip(customer_zip)
        }
        loadCustomer()
    }, [customer_address, customer_address_2, customer_email, customer_firstname, customer_lastname, customer_phone, customer_state, customer_zip, phone_number_2])

    useEffect(() => {
        const loadAssets = async () => {
            setEditModelNumber(model_number)
            setEditSerialNumber(serial_number)
        }
        loadAssets()
    }, [model_number, serial_number])


    const updateCustomerOnOurDB = async () => {
        const values = {
            editCustomerFirstname,
            editCustomerLastname,
            editCustomerEmail,
            editCustomerPhone,
            editCustomerPhone2,
            editCustomerAddress,
            editCustomerAddress2,
            editCustomerState,
        }

        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/customer/${id}`, values);
            // console.log('Data updated successfully:', response.data);
            return response.data; // Optionally return the updated data
        } catch (error) {
            console.error('Error updating data:', error);
            // throw error; // Re-throw the error to handle it in the calling code
        }
    }

    const updateCustomeronRepairshpr = async () => {
        const values = {
            "firstname": editCustomerFirstname,
            "lastname": editCustomerLastname,
            "email": editCustomerEmail,
            "phone": editCustomerPhone,
            "mobile": editCustomerPhone2,
            "address": editCustomerAddress,
            "address_2": editCustomerAddress2,
            "state": editCustomerState,
        }
        try {
            const { data } = await axios.put(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/customers/${original_customer_id}`, values, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
                },
            })

            // console.log("customer repair data", data)


        } catch (error: any) {
            // console.log(error)
        }
    }

    const updateBothSystems = () => {
        updateCustomerOnOurDB()
        updateCustomeronRepairshpr()
    }


    const updateAssetsOnOurDB = async () => {
        const values = {
            editSerialNumber, editModelNumber
        }

        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/assets/${id}`, values);
            // console.log('Data updated successfully:', response.data);
            return response.data; // Optionally return the updated data
        } catch (error) {
            console.error('Error updating data:', error);
            // throw error; // Re-throw the error to handle it in the calling code
        }
    }

    const updateAssetsonRepairshpr = async () => {
        const values =
        {
            "asset_type_name": "HHP",
            "asset_type_id": original_asset_id,
            "properties": {
                "Model No.:": editModelNumber
            },
            "name": editModelNumber,
            "customer_id": original_customer_id,
            "asset_serial": editSerialNumber

        }
        // console.log(values)
        try {
            const { data } = await axios.put(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/customer_assets/${9708669}`, values, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
                },
            })

            // console.log("data", data)


        } catch (error: any) {
            // console.log(error)
        }
    }
    const updateAssetsBothSystems = () => {
        updateAssetsOnOurDB()
        updateAssetsonRepairshpr()
    }



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
            return response?.data
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
                "PurchaseDate": `${modifiedPurchaseDate === "Invalid date" ? "" : modifiedPurchaseDate}`,
                "Accessory": "",
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

            if (response?.data?.Return.EsCommonResult.Code !== '200') {
                alert(response?.data?.EtErrInfo.results[0]?.ErrMsg)
            } else {
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

                    <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center">Edit DTV/HA Ticket</h1>

                    <div />
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="card rounded-sm shadow-sm p-2 bg-white h-full">
                        <div className="flex justify-between items-center">
                            <h2 className='text-gray-800 font-bold my-3 text-xl'>Customer details</h2>
                            <button onClick={() => setCustomerDetailsModal(true)} type='button' className="rounded-md border-none shadow-sm px-4 py-2 bg-[#273e47] hover:bg-[#273e47bd] active:bg-[#273e47bd] focus:bg-[#273e47bd] text-sm font-medium text-white outline-none">Edit</button>
                        </div>
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
                        <div className="flex justify-between items-center">
                            <h2 className='text-gray-800 font-bold my-3 text-xl'>Ticket details</h2>
                            {/* <button onClick={() => setOpenAssetsModal(true)} type='button' className="rounded-md border-none shadow-sm px-4 py-2 bg-[#273e47] hover:bg-[#273e47bd] active:bg-[#273e47bd] focus:bg-[#273e47bd] text-sm font-medium text-white outline-none">Edit</button> */}
                            <div />
                        </div>
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
                        <TabsTwo>
                            <TabPane title="Fridge">
                                <span className="my-4">
                                    <label htmlFor="purchaseDate" className='mb-2 text-sm font-medium text-gray-800 tracking-normal'>Select purchase date if it exists</label>
                                    <input value={purchaseDate} onChange={(e) => {
                                        setPurchaseDate(e.target.value)
                                    }} type="date" name="purchaseDate" placeholder='Purchase date' id="purchaseDate" className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-2.5" />
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
                                <p className='my-2 text-sm font-medium text-blue-800 tracking-normal'>Please ensure all the fields below this are filled</p>
                                <Fridges symptom1={symptom1} onChangeSymp1={onChangeSymp1} symptom2={symptom2} onChangeSymp2={onChangeSymp2} symptom2Label={symptom2Label} symptom3={symptom3} onChangeSymp3={onChangeSymp3} />
                            </TabPane>
                            <TabPane title="Microwave">
                                <span className="my-4">
                                    <label htmlFor="purchaseDate" className='mb-2 text-sm font-medium text-gray-800 tracking-normal'>Select purchase date if it exists</label>
                                    <input value={purchaseDate} onChange={(e) => {
                                        setPurchaseDate(e.target.value)
                                    }} type="date" name="purchaseDate" placeholder='Purchase date' id="purchaseDate" className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-2.5" />
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
                                <p className='my-2 text-sm font-medium text-blue-800 tracking-normal'>Please ensure all the fields below this are filled</p>
                                <Microwaves symptom1={symptom1} onChangeSymp1={onChangeSymp1} symptom2={symptom2} onChangeSymp2={onChangeSymp2} symptom2Label={symptom2Label} symptom3={symptom3} onChangeSymp3={onChangeSymp3} />
                            </TabPane>
                            <TabPane title="TV">
                                <span className="my-4">
                                    <label htmlFor="purchaseDate" className='mb-2 text-sm font-medium text-gray-800 tracking-normal'>Select purchase date if it exists</label>
                                    <input value={purchaseDate} onChange={(e) => {
                                        setPurchaseDate(e.target.value)
                                    }} type="date" name="purchaseDate" placeholder='Purchase date' id="purchaseDate" className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-2.5" />
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
                                <p className='my-2 text-sm font-medium text-blue-800 tracking-normal'>Please ensure all the fields below this are filled</p>
                                <TV symptom1={symptom1} onChangeSymp1={onChangeSymp1} symptom2={symptom2} onChangeSymp2={onChangeSymp2} symptom2Label={symptom2Label} symptom3={symptom3} onChangeSymp3={onChangeSymp3} />
                            </TabPane>
                        </TabsTwo>
                        <button type="button" onClick={createServiceOrder} className=" rounded-md border-none shadow-sm px-4 py-2 bg-[#273e47] hover:bg-[#273e47bd] active:bg-[#273e47bd] focus:bg-[#273e47bd] text-sm font-medium text-white outline-none">Create service order</button>
                    </article>

                </div>
            </Container>

            <Modal
                title={"Edit customer details"}
                isVisible={customerDetailsModal}
                content={
                    <>
                        <div>
                            <div className="mb-4">
                                <label htmlFor='editCustomerFirstname'>Firstname</label>
                                <input type="text" id='editCustomerFirstname' name='editCustomerFirstname' value={editCustomerFirstname} onChange={(e) => setEditCustomerFirstname(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                            </div>
                            <div className="mb-4">
                                <label htmlFor='editCustomerLastname'>Lastname</label>
                                <input type="text" id='editCustomerLastname' name='editCustomerLastname' value={editCustomerLastname} onChange={(e) => setEditCustomerLastname(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                            </div>
                            <div className="mb-4">
                                <label htmlFor='editCustomerEmail'>Email</label>
                                <input type="email" id='editCustomerEmail' name='editCustomerEmail' value={editCustomerEmail} onChange={(e) => setEditCustomerEmail(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                            </div>
                            <div className="mb-4">
                                <label htmlFor='editCustomerPhone'>Phone number</label>
                                <input type="text" id='editCustomerPhone' name='editCustomerPhone' value={editCustomerPhone} onChange={(e) => setEditCustomerPhone(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                            </div>
                            <div className="mb-4">
                                <label htmlFor='editCustomerPhone2'>Phone number 2</label>
                                <input type="text" id='editCustomerPhone2' name='editCustomerPhone2' value={editCustomerPhone2} onChange={(e) => setEditCustomerPhone2(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                            </div>
                            <div className="mb-4">
                                <label htmlFor='editCustomerAddress'>Address</label>
                                <input type="text" id='editCustomerAddress' name='editCustomerAddress' value={editCustomerAddress} onChange={(e) => setEditCustomerAddress(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                            </div>
                            <div className="mb-4">
                                <label htmlFor='email'>Address 2</label>
                                <input type="email" id='email' name='email' value={editCustomerAddress2} onChange={(e) => setEditCustomerAddress2(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor='state'>Province</label>
                                <select
                                    // required
                                    // aria-required
                                    name='state'
                                    id="state"
                                    value={editCustomerState} onChange={(e) => setEditCustomerState(e.target.value)}
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
                            <button type="button" onClick={updateBothSystems} className="rounded-md border-none shadow-sm px-4 py-2 bg-[#273e47] hover:bg-[#273e47bd] active:bg-[#273e47bd] focus:bg-[#273e47bd] text-sm font-medium text-white outline-none">Edit customer</button>
                        </div>
                    </>
                }
                onClose={() => setCustomerDetailsModal(false)}

            />
            <Modal
                title={"Edit assets details"}
                isVisible={openAssetsModal}
                content={
                    <>
                        <div className="mb-4">
                            <label htmlFor='editModelNumber'>Model number</label>
                            <input type="text" id='editModelNumber' name='editModelNumber' value={editModelNumber} onChange={(e) => setEditModelNumber(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='editSerialNumber'>Serial number</label>
                            <input type="text" id='editSerialNumber' name='editSerialNumber' value={editSerialNumber} onChange={(e) => setEditSerialNumber(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='editAssetType'>Asset type</label>
                            <select
                                value={editAssetType}
                                onChange={(e) => setEditAssetType(e.target.value)}
                                // required
                                // aria-required

                                name='editAssetType'
                                id="editAssetType"
                                className="cursor-pointer bg-white w-full py-3 px-4 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                            >
                                <option disabled value="">
                                    Choose type
                                </option>
                                {asset_names.map((x: any) => (
                                    <option key={x.id} value={`${x._name}`}>
                                        {x?._name}
                                    </option>
                                ))}

                            </select>
                        </div>
                        <button type="button" onClick={updateAssetsBothSystems} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Update assets</button>

                    </>
                }
                onClose={() => setOpenAssetsModal(false)}

            />
        </>
    )
}

export default EditDTVHATicket;