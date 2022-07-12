import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	const colours = {
		darkModeText: 'hsl(0, 0%, 100%)',

		darkModeElement: 'hsl(209, 23%, 22%)',

		darkModeBG: 'hsl(207, 26%, 17%)',
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, colours }}>
			{children}
		</ThemeContext.Provider>
	)
}
