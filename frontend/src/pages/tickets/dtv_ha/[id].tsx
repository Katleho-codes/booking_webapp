import Container from '@/components/Container';
import { useRouter } from 'next/router';

import TabsTwo from '@/components/TabsTwo';
import TabPane from '@/components/TabsTwo/TabPane';
import axios from 'axios';
import moment from 'moment';
import Head from 'next/head';
import React, { useState } from 'react';
import { useFetchTicketById } from '../../../../hooks/useFetch';
import Fridges from '../units/fridges';
import Microwaves from '../units/microwaves';
import TV from '../units/tv';

function EditDTVHATicket() {
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

    // Define an array of tabs
    const tabs = [
        { id: 'tab1', label: 'HHP', content: "" },
        { id: 'tab2', label: 'DTV/HA', content: "" },
    ];


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
            console.log('Updated data:', response.data);
            // Optionally, you can update the state with the response data to reflect the changes
            console.log("patch data", response.data);
        } catch (error) {
            console.error('Error updating data:', error);
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
                console.log(error)
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
                        <TabsTwo>
                            <TabPane title="Fridge">
                                <Fridges symptom1={symptom1} onChangeSymp1={onChangeSymp1} symptom2={symptom2} onChangeSymp2={onChangeSymp2} symptom2Label={symptom2Label} symptom3={symptom3} onChangeSymp3={onChangeSymp3} />
                            </TabPane>
                            <TabPane title="Microwave">
                                <Microwaves symptom1={symptom1} onChangeSymp1={onChangeSymp1} symptom2={symptom2} onChangeSymp2={onChangeSymp2} symptom2Label={symptom2Label} symptom3={symptom3} onChangeSymp3={onChangeSymp3} />
                            </TabPane>
                            <TabPane title="TV">
                                <TV symptom1={symptom1} onChangeSymp1={onChangeSymp1} symptom2={symptom2} onChangeSymp2={onChangeSymp2} symptom2Label={symptom2Label} symptom3={symptom3} onChangeSymp3={onChangeSymp3} />
                            </TabPane>
                        </TabsTwo>
                        <button type="button" onClick={createServiceOrder} className=" rounded-md border-none shadow-sm px-4 py-2 bg-[#273e47] hover:bg-[#273e47bd] active:bg-[#273e47bd] focus:bg-[#273e47bd] text-sm font-medium text-white outline-none">Create service order</button>
                    </article>

                </div>
            </Container>
        </>
    )
}

export default EditDTVHATicket;