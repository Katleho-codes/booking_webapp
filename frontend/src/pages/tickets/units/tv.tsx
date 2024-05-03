import React from 'react'
import { tvSymptom1, tvSymptom2, tvSymptom3, tvSymptom3A, tvSymptom3AA, tvSymptom3AB, tvSymptom3AC, tvSymptom3AD, tvSymptom3AE, tvSymptom3AF, tvSymptom3AG, tvSymptom3AH, tvSymptom3AI, tvSymptom3AJ, tvSymptom3AK, tvSymptom3AL, tvSymptom3AM, tvSymptom3AN, tvSymptom3AO, tvSymptom3AP, tvSymptom3AQ, tvSymptom3B, tvSymptom3C, tvSymptom3D, tvSymptom3E, tvSymptom3E_, tvSymptom3F, tvSymptom3G, tvSymptom3H, tvSymptom3I, tvSymptom3J, tvSymptom3K, tvSymptom3L, tvSymptom3M, tvSymptom3N, tvSymptom3O, tvSymptom3P, tvSymptom3R, tvSymptom3R_, tvSymptom3S, tvSymptom3T, tvSymptom3U, tvSymptom3V, tvSymptom3W, tvSymptom3W_, tvSymptom3X, tvSymptom3Y, tvSymptom3Z, tvSymptomA, tvSymptomB, tvSymptomC, tvSymptomD, tvSymptomE, tvSymptomF, tvSymptomG, tvSymptomH, tvSymptomI, tvSymptomJ, tvSymptomK, tvSymptomL, tvSymptomM, tvSymptomN, tvSymptomO } from '../../../../utils/gspn_tv_symptoms';


type TTVs = {
    symptom1: string | number;
    onChangeSymp1: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    symptom2: string | number;
    onChangeSymp2: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    symptom2Label: string;
    symptom3: string | number;
    onChangeSymp3: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}
function TV({ symptom1, onChangeSymp1, symptom2, onChangeSymp2, symptom2Label, symptom3, onChangeSymp3 }: TTVs) {
    return (
        <>
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
                    {tvSymptom1.map((x) => (
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
                        {tvSymptom2.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "04" && <div className="my-4">

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
                        {tvSymptomA.map((x) => (
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
                        {tvSymptomB.map((x) => (
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
                        {tvSymptomC.map((x) => (
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
                        {tvSymptomD.map((x) => (
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
                        {tvSymptomE.map((x) => (
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
                        {tvSymptomF.map((x) => (
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
                        {tvSymptomG.map((x) => (
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
                        {tvSymptomH.map((x) => (
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
                        {tvSymptomI.map((x) => (
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
                        {tvSymptomJ.map((x) => (
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
                        {tvSymptomK.map((x) => (
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
                        {tvSymptomL.map((x) => (
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
                        {tvSymptomM.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "MZ" && <div className="my-4">

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
                        {tvSymptomN.map((x) => (
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
                        {tvSymptomO.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
            </div>
            {/* Symptom 3 */}
            {symptom2Label === "01 - [VCR connection]" && <div className="my-4">

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
                    {tvSymptom3.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [DVD connection]" && <div className="my-4">

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
                    {tvSymptom3A.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Audio/home theater connection]" && <div className="my-4">

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
                    {tvSymptom3B.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [Combo connection]" && <div className="my-4">

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
                    {tvSymptom3C.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Camcoder/game machine connection]" && <div className="my-4">

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
                    {tvSymptom3D.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Digital receiver connection]" && <div className="my-4">

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
                    {tvSymptom3E.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "07 - [PC connection]" && <div className="my-4">

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
                    {tvSymptom3E_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "08 - [Antenna/cable connection method]" && <div className="my-4">

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
                    {tvSymptom3F.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "09 - [Other device installation]" && <div className="my-4">

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
                    {tvSymptom3G.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "10 - [Initial installation]" && <div className="my-4">

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
                    {tvSymptom3H.map((x) => (
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
                    {tvSymptom3I.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [Audio]" && <div className="my-4">

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
                    {tvSymptom3J.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Video and image]" && <div className="my-4">

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
                    {tvSymptom3K.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [Channel]" && <div className="my-4">

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
                    {tvSymptom3L.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Remote control]" && <div className="my-4">

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
                    {tvSymptom3M.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Network/internet]" && <div className="my-4">

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
                    {tvSymptom3N.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [No channels tuned]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [Channel order]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Delete channels]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [Lock/unlock channels]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Record channels (PVR)]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Transfer channel list]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "07 - [Guide]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "08 - [Teletext not available or incorrect]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "09 - [No closed captioning - all channels]" && <div className="my-4">

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
                    {tvSymptom3AK.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "10 - [No closed captioning - one channel]" && <div className="my-4">

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
                    {tvSymptom3AK.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "11 - [Intermittent closed captioning - all channels]" && <div className="my-4">

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
                    {tvSymptom3AK.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "12 - [Intermittent closed captioning - all channel]" && <div className="my-4">

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
                    {tvSymptom3AK.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "13 - [Data service (HbbTV)]" && <div className="my-4">

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
                    {tvSymptom3T.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "14 - [Hotel mode]" && <div className="my-4">

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
                    {tvSymptom3T.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [Unable to upload new mapped channel list via SIRCH]" && <div className="my-4">

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
                    {tvSymptom3W.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [Unable to set start up channel to digital channel]" && <div className="my-4">

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
                    {tvSymptom3W_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Unable to remap digital channels]" && <div className="my-4">

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
                    {tvSymptom3AB.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [No HD]" && <div className="my-4">

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
                    {tvSymptom3AL.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [No analog channels or poor analog channel picture]" && <div className="my-4">

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
                    {tvSymptom3AM.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [Line/spots/dead/lit pixels on screen]" && <div className="my-4">

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
                    {tvSymptom3P.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Colors defective]" && <div className="my-4">

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
                    {tvSymptom3O.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [Blurry/double/ghosting image]" && <div className="my-4">

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
                    {tvSymptom3O.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Uneven brightness]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Image retention on the screen]" && <div className="my-4">

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
                    {tvSymptom3S.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "07 - [No picture]" && <div className="my-4">

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
                    {tvSymptom3T.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "08 - [No picture/sound OK/OSD OK - one input]" && <div className="my-4">

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
                    {tvSymptom3U.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "09 - [No picture/sound OK/OSD OK - all input]" && <div className="my-4">

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
                    {tvSymptom3U.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "10 - [No picture/sound OK/No OSD - one input]" && <div className="my-4">

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
                    {tvSymptom3U.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "12 - [No picture/no sound - one input]" && <div className="my-4">

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
                    {tvSymptom3U.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "13 - [No picture/no sound - all input]" && <div className="my-4">

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
                    {tvSymptom3U.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "14 - [No picture/no sound/no OSD - All input]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "15 - [TV frame unstuck (separating)]" && <div className="my-4">

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
                    {tvSymptom3AN.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "16 - [Clouding effect]" && <div className="my-4">

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
                    {tvSymptom3AN.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "17 - [Image flickers/pixelated]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "18 - [Does not retain settings]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "19 - [PIP]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "20 - [Spiderweb crack]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "21 - [Star crack]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "22 - [Edge crack]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "23 - [Scratched]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "24 - [Burn-in]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "25 - [Partial dark picture]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [No sound]" && <div className="my-4">

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
                    {tvSymptom3S.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [Poor sound]" && <div className="my-4">

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
                    {tvSymptom3S.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Lip sync/distorted sound]" && <div className="my-4">

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
                    {tvSymptom3S.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [Lip sync/distorted sound (HDMI) only]" && <div className="my-4">

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
                    {tvSymptom3AK.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Sound cannot be adjusted]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Sound up/down (by itself)]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "07 - [Mute not available]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "08 - [Dolby unavailable]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "09 - [Mono only - no stereo all sources]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "10 - [Mono only - no stereo app only]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "11 - [Stereo only - no 5.1 sound app only]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "12 - [Stereo only - no 5.1 sound all sources]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "13 - [No sound - optical only]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "14 - [Can not get sound from TV]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "15 - [Does not retain sound settings]" && <div className="my-4">

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
                    {tvSymptom3S.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "17 - [Noise - clicking/knocking/sparking while TV is OFF]" && <div className="my-4">

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
                    {tvSymptom3U.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "18 - [Noise - clicking/knocking/sparking while TV is touch]" && <div className="my-4">

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
                    {tvSymptom3U.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "19 - [Noise - clicking/knocking/sparking while TV ON or]" && <div className="my-4">

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
                    {tvSymptom3U.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [3D mode]" && <div className="my-4">

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
                    {tvSymptom3AO.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [Ghosting]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Flickering]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [No image]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Lines(s)]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [3D glasses are not working]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "07 - [Image is still blurry]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "08 - [2D image does not convert to 2D]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [WiFi won't connect]" && <div className="my-4">

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
                    {tvSymptom3O.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [LAN won't connect]" && <div className="my-4">

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
                    {tvSymptom3O.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Allshare/allshare play]" && <div className="my-4">

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
                    {tvSymptom3O.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [Apps]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [Web browser]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Error smart HUB]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [Voice and movement control]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [Connection to HT/HW]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [Explain connection to PC]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Explain connection to DVD/BD]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [Explain connection with mobile]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Explain connection combo (DVD/VHS)]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Explain game console connection]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "07 - [USB (HDD)]" && <div className="my-4">

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
                    {tvSymptom3R_.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [TV intermittently powers OFF and ON]" && <div className="my-4">

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
                    {tvSymptom3O.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [TV cannot be powered on]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [TV cannot be powered off]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Timer is activated but the TV does not turn off]" && <div className="my-4">

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
                    {tvSymptom3R.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Timer is activated but the TV does not power on]" && <div className="my-4">

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
                    {tvSymptom3AK.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "07 - [Power cycles continuosly OFF/ON]" && <div className="my-4">

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
                    {tvSymptom3AM.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [Product features]" && <div className="my-4">

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
                    {tvSymptom3W.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [User manual]" && <div className="my-4">

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
                    {tvSymptom3X.map((x) => (
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
                    {tvSymptom3Y.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [3D glasses do not match/no charge]" && <div className="my-4">

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
                    {tvSymptom3Z.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [Connect wires]" && <div className="my-4">

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
                    {tvSymptom3AA.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [Dongle does not connect]" && <div className="my-4">

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
                    {tvSymptom3AA.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "04 - [Remote control does not work/no key working]" && <div className="my-4">

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
                    {tvSymptom3AA.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Keyboard does not pair with TV]" && <div className="my-4">

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
                    {tvSymptom3AA.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Keys are not working properly]" && <div className="my-4">

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
                    {tvSymptom3AA.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "07 - [Installation]" && <div className="my-4">

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
                    {tvSymptom3AA.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "08 - [Webcam not connected]" && <div className="my-4">

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
                    {tvSymptom3AA.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "09 - [Evolution kit]" && <div className="my-4">

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
                    {tvSymptom3AA.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "10 - [General information]" && <div className="my-4">

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
                    {tvSymptom3W.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "11 - [Non technical]" && <div className="my-4">

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
                    {tvSymptom3Y.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "12 - [Missing accessory/accessories]" && <div className="my-4">

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
                    {tvSymptom3Y.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "01 - [While powered ON]" && <div className="my-4">

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
                    {tvSymptom3AC.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "02 - [All the time]" && <div className="my-4">

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
                    {tvSymptom3AC.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "03 - [While powered OFF]" && <div className="my-4">

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
                    {tvSymptom3AC.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "05 - [Foreign infestation (bugs/insects)]" && <div className="my-4">

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
                    {tvSymptom3AP.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "06 - [Smoke/burning smell]" && <div className="my-4">

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
                    {tvSymptom3V.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "16 - [Account issue]" && <div className="my-4">

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
                    {tvSymptom3AD.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "17 - [Connection error]" && <div className="my-4">

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
                    {tvSymptom3AE.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "18 - [Control error]" && <div className="my-4">

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
                    {tvSymptom3AF.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "19 - [App function error]" && <div className="my-4">

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
                    {tvSymptom3AG.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "20 - [How to use]" && <div className="my-4">

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
                    {tvSymptom3AH.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "21 - [Permission issues]" && <div className="my-4">

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
                    {tvSymptom3AI.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {symptom2Label === "22 - [Unsatisfied customer service]" && <div className="my-4">

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
                    {tvSymptom3AJ.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
            {/* {symptom2Label === "01 - [Power]" && <div className="my-4">

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
                    {tvSymptom3AQ.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            } */}
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
                    {tvSymptom3AQ.map((x) => (
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
                    {tvSymptom3AQ.map((x) => (
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
                    {tvSymptom3AQ.map((x) => (
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
                    {tvSymptom3AQ.map((x) => (
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
                    {tvSymptom3AQ.map((x) => (
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
                    {tvSymptom3AQ.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>
            }
        </>
    )
}

export default TV
