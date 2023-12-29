import { Filters, ProductsContainer, PaginationContainer } from "../components"
import { customFetch } from "../utils"

const url = "/products"

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } = queryParams

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const queryParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    // console.log(params)
    const response = await queryClient.ensureQueryData(
      allProductsQuery(queryParams)
    )
    const products = response.data.data
    const meta = response.data.meta
    return { products, meta, queryParams }
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
