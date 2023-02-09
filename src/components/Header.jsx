import styles from './Header.module.css'
import fogueteLogo from '../assets/foguete.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={fogueteLogo} alt="Um foguete" />
      <span>
        <strong className={styles.blue}>to</strong>
        <strong className={styles.purpleDark}>do</strong>
      </span>
    </header>
  )
}
