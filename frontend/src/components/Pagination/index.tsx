interface Itable {
    table: any;
}
const Pagination = (props: Itable) => {
    return (
        <div className="pagination flex gap-4 p-2">
            <button
                role="button"
                className="border rounded p-1 font-medium page-index-button hidden md:visible"
                onClick={() => props.table.setPageIndex(0)}
                disabled={!props.table.getCanPreviousPage()}
            >
                {"<<"}
            </button>
            <button
                role="button"
                className="border rounded p-1  font-medium"
                onClick={() => props.table.previousPage()}
                disabled={!props.table.getCanPreviousPage()}
            >
                {"<"}
            </button>
            <button
                role="button"
                className="border rounded p-1  font-medium"
                onClick={() => props.table.nextPage()}
                disabled={!props.table.getCanNextPage()}
            >
                {">"}
            </button>
            <button
                role="button"
                className="border rounded p-1 font-medium page-index-button hidden md:visible"
                onClick={() => props.table.setPageIndex(props.table.getPageCount() - 1)}
                disabled={!props.table.getCanNextPage()}
            >
                {">>"}
            </button>
            <span className="flex items-center gap-1 ">
                <div className=" font-semibold text-[#0d0d0d]">
                    Page
                </div>
                <strong>
                    {props.table.getState().pagination.pageIndex + 1} of{" "}
                    {props.table.getPageCount()}
                </strong>
            </span>
            <span className="flex items-center gap-1 ">
                | Go to page:
                <label htmlFor="search-page-number" className="sr-only">
                    {" "}
                    Go to page:
                </label>
                <input
                    id="search-page-number"
                    name="search-page-number"
                    type="number"
                    defaultValue={props.table.getState().pagination.pageIndex + 1}
                    onChange={(e) => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                        props.table.setPageIndex(page);
                    }}
                    className="border p-1 rounded w-16 bg-gray-50 border-gray-300 text-gray-900 "
                />
            </span>
            <label htmlFor="showPageSize" className="sr-only">
                Show Page Size
            </label>
            <select
                id="showPageSize"
                name="showPageSize"
                value={props.table.getState().pagination.pageSize}
                className="border  outline-none ring-0  font-medium cursor-pointerbg-gray-50 border-gray-300 text-gray-900  p-1 rounded"
                onChange={(e) => {
                    props.table.setPageSize(Number(e.target.value));
                }}
            >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Pagination;
