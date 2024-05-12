import React from 'react'
import { HHPSymptom1, HHPSymptom2Q, HHPSymptom2A, HHPSymptom2C, HHPSymptom2D, HHPSymptom2E, HHPSymptom2F, HHPSymptom2G, HHPSymptom2H, HHPSymptom2I, HHPSymptom2J, HHPSymptom2K, HHPSymptom2L, HHPSymptom2M, HHPSymptom2N, HHPSymptom2O, HHPSymptom2P, HHPSymptom3F, HHPSymptom3G, HHPSymptom3H, HHPSymptom3I, HHPSymptom3J, HHPSymptom3K, HHPSymptom3L, HHPSymptom3M, HHPSymptom3CA, HHPSymptom3CB, HHPSymptom3CC, HHPSymptom3CD, HHPSymptom3CE, HHPSymptom3CF, HHPSymptom3CG, HHPSymptom3CH, HHPSymptom3CI, HHPSymptom3CJ, HHPSymptom3CK, HHPSymptom3CL, HHPSymptom3CM, HHPSymptom3CN, HHPSymptom3CO, HHPSymptom3CP, HHPSymptom3CQ, HHPSymptom3CR, HHPSymptom3CS, HHPSymptom3CT, HHPSymptom3CU, HHPSymptom3CV, HHPSymptom3CW, HHPSymptom3CX, HHPSymptom3CY, HHPSymptom3DA, HHPSymptom3DB, HHPSymptom3DC, HHPSymptom3DD, HHPSymptom3DE, HHPSymptom3DF, HHPSymptom3DH, HHPSymptom3DI, HHPSymptom3DJ, HHPSymptom3DK, HHPSymptom3DL, HHPSymptom3DM, HHPSymptom3DN, HHPSymptom3DO, HHPSymptom3DP, HHPSymptom3DQ, HHPSymptom3DR, HHPSymptom3DS, HHPSymptom3DT, HHPSymptom3DU, HHPSymptom3DV, HHPSymptom3DW, HHPSymptom3DX, HHPSymptom3DY, HHPSymptom3DZ, HHPSymptom3EA, HHPSymptom3EB, HHPSymptom3EC, HHPSymptom3ED, HHPSymptom3EE, HHPSymptom3EF, HHPSymptom3EG, HHPSymptom3EH, HHPSymptom3EI, HHPSymptom3EJ, HHPSymptom3EK, HHPSymptom3EL, HHPSymptom3EM, HHPSymptom3EN, HHPSymptom3EO, HHPSymptom3EP, HHPSymptom3EQ, HHPSymptom3FL, HHPSymptom3FM, HHPSymptom3FN, HHPSymptom3FO, HHPSymptom3FP, HHPSymptom3FR, HHPSymptom3FS } from '../../../../utils/gspn_hhp_symptoms';


type TMobile = {
    symptom1: string | number;
    onChangeSymp1: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    symptom2: string | number;
    onChangeSymp2: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    symptom2Label: string;
    symptom3: string | number;
    onChangeSymp3: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}
function Mobile({ symptom1, onChangeSymp1, symptom2, onChangeSymp2, symptom2Label, symptom3, onChangeSymp3 }: TMobile) {
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
        </>
    )
}

export default Mobile
