import React from 'react'
import { fridgeSymptom1, fridgeSymptom2, fridgeSymptom2A, fridgeSymptom2B, fridgeSymptom2C, fridgeSymptom2D, fridgeSymptom2E, fridgeSymptom2F, fridgeSymptom2G, fridgeSymptom2H, fridgeSymptom2I, fridgeSymptom2J, fridgeSymptom3, fridgeSymptom3A, fridgeSymptom3C, fridgeSymptom3D, fridgeSymptom3E, fridgeSymptom3F, fridgeSymptom3G, fridgeSymptom3H, fridgeSymptom3I, fridgeSymptom3J, fridgeSymptom3K, fridgeSymptom3L, fridgeSymptom3M, fridgeSymptom3M_, fridgeSymptom3N, fridgeSymptom3O, fridgeSymptom3Q, fridgeSymptom3R, fridgeSymptom3S, fridgeSymptom3T, fridgeSymptom3U, fridgeSymptom3V, fridgeSymptom3W, fridgeSymptom3X, fridgeSymptom3Y, fridgeSymptom3Z, fridgeSymptom3ZA, fridgeSymptom3ZB, fridgeSymptom3ZC, fridgeSymptom3ZD, fridgeSymptom3ZE, fridgeSymptom3ZF, fridgeSymptom3ZG, fridgeSymptom3ZH, fridgeSymptom2K } from '../../../../utils/gspn_fridge_symptoms';


type TFridges = {
    symptom1: string | number;
    onChangeSymp1: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    symptom2: string | number;
    onChangeSymp2: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    symptom2Label: string;
    symptom3: string | number;
    onChangeSymp3: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}
function Fridges({ symptom1, onChangeSymp1, symptom2, onChangeSymp2, symptom2Label, symptom3, onChangeSymp3 }: TFridges) {
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
                    {fridgeSymptom1.map((x) => (
                        <option key={x._name} value={`${x.value}`}>
                            {x?._name}
                        </option>
                    ))}
                </select>

            </div>

            {/* Symptom 2 */}
            <div>
                {symptom1 === "M1" && <div className="my-4">

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
                        {fridgeSymptom2.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "M2" && <div className="my-4">

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
                        {fridgeSymptom2A.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "M3" && <div className="my-4">

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
                        {fridgeSymptom2B.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "M4" && <div className="my-4">

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
                        {fridgeSymptom2C.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "M5" && <div className="my-4">

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
                        {fridgeSymptom2D.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "M6" && <div className="my-4">

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
                        {fridgeSymptom2E.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "M7" && <div className="my-4">

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
                        {fridgeSymptom2F.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "M8" && <div className="my-4">

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
                        {fridgeSymptom2G.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
                {symptom1 === "M9" && <div className="my-4">

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
                        {fridgeSymptom2H.map((x) => (
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
                        {fridgeSymptom2I.map((x) => (
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
                        {fridgeSymptom2J.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
            </div>

            {/* Symptom 3 */}

            <div>
                {symptom2Label === "01 - [Installation]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Missing parts]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3A.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [Interior design/damage/discolor]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3A.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "03 - [Exterior design/damage/discolor]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3C.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Light issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3D.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [Power issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3E.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "03 - [Leakage current (shock from fridge)]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3F.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "04 - [WiFi issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3G.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "05 - [Smell issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3H.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Appearance defect]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3I.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [OF OF or OFF is displayed]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3J.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "03 - [Button function not responding]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3K.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "04 - [Display status (blinking/no display)]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3L.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "05 - [LCD screen]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3M.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "06 - [Pc-Er/Er-PC Error code]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3M_.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "07 - [Digit error code]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3N.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "08 - [LED error message]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3O.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Door alarm]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3O.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [Single noise(within 5 sec)]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3Q.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "03 - [Repeated noise(over 5 sec)]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3R.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "04 - [When dispensing ice]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3S.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Ice/water dispensing]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3T.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [Ice making/ice bucket stuck issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3U.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "03 - [Leak/dripping]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3V.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "04 - [Appearance defect]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3W.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "05 - [Sparkling issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3X.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Frost/condensation(moisture)]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3Y.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [Over cooling]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3Z.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "03 - [No cooling]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3ZA.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "04 - [Weak cooling]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3ZB.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "05 - [Exterior temperature-hot]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3ZC.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Level/alignment issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3ZD.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [Operation/noise issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3ZE.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "03 - [Appearance defect]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3ZF.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "04 - [Handle/damage]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3ZG.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Product]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {fridgeSymptom3ZH.map((x) => (
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
                        {fridgeSymptom2K.map((x) => (
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
                        {fridgeSymptom2K.map((x) => (
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
                        {fridgeSymptom2K.map((x) => (
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
                        {fridgeSymptom2K.map((x) => (
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
                        {fridgeSymptom2K.map((x) => (
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
                        {fridgeSymptom2K.map((x) => (
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
                        {fridgeSymptom2K.map((x) => (
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

export default Fridges
