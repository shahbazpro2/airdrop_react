
const TableLayout = ({ children, title }) => {
    return (
        <>
            <div className="rounded-lg bg-secondary">
                <div className="py-5 border-b border-gray-700  px-5 text-lg font-bold">
                    {title}
                </div>
                {children}
            </div>
        </>
    )
}

export default TableLayout  