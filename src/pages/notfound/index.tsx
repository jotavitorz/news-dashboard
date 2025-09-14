import styles from "./notfound.module.css";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className={styles.section}>
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link className={styles.link} to="/" >Home Page</Link>
        </div>
    )
}
