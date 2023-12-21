import { useLoaderData, useLocation, useNavigate } from "react-router-dom"

function PaginationContainer() {
  const { meta } = useLoaderData()
  const { page, pageCount } = meta.pagination

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1
  })

  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set("page", pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)

    console.log(pageNumber)
  }

  if (pageCount <= 1) return null

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let previousPage = page - 1
            if (previousPage < 1) previousPage = pageCount
            handlePageChange(previousPage)
          }}
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
          onClick={() => {
            let nextPage = page + 1
            if (nextPage < 1) nextPage = pageCount
            handlePageChange(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default PaginationContainer
