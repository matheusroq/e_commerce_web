import { Navbar } from '../../components/Navbar';
import { Products } from '../../components/Products';
import styles from './Home.module.scss';

export function Home() {

  return (
    <div className={styles.container}>
      <Navbar />
      <Products />
    </div>
  )
}