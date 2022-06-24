import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

const Card = ({ country }) => {
	return (
		<div className={styles.card}>
			<Image
				alt="Flag"
				src={country.flags.png}
				objectFit="contain"
				width={320}
				height={160}
			/>
			<div>
				<strong>{country.name.common}</strong>
			</div>
		</div>
	)
}
export default Card
