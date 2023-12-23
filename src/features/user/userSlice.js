import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const themes = {
  garden: "garden",
  sunset: "sunset",
}

function getThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme") || themes.garden
  document.documentElement.setAttribute("data-theme", theme)
  return theme
}

const initialState = {
  user: { username: "coding addict" },
  theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login")
    },
    logoutUser: (state) => {
      console.log("logout")
    },
    toggleTheme: (state) => {
      const { sunset, garden } = themes
      state.theme = state.theme === sunset ? garden : sunset
      document.documentElement.setAttribute("data-theme", state.theme)
      localStorage.setItem("theme", state.theme)
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
