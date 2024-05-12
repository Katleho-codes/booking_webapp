import axios from 'axios'
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { asset_names } from '../../../utils/asset_names';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Modal from '@/components/Modals';

function Assets() {
    const [searchAssets, setSearchAssets] = useState("");
    const [customerId, setCustomerId] = useState("")
    const [selectedAsset, setSelectedAsset] = useState("")
    const [result, setResult] = useState<any>([]);

    // creating asset
    const [createModel, setCreateModel] = useState("")
    const [createSerial, setCreateSerial] = useState("")
    const [createAssetType, setCreateAssetType] = useState("")
    const [openModal, setOpenModal] = useState(false)

    const router = useRouter()
    useEffect(() => {
        const loadCustomerInfo = () => {
            if (typeof window !== undefined && window.localStorage) {
                const parsedData = JSON.parse(localStorage.getItem('custInfo') || '""');
                // console.log(parsedData)
                if (parsedData !== null) {
                    setCustomerId(parsedData?.customerId)
                }
            }
        };
        loadCustomerInfo()
    }, [])
    useEffect(() => {
        const checkIfCustomerHasAssets = async () => {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/customer_assets?query=${searchAssets}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
                    },
                })
                // console.log(data.assets)
                setResult(data?.assets)

            } catch (error) {
                // console.log("search repair customer error", error)
            }

        }
        checkIfCustomerHasAssets()
    }, [searchAssets])

    const storeAvailableAssetsToLocalStorage = async () => {
        const assetInfo = {
            "asset_id": selectedAsset,
            "asset_serial": result[0]?.asset_serial,
            "model_number": result[0]?.properties["Model No.:"]
        }
        // console.log(assetInfo)
        const custAssetString = JSON.stringify(assetInfo);
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem("assetInfo", custAssetString);
            // console.log('Dummy object stored successfully!');
        }
    }
    const storeCreatedAssetsToLocalStorage = async (assetId: string | number) => {
        const assetInfo = {
            "asset_id": assetId,
            "asset_serial": createSerial,
            "model_number": createModel
        }
        // console.log(assetInfo)
        const custAssetString = JSON.stringify(assetInfo);
        if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem("assetInfo", custAssetString);
            // console.log('Dummy object stored successfully!');
        }
    }

    const storeCreatedAssetsToRepairshpr = async () => {
        const values = {
            "asset_type_name": createAssetType,
            "properties": {
                "Model No.:": createModel
            },
            "name": createModel,
            "customer_id": customerId,
            "asset_serial": createSerial
        }
        // console.log(values)
        await axios.post(`${process.env.NEXT_PUBLIC_REPAIRSHOPR_API_SUBDOMAIN}/customer_assets`, values, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_REPAIRSHOPR_BEARER_TOKEN}`
            }
        })
            .then((res) => {
                // console.log("result", res)
                let assetId = res?.data?.asset?.id;
                storeCreatedAssetsToLocalStorage(assetId);
                alert(`Assets created, Continue`);
                router.push("/device_inspection")
            }).catch((error: any) => {
                toast.error(`${error.response.data.message}`);
                // console.log(error.response.data);
            })

    }

    // console.log("result", result)
    return (
        <>
            <Head>
                <title>Assets | MM ALL ELECTRONICS</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-screen bg-white border w-30 border-sky-500">
                <h4 className="text-3xl font-bold mb-2 text-center dark:text-gray-700">Search asset</h4>
                <p className='tracking-tighter text-gray-500 md:text-lg dark:text-gray-400'>Serial number</p>
                <div>
                    <input
                        value={searchAssets}
                        onChange={(e) => setSearchAssets(e.target.value)}
                        autoComplete='false'
                        type="text"
                        placeholder="Search..."
                        className="w-full py-3 px-4 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                    />
                </div>
                {searchAssets === result[0]?.asset_serial ? (
                    <>
                        <div className="mb-4">
                            <label htmlFor='selectedAsset' className='sr-only'>Select asset</label>
                            <select
                                value={selectedAsset}
                                onChange={(e) => setSelectedAsset(e.target.value)}
                                // required
                                // aria-required

                                name='selectedAsset'
                                id="selectedAsset"
                                className="w-full py-3 px-4 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 cursor-pointer text-sm"
                            >
                                <option disabled value="">
                                    Choose asset
                                </option>
                                {result.map((x: any) => (
                                    <option key={x.id} value={`${x.id}`}>
                                        {x?.asset_serial} - {x?.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="button" onClick={storeAvailableAssetsToLocalStorage} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Add asset</button>

                    </>
                ) : null}
                {searchAssets !== result[0]?.asset_serial || result[0]?.asset_serial === "" || searchAssets === "" ?
                    <>
                        <p className="my-2 text-sm font-medium text-slate-800">Nothing showing? Create it</p>
                        <button type="button" onClick={() => setOpenModal(true)} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Create</button>

                        <Modal
                            title={"Create asset"}
                            isVisible={openModal}
                            content={

                                <>
                                    <div className='mb-2'>
                                        <input
                                            value={createModel?.toUpperCase()}
                                            onChange={(e) => setCreateModel(e.target.value)}
                                            autoComplete='false'
                                            type="text"
                                            placeholder="Type model number"
                                            className="w-full py-3 px-4 mb-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <input
                                            value={createSerial?.toUpperCase()}
                                            onChange={(e) => setCreateSerial(e.target.value)}
                                            autoComplete='false'
                                            type="text"
                                            placeholder="Type serial number"
                                            className="w-full py-3 px-4 mb-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor='createAssetType' className='sr-only'>Asset type</label>
                                        <select
                                            value={createAssetType}
                                            onChange={(e) => setCreateAssetType(e.target.value)}
                                            // required
                                            // aria-required

                                            name='createAssetType'
                                            id="createAssetType"
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
                                    <button type="button" onClick={storeCreatedAssetsToRepairshpr} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Add asset</button>

                                </>



                            }
                            onClose={() => setOpenModal(false)}

                        />
                    </>
                    : null}
            </div>
        </>
    )
}

export default Assets
