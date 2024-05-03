import React, { useEffect, useState } from 'react';

import HHP from './hhp';
import axios from 'axios';
import { datetimestamp } from '../../../utils/datetime';
import moment from 'moment';
import Container from '@/components/Container';
import Tabs from '@/components/Tabs';
import DTVHA from './dtv_ha';
import Head from 'next/head';


function DeviceInspection() {

    // Define an array of tabs
    const tabs = [
        { id: 'tab1', label: 'HHP', content: <HHP /> },
        { id: 'tab2', label: 'DTV/HA', content: <DTVHA /> },
    ];


    return (
        <>
            <Head><title>Device Inspection</title></Head>
            <Container>
                <button type="button" onClick={() => history.back()}
                    className="bg-[#082f49]   font-semibold text-white dark:text-[#eee] hover:bg-blue-800 rounded-sm text-sm p-2.5 text-center">Back</button>
                <h1 className='my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Device inspection</h1>
                <Tabs tabs={tabs} />
            </Container>
        </>
    )
}

export default DeviceInspection
