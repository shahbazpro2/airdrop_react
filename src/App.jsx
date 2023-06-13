
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Airdrop from "./routes/airdrop";
import Stake from "./routes/stake";
import Lottery from "./routes/lottery";
import Nft from "./routes/nft";
import Layout from "./Layout";
import Home from "./routes/home";
import Web3Wrapper from "./components/Web3Wrapper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="airdrop" element={<Airdrop />} />
        <Route path="stake" element={<Stake />} />
        <Route path="lottery" element={<Lottery />} />
        <Route path="nft" element={<Nft />} />
      </Route>


    </>
  )
);

function App() {

  return (
    <Web3Wrapper>
      <RouterProvider router={router} />
    </Web3Wrapper>
  )
}

export default App
