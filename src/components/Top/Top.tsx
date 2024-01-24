import Layout from '../Layout/Layout';
import styles from './Top.module.scss';

const Top = () => {
    return (
        <Layout title={'ダッシュボード'}>
            <div className={styles.tableWrapper}>
                <div className={styles.title}>ようこそ、ユーザーさん</div>
                <div className={styles.list} >上部のメニューから機能を選択してください。</div>
            </div>
        </Layout>
    )
}

export default Top;
