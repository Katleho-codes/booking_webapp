import Modal from '@/components/Modals';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Assets() {
    const [result, setResult] = useState<any>([])
    const [assetModel, setAssetModel] = useState("");
    const [assetSerial, setAssetSerial] = useState("");
    const [assetIMEI, setAssetIMEI] = useState("");
    const [assetId, setAssetId] = useState("");
    const [searchAssets, setSearchAssets] = useState("");
    const [assetsEmpty, setAssetsEmpty] = useState(false);
    const [isAssetModal, setIsAssetModal] = useState(false)

    const [customerId, setCustomerId] = useState("")


    // For new assets being created
    const [model, setModel] = useState("")
    const [serialNumber, setSerial] = useState("")

    const router = useRouter()


    useEffect(() => {
        const loadCustomerInfo = () => {
            if (typeof window !== undefined && window.localStorage) {
                const parsedData = JSON.parse(localStorage.getItem('custInfo') || '""');
                console.log(parsedData)
                if (parsedData !== null) {
                    setCustomerId(parsedData?.customer_id)
                }
            }
        };
        loadCustomerInfo()
    }, [])


    useEffect(() => {
        // console.log(searchAssets)
        const checkIfAssetWasHere = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/customer_assets?query=${searchAssets}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
                    },
                })
                // console.log(data)
                if (data?.assets[0]?.name || data?.assets[0]?.asset_serial === searchAssets) {
                    setAssetModel(data?.assets[0]?.name)
                    setAssetSerial(data?.assets[0]?.asset_serial);
                    setAssetId(data?.assets[0]?.id);
                    setResult(data.assets)
                    // console.log(data?.assets)

                }
            } catch (error) {
                console.log("search asset error", error)
            }

        }
        checkIfAssetWasHere()
    }, [searchAssets])
    // console.log(result)


    const addExistingAsset = async () => {
        const assetInfo = {
            model: assetModel,
            serial_number: assetSerial,
        };
        const l = {
            "asset_type_name": assetModel,
            "properties": {
                "Model No. ": assetModel
            },
            "name": assetModel,
            "customer_id": customerId,
            "asset_serial": assetSerial
        }
        const { data } = await axios.post("", assetInfo, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
            }
        })

        // console.log(assetInfo)
        // Convert the assetInfo object to a JSON string
        const assetInfoString = JSON.stringify(assetInfo);
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem("assetInfo", assetInfoString);
            console.log('Dummy object stored successfully!');
            // router.push("/device_inspection")
        }
    }
    // const createNewAsset = aysnc()=>{

    // }

    return (
        <>
            <Head>
                <title>Search assets | MM ALL ELECTRONICS</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-screen bg-white border w-30 border-sky-500">
                <h4 className="text-3xl font-bold mb-2 text-center dark:text-gray-700">Search assets or add</h4>
                <p className='tracking-tighter text-gray-500 md:text-lg dark:text-gray-400'>Serial number or model number</p>
                <div className="bg-white rounded-lg p-2">
                    <input
                        value={searchAssets}
                        onChange={(e) => setSearchAssets(e.target.value)}
                        autoComplete='false'
                        type="text"
                        placeholder="Search..."
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-center flex-col text-center">
                    {
                        searchAssets === result[0]?.name || searchAssets === result[0]?.asset_serial ? (

                            <div
                                className="my-2"
                            >
                                <p
                                    className='font-medium text-gray-800'

                                >
                                    Model: {result[0]?.name}
                                </p>
                                <p
                                    className='font-medium text-gray-800'

                                >
                                    Serial:  {result[0]?.asset_serial}
                                </p>
                            </div>

                        ) : null
                    }

                    {searchAssets === result[0]?.name || searchAssets === result[0]?.asset_serial ?
                        <button type='button' className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Add assets</button>
                        : <div>
                            <small className="block text-gray-500 text-center">Cannot find assets?</small>
                            <button type="button" onClick={() => setIsAssetModal(true)}>Create assets</button>
                        </div>}

                    <Modal
                        isVisible={isAssetModal}
                        title="Create assets"
                        content={
                            <>
                                <div className="mb-4">
                                    <label htmlFor='model'>Model</label>
                                    <input type="text" name='model' id='model' value={model} onChange={(e) => setModel(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor='serialNumber'>Serial number</label>
                                    <input type="text" name='serialNumber' id='serialNumber' value={serialNumber} onChange={(e) => setSerial(e.target.value)} className="mb-2 bg-white border border-gray-300 outline-0 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                                <button type='button' onClick={addExistingAsset} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Create assets</button>
                            </>
                        }
                        onClose={() => setIsAssetModal(!isAssetModal)}


                    />
                </div>
            </div>
        </>
    )
}
