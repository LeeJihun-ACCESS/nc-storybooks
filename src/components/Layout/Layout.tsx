import { FC, ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode;
    title?: any; // TODO
    breadcrumb? : any // TODO
}

const Layout:FC<LayoutProps> = (props) => {
    const {children, title, breadcrumb} = props;
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                {title && <div className={styles.title}>{title}</div>}
                {breadcrumb && <div className={styles.title}>{breadcrumb}</div>}
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;
