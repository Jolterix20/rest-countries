import Head from 'next/head'
import Header from './Header'
import { useThemeContext } from '../hooks/useThemeContext'

const Layout = ({ children }) => {
	const { isDarkMode, colours } = useThemeContext()
	const { darkModeBG, darkModeText } = colours
	return (
		<div
			style={{
				backgroundColor: isDarkMode && darkModeBG,
				color: isDarkMode && darkModeText,
				height: '100vh',
			}}
		>
			<Head>
				<title>Where in the world?</title>
				<meta
					name="description"
					content="An app to browse countries all over the world"
				/>
			</Head>

			<Header />

			<div>{children}</div>
		</div>
	)
}
export default Layout
