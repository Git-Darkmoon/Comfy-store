import { useLoaderData } from "react-router-dom"

function PaginationContainer() {
  const { meta } = useLoaderData()
  const { pageCount, page } = meta.pagination

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1
  })

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber)
  }

  if (pageCount < 2) return null

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => handlePageChange("prev")}
        >
          Prev
        </button>
        {pages.map((pageNum) => {
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNum === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNum}
            </button>
          )
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => handlePageChange("next")}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default PaginationContainer
