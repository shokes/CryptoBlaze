import Layout from '../Layout';
import Coins from '../Coins';

const Home = () => {
  const activePage = 'Home';
  return (
    <Layout activePage={activePage}>
      <Coins />
    </Layout>
  );
};

export default Home;
