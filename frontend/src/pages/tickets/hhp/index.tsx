
import Container from '@/components/Container';
import Modal from '@/components/Modals';
import Pagination from '@/components/Pagination';
import Sidebar from '@/components/Sidebar';
import columns from '@/components/TicketsTable/columns';
import TableBody from '@/components/TicketsTable/TableBody';
import ToTopButton from '@/components/ToTopButton';
import {
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import axios from 'axios';
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useFetchTickets } from '../../../../hooks/useFetch';

type TSearchCustomer = {
    id: number;
    firstname: string;
    lastname: string;
    businessname: string;
    email: string;
    phone: string;
    mobile: string;
}

function ServiceOrderHHP() {

    const router = useRouter();
    const { getAllTicketsHHP, getAllTicketsError } = useFetchTickets()

    const [createSOModalVisible, setCreateSOModalVisble] = useState<boolean | null | any>()

    const handleRowClick = (row) => {
        setCreateSOModalVisble(row?.original);
    };

    const closeModal = () => {
        setCreateSOModalVisble(false);
    };

    // Redirects user to the edit table page
    const handleUpdate = (e: React.SyntheticEvent, id: string | number) => {
        e.stopPropagation();
        router.push(`/tickets/hhp/${id}`);
    };


    // Table sorting
    const [sorting, setSorting] = useState<SortingState>([]);

    // Table filtering
    const [filtering, setFiltering] = useState("");

    const table = useReactTable({
        data: getAllTicketsHHP,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Head>
                <title>HHP Tickets | MMALLONTHEMOVE</title>
            </Head>
            <Sidebar />
            <Container>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">HHP Tickets</h1>
                <div className="flex justify-between items-center">

                    <form className="flex items-center" id="search-form">
                        <label htmlFor="simple-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-primary-500 block pl-10 p-2"
                                placeholder="Search"
                                maxLength={10}
                                value={filtering}
                                onChange={(e) => setFiltering(e.target.value)}
                            />
                        </div>
                    </form>
                    <div>
                        <button
                            type="button"
                            onClick={handleButtonClick}
                            className="inline-flex w-full rounded-md border outline-none border-gray-300 shadow-sm px-4 py-2 bg-[#273e47] hover:bg-[#273e47bd] active:bg-[#273e47bd] focus:bg-[#273e47bd] text-sm font-medium text-white"
                        >
                            Create ticket
                        </button>
                    </div>
                    {/* <div>
                        <button
                            type="button"
                            onClick={handleButtonClick}
                            className="inline-flex justify-between items-center gap-2 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Create
                            <ChevronDownIcon className="h-4 w-4 text-gray-900" />
                        </button>

                        {isOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white z-10 mr-3">
                                <div
                                    className="py-1  divide-y-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    <button
                                        onClick={() => router.push("/prompts")}
                                        className="block w-full bg-white px-4 py-2 text-sm text-gray-800 font-medium hover:bg-gray-100 hover:text-gray-900"
                                        role="menuitem"
                                    >
                                        Ticket
                                    </button>

                                </div>
                            </div>
                        )}
                    </div> */}

                </div>

                <div className="max-h-[540px] overflow-y-auto my-4">
                    <table className="relative w-full max-w-full whitespace-nowrap text-sm text-left text-white table-auto">
                        <thead className="sticky top-0 bg-[#273e47] hover:bg-[#273e47bd] active:bg-[#273e47bd] focus:bg-[#273e47bd] text-white text-sm uppercase font-semibold">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id} className="font-semibold">
                                    <th className="p-2 cursor-pointer font-semibold">
                                        Action
                                    </th>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <th
                                                key={header.id}
                                                className="px-4 cursor-pointer font-semibold"
                                            >
                                                {header.isPlaceholder ? null : (
                                                    <div
                                                        {...{
                                                            className: header.column.getCanSort()
                                                                ? "cursor-pointer select-none"
                                                                : "",
                                                            onClick:
                                                                header.column.getToggleSortingHandler(),
                                                        }}
                                                    >
                                                        {flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                        {{
                                                            asc: " ▽",
                                                            desc: " △",
                                                        }[header.column.getIsSorted() as string] ??
                                                            null}
                                                    </div>
                                                )}
                                            </th>
                                        );
                                    })}
                                </tr>
                            ))}
                        </thead>
                        <TableBody>
                            {table.getRowModel().rows.map((row: any) => (

                                <tr
                                    onClick={() => handleRowClick(row)}
                                    key={row.id}
                                    className="border-b cursor-pointer text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 active:bg-[#eee] active:text-gray-900"

                                >
                                    <td className="px-4 py-3  font-medium text-sm max-w-full">
                                        <button
                                            type="button"
                                            role="button"
                                            onClick={(e) => handleUpdate(e, row.original.unique_id)}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    {row.getVisibleCells().map((cell: any) => (
                                        <td
                                            key={cell.id}
                                            className="px-4 py-3 font-medium text-sm max-w-full"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>


                            ))}
                        </TableBody>
                    </table>
                    <Modal title="" isVisible={createSOModalVisible} onClose={closeModal} content={<>

                        {createSOModalVisible && (
                            <div>
                                <p>Customer: {createSOModalVisible.customer_fullname}</p>
                                <p>Email: {createSOModalVisible.customer_email}</p>
                                <p>Ticket: {createSOModalVisible.ticket_number}</p>
                            </div>
                        )}

                    </>} />
                    <div className="h-2" />
                    <Pagination table={table} />
                    <ToTopButton />
                </div>
            </Container>
        </>
    )
}

export default ServiceOrderHHP
