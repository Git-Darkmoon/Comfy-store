import { useLoaderData, useLocation, useNavigate } from "react-router-dom"

function ComplexPaginationContainer() {
  const { meta } = useLoaderData()
  const { page, pageCount } = meta.pagination

  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item px-2 ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    )
  }

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set("page", pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)

    console.log(pageNumber)
  }

  const renderPageButtons = () => {
    const pageButtons = []
    // First Button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }))

    if (page >= 3) {
      // Dots btn
      pageButtons.push(
        <button
          className="btn btn-xs sm:btn-md border-none join-item px-2"
          key={"dots-1"}
        >
          ...
        </button>
      )
    }

    // Active/Current Page
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }))
    }

    if (page < pageCount - 1) {
      // Dots btn
      pageButtons.push(
        <button
          className="btn btn-xs sm:btn-md border-none join-item px-2"
          key={"dots-2"}
        >
          ...
        </button>
      )
    }

    // Last Button
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    )
    return pageButtons
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
        {renderPageButtons()}
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
export default ComplexPaginationContainer
