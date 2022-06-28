import styles from '../styles/BackButton.module.css'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

const BackButton = () => {
	return (
		<div className={styles.container}>
			<Link href="/">
				<a>
					<button className={styles.back_btn}>
						<FiArrowLeft /> Back
					</button>
				</a>
			</Link>
		</div>
	)
}
export default BackButton
