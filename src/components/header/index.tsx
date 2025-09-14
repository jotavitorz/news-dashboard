import styles from "./header.module.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <h1 className={styles.title}><span>Dev</span>News</h1>
            </Link>
        </header>
    )
}
