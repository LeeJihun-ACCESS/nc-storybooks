import styles from './RemoteRegistResult.module.scss';

const RemoteRegistResult = () => {
    const fakeResultData = [
        {
            no:'1',
            siriNum: 'test1',
            macNum : 'test1',
            ver: '',
            model: 'G1',
            result: false,
            error: 'エラーメッセージが表示されます。'
        },
        {
            no:'2',
            siriNum: 'test2',
            macNum : 'test2',
            ver: '',
            model: 'G2',
            result: false,
            error: 'エラーメッセージが表示されます。'
        },
        {
            no:'3',
            siriNum: 'test3',
            macNum : 'test3',
            ver: '',
            model: 'G3',
            result: false,
            error: 'エラーメッセージが表示されます。'
        },
        {
            no:'4',
            siriNum: 'test4',
            macNum : 'test4',
            ver: '',
            model: 'G4',
            result: false,
            error: 'エラーメッセージが表示されます。'
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div>一括登録の実行結果</div>
            <div>全00件中、施工:00件 失敗:00件  ファイル名: xxxx.csv</div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>リモコンシリアルNo</th>
                        <th>MACアドレス</th>
                        <th>リモコン世代</th>
                        <th>機種</th>
                        <th>結果</th>
                        <th>エラー内容</th>
                    </tr>
                </thead>
                <tbody>
                    {fakeResultData.map(
                        (data, _) => {
                            return (
                                <tr>
                                    <td>{data.no}</td>
                                    <td>{data.siriNum}</td>
                                    <td>{data.macNum}</td>
                                    <td>{data.ver}</td>
                                    <td>{data.model}</td>
                                    <td>{data.result?'成功':'失敗'}</td>
                                    <td>{data.error}</td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default RemoteRegistResult;
