import styles from './RemoteEdit.module.scss';

const RemoteEidt = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.infoDataDivWrapper}>
                    <div className={styles.infoDataDiv}>
                        <label>リモコンシリアルNo:</label>
                        <div>ssd</div>
                    </div>
                    <div className={styles.infoDataDiv}>
                        <label>製品型番:</label>
                        <div>製品型番</div>
                    </div>
                </div>
                <div className={styles.infoDataDivWrapper}>
                    <div className={styles.infoDataDiv}>
                        <label>製品シリアルNo:</label>
                        <div>製品シリアルNo</div>
                    </div>
                    <div className={styles.infoDataDiv}>
                        <label>邸コード:</label>
                        <div>邸コード</div>
                    </div>
                </div>
            </div>
            <div className={styles.editDiv}>
                <div className={styles.titleDiv}>リモコン情報</div>
                <div className={styles.mailDiv}>
                    <div className={styles.mailTitle}>
                        <div className={styles.essential}>必須</div>
                        <label>メール送信</label>
                    </div>
                    <input type="radio" name="edit" />
                    ON
                    <input type="radio" name="edit" />
                    OFF
                </div>
                <div className={styles.buttonDiv}>
                    <button className={styles.canclebutton}>キャンセル</button>
                    <button className={styles.modifybutton}>更新する</button>
                </div>
            </div>
        </div>
    );
};

export default RemoteEidt;
