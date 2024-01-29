import styles from './RemoteInfo.module.scss';

const RemoteInfo = () => {
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
        </div>
    );
};

export default RemoteInfo;
