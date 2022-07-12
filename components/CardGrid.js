import Card from './Card'
import { useThemeContext } from '../hooks/useThemeContext'

const CardGrid = ({ countries }) => {
	const { isDarkMode } = useThemeContext()

	return (
		<div
			className="grid-container"
			style={{ backgroundColor: isDarkMode && 'hsl(207, 26%, 17%)' }}
		>
			{countries.map((country) => (
				<Card key={country.cca2} country={country} />
			))}
		</div>
	)
}
export default CardGrid
