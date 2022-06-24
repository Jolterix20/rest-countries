import Image from 'next/image'
import Card from './Card'

const CardGrid = ({ countries }) => {
	return (
		<div className="grid-container">
			{countries.map((country) => (
				<Card key={country.cca2} country={country} />
			))}
		</div>
	)
}
export default CardGrid
