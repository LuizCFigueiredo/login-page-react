import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

function NavBar(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navlist}>
                    <li>
                        <Link to='/' className={styles.Link}><span className={styles.SpanLi}>Login</span></Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to='/cadastro' className={styles.Link}><span className={styles.SpanLi}>Cadastre-se</span></Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link to='/sobre' className={styles.Link}><span className={styles.SpanLi}>Sobre nós</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar