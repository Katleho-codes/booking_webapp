import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchTickets = () => {
    const [getAllTicketsHHP, setGetAllTicketsHHP] = useState<string | any>([]);
    const [getAllTicketsDTV, setGetAllTicketsDTV] = useState<string | any>([]);
    const [getAllTicketsError, setGetAllTicketsError] = useState<string | any>([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/tickets`)
                .then((res) => {
                    // console.log(res.data)
                    const filteredHHP = res.data?.filter((x: any) => x.department === "HHP")
                    const filteredDTVHA = res.data?.filter((x: any) => x.department === "DTV/HA")
                    // console.log(filteredHHP)
                    setGetAllTicketsHHP(filteredHHP);
                    setGetAllTicketsDTV(filteredDTVHA);
                })
                .catch((e) => {
                    // console.log(e);
                    setGetAllTicketsError(e.data)
                })

        };
        fetchData();
    }, [getAllTicketsHHP, getAllTicketsDTV]);

    return { getAllTicketsHHP, getAllTicketsDTV, getAllTicketsError };
};
export const useFetchTicketById = (id: string | number | any) => {
    const [getTicketByid, setGetTicketByid] = useState<string | any>([]);
    const [getTicketByidError, setGetTicketByidError] = useState<string | any>([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/tickets/${id}`)
                .then((res) => {
                    setGetTicketByid(res.data);
                })
                .catch((e) => {
                    // console.log(e);
                    setGetTicketByidError(e.data)
                })
        };
        fetchData();
    }, [getTicketByid, id]);

    return { getTicketByid, getTicketByidError };
};