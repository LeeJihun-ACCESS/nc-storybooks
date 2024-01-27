import styles from './RemoteDetail.module.scss';

const RemoteDetail = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.lists}>
                <div className={styles.list}>
                    <label>No.</label>data
                </div>
                <div className={styles.list}>
                    <label>リモコンシリアルNo</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>MACアドレス</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>機種</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>邸コード</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>製品シリアルNo</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>製品シリアルNo</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>製品型番</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>設置機器</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>PCS FW Ver</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>リモコンFW Ver</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>V2H FW1</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>V2H FW2</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>通信状態</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>最新通信時間</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>仕向け</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>設置日</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>SOH</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>システム状態</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>通信モード</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>HEMS制御状態</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>非常時設定</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>非常時安心設定</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>外部太陽光発電の有無</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>外部太陽光発電パネル定格</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>太陽光発電パネル定格</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>ネットワーク接続</label>
                    <div>data</div>
                </div>
                <div className={styles.list}>
                    <label>メール送信</label>
                    <div>data</div>
                </div>
                <div className={styles.topLineDiv}>
                    <button className={styles.whiteButton}>使用推移</button>
                    <button className={styles.whiteButton}>エラー履歴</button>
                    <button className={styles.whiteButton}>リモコン制御</button>
                    <button className={styles.whiteButton}>動作ログ</button>
                    <button className={styles.whiteButton}>
                        欠損データリカバリー
                    </button>
                    <button className={styles.whiteButton}>蓄電自動制御</button>
                </div>
                <div className={styles.topLineDiv}>
                    <label>邸情報の登録</label>
                    <div>
                        <button className={styles.blueButton}>
                            蓄電自動制御
                        </button>
                    </div>
                    <label>リモコンの交換</label>
                    <div>
                        <button className={styles.blueButton}>
                            蓄電自動制御
                        </button>
                    </div>
                </div>
                <div className={styles.topLineDiv}>
                    <label>登録日時</label>
                    <div>xxxx年xx月xx日 00:00</div>
                    <label>更新日時</label>
                    <div>xxxx年xx月xx日 00:00</div>
                </div>
            </div>
            <div className={styles.modifybuttonDiv}>
                <button className={styles.modifybutton}>編集する</button>
                <button className={styles.deletebutton}>削除する</button>
            </div>
        </div>
    );
};

export default RemoteDetail;
