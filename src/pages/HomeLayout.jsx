import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <>
      <nav>
        <span className="text-lg text-primary">Comfy</span>
      </nav>
      <Outlet />
    </>
  )
}
export default HomeLayout
