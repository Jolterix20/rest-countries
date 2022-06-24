import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
	const [searchText, setSearchText] = useState('')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [countries, setCountries] = useState(null)

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const res = await fetch(`https://restcountries.com/v3.1/all`)
				if (res.ok) {
					const data = await res.json()

					setLoading(false)
					// console.log(data)
					setCountries(data)
				} else {
					throw new Error('Error fetching the contries :(')
				}
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}
		fetchCountries()
	}, [])

	const handleKeyUp = async (e) => {
		if (e.key === 'Enter') {
			setLoading(true)

			try {
				const res = await fetch(
					`https://restcountries.com/v3.1/name/${searchText}`
				)
				if (res.ok) {
					const data = await res.json()
					setLoading(false)
					setCountries(data)
				} else {
					throw new Error('Error fetching the country :(')
				}
				// console.log(data)
				e.target.blur()
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}

		// setCountries(data)
	}

	if (loading)
		return (
			<Layout>
				<div className="loading">Loading...</div>
			</Layout>
		)
	if (error)
		return (
			<Layout>
				<div className="error">{error}</div>
			</Layout>
		)

	return (
		<Layout>
			<input
				type="text"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				onKeyUp={handleKeyUp}
			/>
			<div className="grid-container">
				{countries.map((country) => (
					<div key={country.cca2}>
						<Image
							alt="Flag"
							src={country.flags.png}
							objectFit="contain"
							width={320}
							height={320}
						/>
						<div>{country.name.common}</div>
					</div>
				))}
			</div>
		</Layout>
	)
}
