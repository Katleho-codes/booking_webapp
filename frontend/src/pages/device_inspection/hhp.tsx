import Container from '@/components/Container';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { assetTypesHHP } from '../../../utils/asset_types';
import { datetimestamp } from '../../../utils/datetime';
import { faultOccurences } from '../../../utils/fault_occurences';

function HHP() {
    const [isBackUpNeedCheckboxEnabled, setIsBackUpNeedCheckboxEnabled] = useState(false)

    // This is for repairshopr
    const [ticketTypeId, setTicketTypeId] = useState<number>();
    const [warrantyCode, setWarrantyCode] = useState<number>();
    const [backupCode, setBackupCode] = useState<number>();

    const [fault, setFault] = useState("")
    const [itemCondition, setItemCondition] = useState("");
    const [specialRequirement, setSpecialRequirement] = useState("")
    const [password, setPassword] = useState("")
    const [faultOccurence, setFaultOccurence] = useState("")
    const [customerId, setCustomerId] = useState<any>("")
    const [assetType, setAssetType] = useState("")


    const [storedData, setStoredData] = useState({})

    const [customUUID, setCustomUUID] = useState<string | null | any>("")
    const [email, setEmail] = useState<string | null | any>("")
    const [phoneNumber, setPhoneNumber] = useState<string | null | any>("")
    const [address, setAddress] = useState<string | null | any>("")
    const [address2, setAddress2] = useState<string | null | any>("")
    const [city, setCity] = useState<string | null | any>("")
    const [state, setState] = useState<string | null | any>("")
    const [zip, setZip] = useState<string | null | any>("")


    const [IMEI, setIMEI] = useState("");
    const [serialNumber, setSerialNumber] = useState("")
    const [modelNumber, setModelNumber] = useState("")
    const [warranty, setWarranty] = useState("");

    const [readTerms, setReadTerms] = useState(false);
    const router = useRouter()


    // Asset id
    const [assetId, setAssetId] = useState('')

    const toggleTermsCheckbox = () => {
        setReadTerms(prev => !prev);
        if (!readTerms) window.open("https://terms.mmallonthemove.co.za", "_blank")
    }
    const toggleBackupNeededCheckbox = () => {
        setIsBackUpNeedCheckboxEnabled(prev => !prev);
        if (!isBackUpNeedCheckboxEnabled) window.open("https://terms.mmallonthemove.co.za/backup_terms", "_blank")
    }

    useEffect(() => {
        const loadCustomerInfo = () => {
            if (typeof window !== undefined && window.localStorage) {
                const parsedData = JSON.parse(localStorage.getItem('custInfo') || '""');
                // console.log(parsedData)
                if (parsedData !== null) {

                    setStoredData(parsedData); // Set the parsed object to st
                    // console.log(info);
                    setEmail(parsedData?.email);
                    setCustomUUID(parsedData?.customUUID);
                    setPhoneNumber(parsedData?.phoneNumber);
                    setAddress(parsedData?.address);
                    setAddress2(parsedData?.address2)
                    setCity(parsedData?.city);
                    setState(parsedData?.state);
                    setZip(parsedData?.zip);
                }
            }
        };
        loadCustomerInfo()
    }, [])
    useEffect(() => {
        const loadCustomerAssetInfo = () => {
            if (typeof window !== undefined && window.localStorage) {
                const parsedData = JSON.parse(localStorage.getItem('assetInfo') || '""');
                // console.log(parsedData)
                if (parsedData !== null) {
                    setAssetId(parsedData?.asset_id)
                    setSerialNumber(parsedData?.asset_serial)
                    setModelNumber(parsedData?.model_number)

                }
            }
        };
        loadCustomerAssetInfo()
    }, [])

    useEffect(() => {
        const getCustomerId = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/customers?query=${email}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
                    },
                })
                if (data?.customers[0]?.email === email) {
                    setCustomerId(data?.customers[0]?.id)

                }
            } catch (error) {
                // 
            }
        }

        getCustomerId()
    }, [email]);

    useEffect(() => {

        if (isBackUpNeedCheckboxEnabled !== false) {
            setBackupCode(69752)
        } else {
            setBackupCode(69753)
        }
    }, [isBackUpNeedCheckboxEnabled])


    const updateEntry = async (ticketNumber: any, originalTicketId: any, customerId: any) => {
        const updatedAt = datetimestamp;
        const department = "HHP"
        const values = {
            fault,
            faultOccurence,
            assetType,
            ticketNumber,
            updatedAt,
            modelNumber,
            serialNumber,
            specialRequirement,
            IMEI,
            isBackUpNeedCheckboxEnabled,
            warranty,
            phoneNumber,
            address, address2, city, state, zip,
            department,
            originalTicketId,
            customerId,
            assetId,
            customUUID,
        }
        // console.log(values)
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/${customUUID}`, values);
            // console.log('Data updated successfully:', response.data);
            return response.data; // Optionally return the updated data
        } catch (error) {
            // console.error('Error updating data:', error);
            // throw error; // Re-throw the error to handle it in the calling code
        }



    }




    useEffect(() => {
        const checkWarranty = async () => {
            const generateTimeStampForPacCode = moment(new Date(
                Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
            )
                .toISOString()
                .replace("T", " ")
                .replace("Z", "")).format("YYMMDDhhmmss");



            // console.log(formattedDate)
            const values = {
                "IsCommonHeader": {
                    "Company": `${process.env.NEXT_PUBLIC_IPAAS_COMPANY}`,
                    "AscCode": `${process.env.NEXT_PUBLIC_IPAAS_ASC_CODE}`,
                    "Lang": `${process.env.NEXT_PUBLIC_IPAAS_LANG}`,
                    "Country": `${process.env.NEXT_PUBLIC_IPAAS_COUNTRY}`,
                    "Pac": `9999999${generateTimeStampForPacCode}`
                },
                "IvModel": `${modelNumber}`,
                "IvPurchaseDate": ``,
                "IvSerialNo": `${serialNumber}`,
                "IvIMEI": `${IMEI}`

            }
            // console.log("values", values)
            const response = fetch(`${process.env.NEXT_PUBLIC_IPAAS_LINK}/CheckWarranty/1.0/ImportSet`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_IPAAS_TOKEN}`
                },
                body: JSON.stringify(values)
            }).then((res) => res.json(

            )).then((data) => {
                if (data) {
                    // console.log("warranty data", data?.Return?.EvWtyType)
                    setWarranty(data?.Return?.EvWtyType);
                }
            }).catch((error) => {
                // console.log("warranty error", error)
            })
        }
        checkWarranty();
        (function () {
            if (warranty === "LP") {
                setTicketTypeId(21877);
                setWarrantyCode(69476)
            }
            else if (warranty !== "LP") {
                setTicketTypeId(21878);
                setWarrantyCode(69477)
            }
        })()
    }, [IMEI, modelNumber, serialNumber, warranty]);

    const createTicket = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const values = {
            "customer_id": customerId,
            "problem_type": `${assetType}`, // Will aways be HHP for handheld devices, no need to choose
            "subject": `${fault}`,
            "status": "New",
            "ticket_type_id": `${ticketTypeId}`,
            "properties": {
                "Service Order No.": "",
                "Item Condition ": `${itemCondition}`,
                "Backup Requires": `${backupCode}`,
                "Warranty ": `${warrantyCode}`,
                "IMEI": `${IMEI}`,
                "Special Requirement ": `${specialRequirement}`,
                "Password": `${password}`
            },
            "asset_ids": assetId
        }
        // console.log(values)
        await axios.post(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/tickets`, values, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
            }
        })
            .then((res) => {
                let ticketNumber = res?.data?.ticket?.number
                let originalTicketId = res?.data?.ticket?.id;
                let customerId = res?.data?.ticket?.customer_id;
                updateEntry(ticketNumber, originalTicketId, customerId);
                alert(`Ticket created, Here is your ticket: ${res.data?.ticket?.number}`);
                if (typeof window !== 'undefined' && window.localStorage) localStorage.clear();
                router.push("/")
            }).catch((error: any) => {
                toast.error(`${error.response.data.error}`);
                // console.log(error.response.data.error);
            })



    }

    return (
        <>

            <h3 className='font-medium text-center mb-3 text-gray-900'>Customer section</h3>
            <form onSubmit={createTicket}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="mb-4">
                        <label htmlFor='fault' className='sr-only'>Fault description</label>
                        <input type="text" name='fault' id='fault' placeholder='Fault description' value={fault} onChange={(e) => setFault(e.target.value)} className=" bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='faultOccurence' className='sr-only'>How/When does the fault occur?</label>
                        <select
                            value={faultOccurence}
                            onChange={(e) => setFaultOccurence(e.target.value)}
                            name='faultOccurence'
                            id="faultOccurence"
                            className="cursor-pointer bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option disabled value="">
                                Choose fault cccurence
                            </option>
                            {faultOccurences.map((faultOccurence) => (
                                <option key={faultOccurence.label} value={`${faultOccurence.label}`}>
                                    {faultOccurence?.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
                    <div className="mb-4">
                        <label htmlFor='password' className='sr-only'>Password or pin</label>
                        <input type="text" name='password' id='password' placeholder='Password or pin' value={password} onChange={(e) => setPassword(e.target.value)} className=" bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>
                    <div className='mb-4'>
                        <div className='flex gap-1'>
                            <input
                                type="checkbox"
                                checked={readTerms}
                                onChange={toggleTermsCheckbox}
                                id='readTerms'
                                name='readTerms'
                            />
                            <label htmlFor='readTerms' className='ms-2 text-sm font-medium text-gray-900'>
                                I agree with the terms I have read
                            </label>

                        </div>
                        <div className='flex gap-1'>
                            <input
                                type="checkbox"
                                checked={isBackUpNeedCheckboxEnabled}
                                onChange={toggleBackupNeededCheckbox}
                                id='isBackUpNeedCheckboxEnabled'
                                name='isBackUpNeedCheckboxEnabled'
                            />
                            <label htmlFor='isBackUpNeedCheckboxEnabled' className='ms-2 text-sm font-medium text-gray-900'>
                                Does your device require backup?(If no, leave unchecked)
                            </label>

                        </div>
                    </div>
                </div>


                {/* Consultant */}

                <div>
                    <h2 className='font-medium text-center  text-gray-900'>Consultant section</h2>
                    <p className='text-gray-500 text-center mb-3'>Please allow consulant to fill in this section</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="mb-4">
                            <label htmlFor='IMEI' className='sr-only'>IMEI</label>
                            <input type="text" value={IMEI} onChange={(e) => setIMEI(e.target.value)} name='IMEI' id='IMEI' placeholder='IMEI' className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='model' className='sr-only'>Model</label>
                            <input type="text" value={modelNumber} placeholder='Model' onChange={(e) => setModelNumber(e.target.value)} name='model' id='model' className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='serialNumber' className='sr-only'>Serial number</label>
                            <input type="text" value={serialNumber} placeholder='Serial' onChange={(e) => setSerialNumber(e.target.value)} name='serialNumber' id='serialNumber' className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                    </div>
                    {warranty ? <p className="text-lg font-semibold text-sky-700 md:text-xl text-center my-3">Unit is {warranty === "LP" ? "IW" : warranty}</p> : ""}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="mb-4">
                            <label htmlFor='condition' className='sr-only'>Item condition</label>
                            <input type="text" value={itemCondition} placeholder='Item condition' onChange={(e) => setItemCondition(e.target.value)} name='condition' id='condition' className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor='assetType' className='sr-only'>Type of unit</label>
                            <select
                                value={assetType}
                                onChange={(e) => setAssetType(e.target.value)}
                                // required
                                // aria-required

                                name='assetType'
                                id="assetType"
                                className="cursor-pointer bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                                <option disabled value="">
                                    Choose type of unit
                                </option>
                                {assetTypesHHP.map((assetTypeHHP) => (
                                    <option key={assetTypeHHP.label} value={`${assetTypeHHP.label}`}>
                                        {assetTypeHHP?.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor='specialRequirement' className='sr-only'>Special requirement</label>
                        <textarea placeholder='Special requirement' className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="specialRequirement" id="specialRequirement" value={specialRequirement} onChange={(e) => setSpecialRequirement(e.target.value)}></textarea>

                    </div>
                </div>

                <button type="submit" className="items-center gap-2 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-centerfocus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 me-2 mb-2">

                    Create ticket
                    <ArrowLongRightIcon className="h-4 w-4 text-white" />
                </button>
            </form>

        </>
    )
}

export default HHP
