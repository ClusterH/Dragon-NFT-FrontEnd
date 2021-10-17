export const CONTRACT_ADDRESSES = {
  mainnet: {},
  rinkeby: {
    dragonUtility: '0x66A8a6Ab9778D8A2D8bB5D28c7319c246262677A',
    masterChef: '0xE21a3A7fB4fF125A55ff75e93F70a49C491F0Ca3',
    vaultChef: '0x2f868bC458f578958525B2780A0a3a713ee1270E'
  }
};

export const POOLS = {
  mainnet: [],
  rinkeby: [
    {
      pid: 0,
      address: '0xaba6D7b5515f70402bFb2633B5446670B996c10b',
      single: true,
      name: 'DCAU - SINGLE',
      vault: true,
      strategyAddress: '0xB4cdf8B50abdc6124d8b1ec5ad32ea54e3F9924D'
    },
    {
      pid: 1,
      address: '0xF143436dE21a03c50267dBf64F2B7D6d14dEeA0F',
      single: true,
      name: 'USDC - SINGLE',
      vault: true,
      strategyAddress: '0xaba66801a23458F6Ff888c03E0453b747c1fA61B'
    },
    {
      pid: 2,
      address: '0xa07658062c12a0fcf378f5c47aa7fd6a54d76588',
      single: false,
      name: 'DCAU - WETH',
      vault: true,
      strategyAddress: '0x76082694bD7d0863cbFe30c7060e99799D2bd3d9'
    },
    {
      pid: 3,
      address: '0x35fd7926b4b8fde82c6218281db182b5fd452603',
      single: false,
      name: 'DCAU - USDC',
      vault: true,
      strategyAddress: '0x018C7C09e19b569998C75eb80e7EB8C9009D9208'
    }
  ]
};
