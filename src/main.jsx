import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { store } from "./store.js"
import { Provider } from "react-redux"
import { Toaster } from "sonner"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        unstyled: true,
        duration: 1750,
        classNames: {
          toast:
            "flex items-center gap-x-2 bg-base-100 p-4 rounded-lg shadow-xl w-full",
          title: "text-md",
        },
      }}
    />
  </Provider>
)
