import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { useThemeContext } from '../hooks/useThemeContext'

const Card = ({ country }) => {
	const { isDarkMode } = useThemeContext()

	return (
		<div
			className={styles.card}
			style={{ backgroundColor: isDarkMode && 'hsl(209, 23%, 22%)' }}
		>
			<Image
				alt="Flag"
				src={country.flags.png}
				objectFit="contain"
				width={320}
				height={160}
			/>
			<div className={styles.content}>
				<Link href={`/${country.cca3}`}>
					<a>
						<strong>{country.name.common}</strong>
					</a>
				</Link>
				<div>
					<p>
						<span className={styles.tag}>Population: </span>
						<span>
							{new Intl.NumberFormat().format(country.population)}
						</span>
					</p>
					<p>
						<span className={styles.tag}>Region: </span>
						<span>{country.region}</span>
					</p>
					<p>
						<span className={styles.tag}>Capital: </span>
						<span>
							{country.capital
								? country.capital?.join(', ')
								: 'None'}
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}
export default Card
