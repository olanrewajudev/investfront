
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type PaginationProps = { currentPage: number, totalPages: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>> }
export default function Pagination({ currentPage, totalPages, setCurrentPage, }: PaginationProps) {
    const getPages = () => {
        const pages: (number | string)[] = []
        if (totalPages <= 7) { return Array.from({ length: totalPages }, (_, i) => i + 1) }

        if (currentPage <= 4) {
            pages.push(1, 2, 3, 4, 5, '...', totalPages)
        } else if (currentPage >= totalPages - 3) {
            pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
        } else {
            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
        }
        return pages
    }

    return (
        <div className="flex items-center justify-between px-3 sm:px-6 gap-2 sm:gap-6 my-6  flex-wrap">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className="flex items-center gap-2 border rounded-full px-3 sm:px-5 py-2 text-sm sm:text-base disabled:opacity-50">
                <FaChevronLeft /> <span className="hidden sm:inline">Prev</span>
            </button>

            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrolls max-w-[60%] sm:max-w-full">
                {getPages().map((page, index) => (
                    <button key={index} disabled={page === '...'} onClick={() => typeof page === 'number' && setCurrentPage(page)} className={`min-w-[32px] h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-base  
              ${currentPage === page ? 'border font-semibold' : ''}${page === '...' ? 'cursor-default' : ''}
            `}>{page}</button>
                ))}
            </div>

            {/* Next */}
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)} className="flex items-center gap-2 border rounded-full px-3 sm:px-5 py-2 text-sm sm:text-base disabled:opacity-50"><span className="hidden sm:inline">Next</span> <FaChevronRight /></button>
        </div>
    )
}