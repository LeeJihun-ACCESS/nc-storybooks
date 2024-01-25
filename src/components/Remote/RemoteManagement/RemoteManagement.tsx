import styles from './RemoteManagement.module.scss';

const RemoteManagement = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>リモコン検索</div>
            <div className={styles.list}>
                <label className={styles.label}>製品シリアルNo</label>
                <select>
                    <option value="option1">範囲指定</option>
                    <option value="option2">option 1</option>
                    <option value="option3">option 2</option>
                </select>
                <input />〜<input />               
            </div>
            <div className={styles.list}>
                <label className={styles.label}>リモコンシリアルNo</label>
                <select>
                    <option value="option1">範囲指定</option>
                    <option value="option2">option 1</option>
                    <option value="option3">option 2</option>
                </select>
                <input />〜<input />               
            </div>
            <div className={styles.list}>
                <label className={styles.label}>製品型番</label>
                <input className={styles.inputBox} />
            </div>
            <div className={styles.list}>
                <label className={styles.label}>PCS世代</label>
                <select className={styles.dropdown}>
                    <option value="option1">---</option>
                    <option value="option2">option 1</option>
                    <option value="option3">option 2</option>
                </select>
            </div>
            <div className={styles.list}>
                <label className={styles.label}>通信状態</label>
                <select className={styles.dropdown}>
                    <option value="option1">---</option>
                    <option value="option2">option 1</option>
                    <option value="option3">option 2</option>
                </select>
            </div>
            <div className={styles.buttonDiv}>
                <div>
                    <button className={styles.okButton} type="button">検索する</button>
                    <button className={styles.resetButton} type="button">検索条件をリセット</button>
                </div>
                <div>
                    <button className={styles.searchDetail} type="button">詳細検索</button>
                </div>
            </div>
        </div>
    )
}

export default RemoteManagement;
