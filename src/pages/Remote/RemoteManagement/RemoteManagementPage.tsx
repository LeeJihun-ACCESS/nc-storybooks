import Layout from '../../../components/Layout/Layout';
import RemoteManagement from '../../../components/Remote/RemoteManagement/RemoteManagement';
import RemoteInfo from '../../../components/Remote/RemoteManagement/RemoteInfo';

const RemoteManagementPage = () => {
    return (
        <Layout title={'リモコン管理'}>
            <RemoteManagement />
            <RemoteInfo />
        </Layout>
    )
}

export default RemoteManagementPage;
