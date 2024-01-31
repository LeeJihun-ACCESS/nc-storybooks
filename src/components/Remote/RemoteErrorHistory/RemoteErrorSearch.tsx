import styles from './RemoteErrorSearch.module.scss';

const RemoteErrorSearch = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleDiv}>リモコン情報</div>
            <div className={styles.searchDiv}>
                <div className={styles.dateDiv}>
                    <label>期間</label>
                    <div className={styles.inputDiv}>
                        <input type="date" /> ~ <input type="date" />
                    </div>
                </div>
                <div className={styles.errorCodeDiv}>
                    <label>エラーコード</label>
                    <div className={styles.inputDiv}>
                        <input />
                    </div>
                </div>
            </div>
            <div className={styles.buttonDiv}>
                <button className={styles.modifybutton}>検索する</button>
            </div>
        </div>
    );
};

export default RemoteErrorSearch;
