import { redirect, useLoaderData } from "react-router-dom"
import { toast } from "sonner"
import { customFetch } from "../utils"
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components"

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user

    if (!user) {
      toast.warning("You must be logged in to view orders")
      return redirect("/login")
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    try {
      const response = await customFetch("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      return { orders: response.data.data, meta: response.data.meta }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error placing your order"
      toast.warning(errorMessage)

      // eslint-disable-next-line no-constant-condition
      if (error.response.status === 401 || 403) {
        return redirect("/login")
      }

      return null
    }
  }

function Orders() {
  const { meta } = useLoaderData()

  if (meta.pagination.total < 1) {
    return <SectionTitle text={"Please make an order"} />
  }

  return (
    <>
      <SectionTitle text={"Your Orders"} />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  )
}
export default Orders
