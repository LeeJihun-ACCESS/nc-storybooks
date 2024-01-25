import Layout from '../../../components/Layout/Layout';
import RemoteRegist from '../../../components/Remote/RemoteRegist/RemoteRegist';
import RemoteRegistResult from '../../../components/Remote/RemoteRegist/RemoteRegistResult';

const RemoteRegistPage = () => {
    return (
        <Layout title={'新しいリモコンを登録する'}>
            <RemoteRegist />
            <RemoteRegistResult />
        </Layout>
    )
}

export default RemoteRegistPage;
