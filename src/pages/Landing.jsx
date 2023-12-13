import { FeaturedProducts, Hero } from "../components"
import { customFetch } from "../utils"

const url = "/products?featured=true"

export const loader = async () => {
  const resp = await customFetch(url)
  const products = resp.data.data
  return { products }
}

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing
