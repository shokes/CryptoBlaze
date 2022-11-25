import React from 'react';
import Layout from '../components/Layout';
import { getNfts } from '../redux/features/nftsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nfts from '../components/Nfts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Nft = () => {
  const dispatch = useDispatch();
  const { nfts, loading } = useSelector((store: RootState) => store.nfts);
  const activePage = 'nft';

  useEffect(() => {
    dispatch(getNfts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout activePage={activePage}>
      <Nfts nftList={nfts} loading={loading} />
    </Layout>
  );
};

export default Nft;
