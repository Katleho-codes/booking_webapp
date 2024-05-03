import React from 'react'
import { microwaveSymptom1, microwaveSymptom2, microwaveSymptom2A, microwaveSymptom2B, microwaveSymptom2C, microwaveSymptom2D, microwaveSymptom2D_, microwaveSymptom2E, microwaveSymptom2F, microwaveSymptom2G, microwaveSymptom3A, microwaveSymptom3B, microwaveSymptom3C, microwaveSymptom3D, microwaveSymptom3F, microwaveSymptom3G, microwaveSymptom3H, microwaveSymptom3I, microwaveSymptom3J, microwaveSymptom3K, microwaveSymptom3L, microwaveSymptom3M } from '../../../../utils/gspn_microwave_symptoms';

type TMicrowaves = {
    symptom1: string | number;
    onChangeSymp1: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    symptom2: string | number;
    onChangeSymp2: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    symptom2Label: string;
    symptom3: string | number;
    onChangeSymp3: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}

function Microwaves({ symptom1, onChangeSymp1, symptom2, onChangeSymp2, symptom2Label, symptom3, onChangeSymp3 }: TMicrowaves) {
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
                    {microwaveSymptom1.map((x) => (
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
                        {microwaveSymptom2.map((x) => (
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
                        {microwaveSymptom2A.map((x) => (
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
                        {microwaveSymptom2B.map((x) => (
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
                        {microwaveSymptom2C.map((x) => (
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
                        {microwaveSymptom2D.map((x) => (
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
                        {microwaveSymptom2E.map((x) => (
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
                        {microwaveSymptom2F.map((x) => (
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
                        {microwaveSymptom2G.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>}
            </div>
            {/* Symptom 3 */}
            <div className="my-4">
                {symptom2Label === "01 - [Exterior design]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3A.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [Interior design]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3B.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Cooking issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3C.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Error message]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3D.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
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
                        {microwaveSymptom2D_.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Noise issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom2E.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "01 - [Control]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3F.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "02 - [Doesn't work]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3G.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "03 - [Fan issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3H.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "04 - [Light issue]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3I.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "05 - [Operation]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3J.map((x) => (
                            <option key={x._name} value={`${x.value}`}>
                                {x?._name}
                            </option>
                        ))}
                    </select>

                </div>
                }
                {symptom2Label === "06 - [Display]" && <div className="my-4">

                    <select
                        // required
                        // aria-required
                        name='symptom3'
                        id="symptom3"
                        value={symptom3} onChange={onChangeSymp3}
                        className="cursor-pointer mb-2 bg-white outline-none border border-gray-300 outline-0 text-gray-900  font-semibold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-2.5"
                    >
                        <option disabled value="">
                            Choose symptom 3
                        </option>
                        {microwaveSymptom3K.map((x) => (
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
                        {microwaveSymptom3L.map((x) => (
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
                        {microwaveSymptom3M.map((x) => (
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
                        {microwaveSymptom3M.map((x) => (
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
                        {microwaveSymptom3M.map((x) => (
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
                        {microwaveSymptom3M.map((x) => (
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
                        {microwaveSymptom3M.map((x) => (
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
                        {microwaveSymptom3M.map((x) => (
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
                        {microwaveSymptom3M.map((x) => (
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

export default Microwaves
