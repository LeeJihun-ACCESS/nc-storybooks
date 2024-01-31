import styles from './RemoteErrorCard.module.scss';

const RemoteErrorCard = () => {
    const fakeResultData = [
        {
            no: 'dummyData',
            siriNum: 'dummyData',
            macNum: 'dummyData',
            ver: 'dummyData',
            model: 'dummyData',
            result: 'dummyData',
            error: 'dummyData',
        },
        {
            no: 'dummyData',
            siriNum: 'dummyData',
            macNum: 'dummyData',
            ver: 'dummyData',
            model: 'dummyData',
            result: 'dummyData',
            error: 'dummyData',
        },
        {
            no: 'dummyData',
            siriNum: 'dummyData',
            macNum: 'dummyData',
            ver: 'dummyData',
            model: 'dummyData',
            result: 'dummyData',
            error: 'dummyData',
        },
        {
            no: 'dummyData',
            siriNum: 'dummyData',
            macNum: 'dummyData',
            ver: 'dummyData',
            model: 'dummyData',
            result: 'dummyData',
            error: 'dummyData',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonDiv}>
                <div>
                    <button className={styles.whiteButton}>使用推移</button>
                    <button className={styles.whiteButton}>リモコン制御</button>
                </div>
                <div>
                    <button className={styles.csvButton}>CSV出力</button>
                </div>
            </div>
            <div className={styles.displayOption}>
                <div>
                    <label>表示件数</label>
                    <select>
                        <option value="option1">25</option>
                        <option value="option2">option 1</option>
                        <option value="option3">option 2</option>
                    </select>
                </div>
                <div>
                    <label>1件中 1~1件目</label>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>点検コード</th>
                        <th>発生日時</th>
                        <th>接続</th>
                        <th>解消</th>
                        <th>保護機能種類</th>
                        <th>故障度</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeResultData.map((data, _) => {
                        return (
                            <>
                                <tr>
                                    <td>{data.no}</td>
                                    <td>{data.siriNum}</td>
                                    <td>{data.macNum}</td>
                                    <td>{data.ver}</td>
                                    <td>{data.model}</td>
                                    <td>{data.result}</td>
                                    <td>{data.error}</td>
                                </tr>
                                <tr>
                                    <td colSpan={7}>対処:{data.error}</td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default RemoteErrorCard;
