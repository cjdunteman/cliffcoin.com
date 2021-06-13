import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers"

const provider = new ethers.providers.Web3Provider(window.ethereum)

const signer = provider.getSigner()

const tokenAddress = "0x5B2175E4baEAE7fC779E8b01818e3555ce442E90"

const tokenAbi = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)",

  // Send some of your tokens to someone else
  "function transfer(address to, uint amount)",

  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)"
];

const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider)

function App() {
  async function getName() {
    const code = await provider.getNetwork()
    console.log(code)
  }

  return (
    <button onClick={getName}>Name</button>
  );
}

export default App;
