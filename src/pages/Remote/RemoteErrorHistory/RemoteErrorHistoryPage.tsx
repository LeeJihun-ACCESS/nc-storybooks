import Layout from '../../../components/Layout/Layout';
import RemoteErrorSearch from '../../../components/Remote/RemoteErrorHistory/RemoteErrorSearch';
import RemoteInfo from '../../../components/Remote/RemoteInfo/RemoteInfo';
import RemoteErrorCard from '../../../components/Remote/RemoteErrorHistory/RemoteErrorCard';

const RemoteReportPage = () => {
    return (
        <Layout breadcrumb={'breadcrumb'}>
            <RemoteInfo />
            <RemoteErrorSearch />
            <RemoteErrorCard />
        </Layout>
    );
};

export default RemoteReportPage;
