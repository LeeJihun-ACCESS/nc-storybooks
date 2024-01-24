import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>nichicon ECP</div>
            {/* TODO: ユーザー情報があると表示 */}
            <div className={styles.menuItem}>リモコン管理</div>
            <div className={styles.menuItem}>エラー情報</div>
            <div className={styles.menuItem}>統計情報</div>
            <div className={styles.menuItem}>ファームウェア管理</div>
            <div className={styles.menuItem}>ユーザー管理</div>
            <div className={styles.menuItem}>制御管理</div>
            <div className={styles.icons}>
                <div className={styles.menuItem}>Seting</div>
                <div className={styles.menuItem}>Logout</div>
            </div>
        </header>
    )
}

export default Header;
