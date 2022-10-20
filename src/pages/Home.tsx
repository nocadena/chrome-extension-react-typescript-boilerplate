import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spinner,
  Text,
  Toast,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { MdVerticalAlignBottom, MdSend, MdTimer } from "react-icons/md";
import { loadInvestmentGroups, loadUserTokens } from "../util/tokens";
import { investmentDetails, price, UserToken } from "../util/types";
import { Token } from "../components/Token";
import { Web3AuthContext } from "../components/Web3AuthProvider";
import { getUserInfo, login } from "../util/web3Auth";
import { ActiveInvestment } from "../components/ActiveInvestment";
import Logo from "../../public/logo";
import { ethers } from "ethers";
import { CORE_ADDRESS } from "../util/constants";
import coreABI from "../../out/contracts/Core.sol/Core.json";
import { Core } from "../../types/ethers-contracts";
import RPC from "../util/ethers";
import { formatEther } from "ethers/lib/utils";
import * as ripio from "@ripio/sdk";
import { getTokenPrices } from "../util/coinbasemarketcap";
import { cursorTo } from "readline";
import { toast } from "react-toastify";
//https://react-icons.github.io/react-icons/icons?name=md
const Home: NextPage = () => {
  console.log("reload");
  const authContext = useContext(Web3AuthContext);
  const [activeInvestments, setActiveInvestments] = useState(
    [] as investmentDetails[]
  );
  const [tokens, setTokens] = useState([] as UserToken[]);
  const [loading, setLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const LoggedInScreen = () => {
    return (
      <Box
        flex="1"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        marginTop="10"
      >
        <Box flexDirection={"row"}>
          <Heading>Assets</Heading>
        </Box>
        {!loading ? (
          <>
            <Box flexDirection={"row"}>
              $
              {tokens
                .reduce((prev, cur) => {
                  console.log("priceuSd", cur.priceUSD);
                  return prev + cur.amount * cur.priceUSD;
                }, 0)
                .toFixed(2)}
            </Box>
            <HStack spacing="5px" marginTop="5" marginBottom={"5"}>
              <Box flexDirection={"column"} width="20" textAlign={"center"}>
                <IconButton
                  variant="outline"
                  aria-label="Receive"
                  icon={<MdVerticalAlignBottom />}
                />
                <Text>Receive</Text>
              </Box>
              <Box flexDirection={"column"} width="20" textAlign={"center"}>
                <IconButton
                  variant="outline"
                  aria-label="Send"
                  icon={<MdSend />}
                />
                <Text>Send</Text>
              </Box>
              <Box flexDirection={"column"} width="20" textAlign={"center"}>
                <IconButton
                  variant="outline"
                  aria-label="History"
                  icon={<MdTimer />}
                />
                <Text>History</Text>
              </Box>
            </HStack>
            <Divider orientation="horizontal" />
            <Heading>My wallet</Heading>
            {tokens.map((token, id) => (
              <Token token={token} key={id} price={token.priceUSD} />
            ))}
            <Divider orientation="horizontal" />
            <Heading>Investments</Heading>
            {activeInvestments.map((investment, id) => (
              <ActiveInvestment investment={investment} key={id} />
            ))}
          </>
        ) : (
          <Spinner />
        )}
      </Box>
    );
  };
  useEffect(() => {
    // load tokens of user
    if (authContext && authContext.provider) {
      loadUserTokens(authContext.provider!).then((tokens) => {
        console.log("grbz3");
        getTokenPrices(tokens.map((token) => token.name)).then(
          (tmp: price[]) => {
            setTokens(
              tokens.map((token, index) => {
                return {
                  ...token,
                  priceUSD:
                    tmp.find((tmpPrice) => tmpPrice.name == token.name)
                      ?.priceUSD || 0,
                };
              })
            );
            setLoading(false);
          }
        );
      });
      loadInvestmentGroups(authContext.provider!).then((groups) =>
        setActiveInvestments(groups)
      );
    }
  }, [authContext]);
  useEffect(() => {
    if (!loggingIn && authContext && authContext.provider) {
      setLoggingIn(true);
      const tokenContract = new ethers.Contract(
        CORE_ADDRESS,
        coreABI.abi,
        new ethers.providers.Web3Provider(authContext!.provider!).getSigner()
      ) as Core;
      console.log(
        "user address",
        new RPC(authContext!.provider!).getAccounts()
      );
      //new ripio.JsonRPCWeb3Connector()
      console.log("chainid", new RPC(authContext!.provider!).getChainId());
      new RPC(authContext!.provider!).getAccounts().then((address) => {
        tokenContract.usersId(address).then((existingUserId) => {
          console.log("alex", parseFloat(formatEther(existingUserId)));
          if (parseFloat(formatEther(existingUserId)) == 0) {
            console.log("alex123", loggingIn);
            tokenContract.initUserAccount().then(() => {
              console.log("alex4");
            });
          }
        });
      });
    }
  }, [authContext, authContext?.provider, loggingIn]);
  if (!authContext) return <Spinner />;
  else if (!authContext.provider)
    return (
      <Box
        display="flex"
        flex="1"
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Logo height={50} />
        <Button
          marginTop="30px"
          isLoading={!authContext.web3auth}
          onClick={() =>
            login(authContext.web3auth!).then((provider) =>
              authContext.setProvider(provider!)
            )
          }
        >
          {authContext.web3auth ? "Login" : "Loading..."}
        </Button>
      </Box>
    );
  else {
    return <LoggedInScreen />;
  }
};

export default Home;
