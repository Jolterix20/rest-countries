import styles from '../styles/BackButton.module.css'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import { useThemeContext } from '../hooks/useThemeContext'

const BackButton = () => {
	const { isDarkMode, colours } = useThemeContext()
	const { darkModeElement, darkModeText } = colours
	return (
		<div className={styles.container}>
			<Link href="/">
				<a>
					<button
						className={styles.back_btn}
						style={{
							backgroundColor: isDarkMode && darkModeElement,
							color: isDarkMode && darkModeText,
						}}
					>
						<FiArrowLeft /> Back
					</button>
				</a>
			</Link>
		</div>
	)
}
export default BackButton
