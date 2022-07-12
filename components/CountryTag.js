import Link from 'next/link'
import styles from '../styles/CountryTag.module.css'
import { useThemeContext } from '../hooks/useThemeContext'

const CountryTag = ({ country, border }) => {
	const { isDarkMode, colours } = useThemeContext()
	const { darkModeElement } = colours
	return (
		<Link href={`/${border}`}>
			<a
				className={styles.country_tag}
				style={{ backgroundColor: isDarkMode && darkModeElement }}
			>
				{country}
			</a>
		</Link>
	)
}
export default CountryTag
