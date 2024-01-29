import Layout from '../../../components/Layout/Layout';
import RemoteEidt from '../../../components/Remote/RemoteEdit/RemoteEdit';
import RemoteInfo from '../../../components/Remote/RemoteInfo/RemoteInfo';

const RemoteEditPage = () => {
    return (
        <Layout breadcrumb={'breadcrumb'}>
            <RemoteInfo />
            <RemoteEidt />
        </Layout>
    );
};

export default RemoteEditPage;
