import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import CardGrid from '../components/CardGrid'
import { FaSearch } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

export default function Home() {
	const [searchText, setSearchText] = useState('Search for a country...')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [countries, setCountries] = useState(null)
	const [selectedValue, setSelectedValue] = useState('Filter By Region')

	useEffect(() => {
		const fetchCountries = async () => {
			setLoading(true)
			try {
				let res
				if (selectedValue === 'Filter By Region') {
					res = await fetch(`https://restcountries.com/v3.1/all`)
				} else {
					res = await fetch(
						`https://restcountries.com/v3.1/region/${selectedValue}`
					)
				}
				if (res.ok) {
					const data = await res.json()
					setLoading(false)
					setCountries(data)
				} else {
					throw new Error('Error fetching the countries :(')
				}
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}
		fetchCountries()
	}, [selectedValue])

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
				e.target.blur()
			} catch (error) {
				setError(error.message)
				setLoading(false)
			}
		}
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
			<div className="filter">
				<div className="search">
					<IconContext.Provider value={{ color: 'hsl(0, 0%, 52%)' }}>
						<FaSearch />
					</IconContext.Provider>
					<input
						type="search"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						onKeyUp={handleKeyUp}
					/>
				</div>
				<select
					defaultValue={selectedValue}
					onChange={(e) => setSelectedValue(e.target.value)}
				>
					<option value="Filter By Region">Filter By Region</option>
					<option value="Africa">Africa</option>
					<option value="America">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
			<CardGrid countries={countries} />
		</Layout>
	)
}
