import styles from './RemoteInfo.module.scss';

const RemoteInfo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonDiv}>
                <button className={styles.download}>FWダウンロード</button>
                <button className={styles.export}>CSV出力</button>
            </div>
            <div className={styles.selectDiv}>
                <div>
                    <label>表示件数</label>
                    <select>
                        <option value="option1">25</option>
                        <option value="option2">option 1</option>
                        <option value="option3">option 2</option>
                    </select>
                </div>
                <div>1件中1~1件目</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th rowSpan={3}>No.</th>
                        <th>邸コード</th>
                        <th>製品シリアルNo</th>
                        <th>製品型番</th>
                        <th>設置機器</th>
                        <th>リモコンシリアルNo</th>
                        <th>PCS FW Ver</th>
                        <th>リモコン FW Ver</th>
                        <th></th>
                        <th rowSpan={3}>
                            FWダウンロード対象<br/>
                            <input type='checkbox'/>
                            1件すべて選択
                        </th>
                    </tr>
                    <tr>
                        <th>VH2 FW1</th>
                        <th>VH2 FW2</th>
                        <th>通信状態</th>
                        <th>最新受信時間</th>
                        <th>仕向け</th>
                        <th>設置日</th>
                        <th>SOH</th>
                        <th>システム状態</th>
                    </tr>
                    <tr>
                        <th>運転モード</th>
                        <th>HEMS制御状態</th>
                        <th>非常時設定</th>
                        <th>非常時安心設定</th>
                        <th>外部太陽発電の有無</th>
                        <th>外部太陽発電パネル定格</th>
                        <th>太陽光発電パネル定格</th>
                        <th>ネットワーク定格</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={4}>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td rowSpan={4}>data</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    <tr>
                        <td colSpan={8}>
                            <div  className={styles.buttonWrapper}>
                                <div>
                                    <button>すべての登録情報を見る</button>
                                </div>
                                <div>
                                    <button>使用推移</button>
                                    <button>エラー履歴</button>
                                    <button>リモコン制御</button>
                                    <button>動作ログ</button>
                                    <button>欠損データリカバリー</button>
                                    <button>地区で自動制御</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RemoteInfo;
