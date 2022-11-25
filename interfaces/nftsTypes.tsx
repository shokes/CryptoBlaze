export default interface NftsTypes {
  nftList: {
    id: string;
    asset_platform_id: string;
    contract_address: string;
    name: string;
  }[];

  loading: boolean;
}
