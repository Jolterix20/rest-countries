import Link from 'next/link'
import { FaMoon, FaRegMoon } from 'react-icons/fa'

const Header = () => {
	return (
		<div>
			<header className="header">
				<h2>Where in the world?</h2>
				<button className="btn">
					<FaRegMoon /> Dark Mode
				</button>
			</header>

			<style jsx>{`
				div {
					box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);
				}

				.header {
					display: flex;
					justify-content: space-between;
					margin: 0 50px;
				}

				.btn {
					background: none;
					outline: none;
					border: none;
					padding: 0;
					font: inherit;
					font-weight: 600;
					cursor: pointer;
				}
			`}</style>
		</div>
	)
}
export default Header
