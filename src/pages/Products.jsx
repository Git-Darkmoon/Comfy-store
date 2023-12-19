import { Filters, ProductsContainer, PaginationContainer } from "../components"
import { customFetch } from "../utils"

const url = "/products"

export const loader = async ({ request }) => {
  const params = new URL(request.url).searchParams
  const search = params.get("search")
  console.log(search)
  const response = await customFetch(url)
  const products = response.data.data
  const meta = response.data.meta
  return { products, meta }
}

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}
export default Products
