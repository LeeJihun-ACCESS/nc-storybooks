import { FC, ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode;
    title: any; // TODO
}

const Layout:FC<LayoutProps> = (props) => {
    const {children, title} = props;
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.title}>{title}</div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;
