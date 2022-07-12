import Link from 'next/link'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'
import { useThemeContext } from '../hooks/useThemeContext'

const Header = () => {
	const { isDarkMode, setIsDarkMode, colours } = useThemeContext()
	const { darkModeText } = colours

	return (
		<div style={{ backgroundColor: isDarkMode && 'hsl(209, 23%, 22%)' }}>
			<header className="header">
				<Link href="/">
					<a>
						<h2>Where in the world?</h2>
					</a>
				</Link>
				<button
					className="btn"
					onClick={() => setIsDarkMode(!isDarkMode)}
					style={{ color: isDarkMode && darkModeText }}
				>
					{isDarkMode ? <FaRegSun /> : <FaRegMoon />}{' '}
					{isDarkMode ? 'Light' : 'Dark'} Mode
				</button>
			</header>

			<style jsx>{`
				div {
					box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);
				}

				.header {
					display: flex;
					justify-content: space-between;
					margin: 0 40px;
				}

				.btn {
					background: none;
					outline: none;
					border: none;
					padding: 0;
					font: inherit;
					font-weight: 600;
					cursor: pointer;
				}
			`}</style>
		</div>
	)
}
export default Header
