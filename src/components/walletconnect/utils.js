import { Interface } from "ethers/lib/utils";

export const usdtInterface = new Interface([
  "function approve(address _spender, uint256 _value) external returns (bool success)",
  "function allowance(address owner, address spender) external view returns (uint256)",
]);
