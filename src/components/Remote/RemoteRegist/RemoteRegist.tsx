import styles from './RemoteRegist.module.scss';

const RemoteRegist = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.selectorDiv}>
                    <div className={styles.selector}>
                        一括登録
                    </div>
                    <div className={styles.selector}>
                        個別登録
                    </div>
                </div>
                <div className={styles.exportButtonDiv}>
                    <button className={styles.exportButton} type="button">登録済みをCSV出力</button>
                </div>
            </div>
            {/* 選択によって */}
            <div className={styles.batchWrapper}>
                <label>CSVファイルを選択してください</label>
                <div className={styles.fileButtonDiv}>
                    <button className={styles.fileButton} type="button">ファイルを選択</button>
                    選択されていません
                </div>
                <div className={styles.buttonDiv}>
                    <button className={styles.cancleButton} type="button">キャンセル</button>
                    <button className={styles.okButton} type="button">読み込む</button>
                </div>
            </div>
            {/* 選択によって */}
            <div className={styles.individualWrapper}>
                <div className={styles.labelDiv}>
                    <div className={styles.essential}>必須</div>
                    <label>リモコンシリアルNo</label>
                </div>
                <div className={styles.essentialContent}>
                    <input />
                </div>
                <div className={styles.labelDiv}>
                    <div className={styles.essential}>必須</div>
                    <label>MACアドレス</label>
                </div>
                <div className={styles.essentialContent}>
                    <input />
                </div>
                <div className={styles.labelDiv}>
                    <div className={styles.essential}>必須</div>
                    <label>機種</label>
                </div>
                <div className={styles.essentialContent}>
                    <select>
                        <option value="option1">選択してください</option>
                        <option value="option2">option 1</option>
                        <option value="option3">option 2</option>
                    </select>
                </div>
                <div className={styles.buttonDiv}>
                    <button className={styles.cancleButton} type="button">キャンセル</button>
                    <button className={styles.okButton} type="button">登録する</button>
                </div>
            </div>
        </div>
    )
}

export default RemoteRegist;
