import Layout from '../../../components/Layout/Layout';
import RemoteReport from '../../../components/Remote/RemoteReport/RemoteReport';
import RemoteInfo from '../../../components/Remote/RemoteInfo/RemoteInfo';

const RemoteReportPage = () => {
    return (
        <Layout breadcrumb={'breadcrumb'}>
            <RemoteInfo />
            <RemoteReport />
        </Layout>
    );
};

export default RemoteReportPage;
