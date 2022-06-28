import BackButton from '../components/BackButton'
import Layout from '../components/Layout'
import styles from '../styles/CountryDetails.module.css'
import Image from 'next/image'
import countryISOMapping from '../helpers/countryCodeMappings'

const CountryDetails = ({ country }) => {
	return (
		<Layout>
			<BackButton />
			<div className={styles.details_grid}>
				<div>
					<Image
						src={country.flags.png}
						width={320}
						height={320}
						layout="responsive"
						objectFit="contain"
						alt={country.name.common}
					/>
				</div>
				<div>
					<h2>{country.name.common}</h2>
					<div className={styles.details}>
						<div>
							<p>
								<span className={styles.tag}>
									Native Name:{' '}
								</span>
								{
									country.name.nativeName[
										Object.keys(country.name.nativeName)[0]
									].common
								}
							</p>
							<p>
								<span className={styles.tag}>Population: </span>
								{new Intl.NumberFormat().format(
									country.population
								)}
							</p>
							<p>
								<span className={styles.tag}>Region: </span>
								{country.region}
							</p>
							<p>
								<span className={styles.tag}>Sub Region: </span>
								{country.subregion}
							</p>
							<p>
								<span className={styles.tag}>Capital: </span>
								{country.capital
									? country.capital?.join(', ')
									: 'None'}
							</p>
						</div>
						<div>
							<p>
								<span className={styles.tag}>
									Top Level Domain:{' '}
								</span>
								{country.tld.join(', ')}
							</p>
							<p>
								<span className={styles.tag}>Currencies: </span>
								{Object.values(country.currencies)
									.map((curr) => curr.name)
									.join(', ')}
							</p>
							<p>
								<span className={styles.tag}>Languages: </span>
								{Object.values(country.languages).join(', ')}
							</p>
						</div>
					</div>
					<p>
						<span className={styles.tag}>Border Countries: </span>
						{country.borders ? (
							country.borders.map((border) => (
								<span key={border}>
									{new Intl.DisplayNames(['en'], {
										type: 'region',
									}).of(countryISOMapping[border])}
								</span>
							))
						) : (
							<span>None</span>
						)}
					</p>
				</div>
			</div>
		</Layout>
	)
}
export default CountryDetails

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://restcountries.com/v3.1/alpha/${params.code}`
	)
	const [country] = await res.json()
	return {
		props: { country },
	}
}

export async function getStaticPaths() {
	const res = await fetch(`https://restcountries.com/v3.1/all`)
	const countries = await res.json()

	const paths = countries.map((country) => ({
		params: { code: country.cca3 },
	}))

	return {
		paths,
		fallback: false,
	}
}
