import Link from 'next/link'
import styles from '../styles/CountryTag.module.css'

const CountryTag = ({ country, border }) => {
	return (
		<Link href={`/${border}`}>
			<a className={styles.country_tag}>{country}</a>
		</Link>
	)
}
export default CountryTag
