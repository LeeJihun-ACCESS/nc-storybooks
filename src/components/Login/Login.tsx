import Layout from '../Layout/Layout';
import styles from './Login.module.scss';

const Login = () => {
    const error = false;
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>ログイン</div>
            {error && (
                <li className={styles.errorlist}><div className={styles.errorBox}>ユーザーIDまたはパスワードが正しくありません。</div></li>
            )}
            <li className={styles.list}>ユーザーID　<input className={styles.inputBox} placeholder='ユーザーID'/></li>
            <li className={styles.list}>パスワード　<input className={styles.inputBox} placeholder='パスワード'/></li>
            {error && (
                <div className={styles.errorImageWrapper}>
                    <div>画面に表示されている文字列を入力してください。</div>
                    <div className={styles.errorImageDiv}>
                        <div className={styles.errorImage}>確認コードイメージ</div>
                        <div className={styles.errorCodeDiv}>
                            <button className={styles.codeResetButton} type='button'>別の画像を表示する</button>
                            <input className={styles.errorInputBox} placeholder='確認コード'/>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.buttonDiv}><button className={styles.button} type="button">ログイン</button></div>
            <div><input type='checkbox'/>次回からパスワードの入力を省略</div>
        </div>
    )
}

export default Login;
