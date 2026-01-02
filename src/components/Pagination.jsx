const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center gap-4 bg-white border border-[#B6D1C7] px-6 py-3 rounded-full shadow-sm">
            {/* Prev */}
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`
                px-5 py-2 text-sm font-medium rounded-full transition-all
                ${currentPage === 1
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-[#EAF4F1] text-[#335F5F] hover:bg-[#B6D1C7]"
                            }
                `}
            >
                Prev
            </button>

            {/* Page Info */}
            <span className="text-sm text-gray-600">
                Page <span className="font-semibold text-[#335F5F]">{currentPage}</span>{" "}
                of <span className="font-semibold text-[#335F5F]">{totalPages}</span>
            </span>

            {/* Next */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`
                    px-5 py-2 text-sm font-medium rounded-full transition-all
                    ${currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#335F5F] text-white hover:bg-[#5F8F82]"
                    }
                `}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
