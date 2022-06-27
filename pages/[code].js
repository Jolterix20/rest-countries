import Layout from '../components/Layout'

const CountryDetails = ({ country }) => {
	return (
		<Layout>
			<h1>{country.name.common}</h1>
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
