import Image from 'next/image'

const CardGrid = ({ countries }) => {
	return (
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
	)
}
export default CardGrid
