import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { datetimestamp } from '../../../utils/datetime';
import moment from 'moment';
import Container from '@/components/Container';
import Tabs from '@/components/Tabs';
import ServiceOrderHHP from './hhp';
import ServiceOrderDTVHA from './dtv_ha';



function ServiceOrder() {

    // Define an array of tabs
    const tabs = [
        { id: 'tab1', label: 'HHP', content: <ServiceOrderHHP /> },
        { id: 'tab2', label: 'DTV/HA', content: <ServiceOrderDTVHA /> },
    ];


    return (
        <>
            <Container>

                <h1 className='my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Device inspection</h1>
                <Tabs tabs={tabs} />
            </Container>
        </>
    )
}

export default ServiceOrder
