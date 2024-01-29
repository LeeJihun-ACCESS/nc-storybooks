import styles from './RemoteReport.module.scss';

const RemoteReport = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.reportwrapper}>
                <div className={styles.summaryDiv}>
                    <div className={styles.summary}>
                        <div className={styles.title}>SOC</div>
                        <div className={styles.content}>
                            ---<div className={styles.unit}>%</div>
                        </div>
                    </div>
                    <div className={styles.summary}>
                        <div className={styles.title}>充放電電力</div>
                        <div className={styles.content}>
                            ---<div className={styles.unit}>W</div>
                        </div>
                    </div>
                    <div className={styles.summary}>
                        <div className={styles.title}>運転モード</div>
                        <div className={styles.content}>---</div>
                    </div>
                </div>
                <div className={styles.graphWrapper}>
                    <div className={styles.selectorDiv}>
                        <input type="radio" name="report" />
                        日次
                        <input type="radio" name="report" />
                        月次
                        <input type="radio" name="report" />
                        年次
                        <input type="date" />
                        <button>CSV出力</button>
                    </div>
                    <div className={styles.graphDiv}>graphDiv</div>
                </div>
            </div>
        </div>
    );
};

export default RemoteReport;
