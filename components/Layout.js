import Head from 'next/head'
import Header from './Header'

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Where in the world?</title>
				<meta
					name="description"
					content="An app to browse countries all over the world"
				/>
			</Head>

			{/* Add Header */}
			<Header />

			<div>{children}</div>
		</div>
	)
}
export default Layout
