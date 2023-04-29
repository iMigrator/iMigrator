import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../assets/constants/connectors";
import * as actions from "./_api";
export function useEagerConnect() {
    const { activate, active } = useWeb3React();
    const [tried, setTried] = useState(false);
    useEffect(() => {
        injected.isAuthorized().then((isAuthorized) => {
            if (isAuthorized) {
                activate(injected, undefined, true).catch(() => {
                    setTried(true);
                });
            } else {
                setTried(true);
            }
        });
    }, [activate]); 
    useEffect(() => {
        if (!tried && active) {
            setTried(true);
        }
    }, [tried, active]);
    return tried;
};
export function useInactiveListener(suppress = false) {
    const { active, error, activate, chainId } = useWeb3React();
    useEffect(() => {
        const { ethereum } = window;
        if (ethereum && ethereum.on && !active && !error && !suppress) {
            const handleChainChanged = (chainId) => {
                console.log("chainChanged", chainId);
                activate(injected);
            };
            const handleAccountsChanged = (accounts) => {
                console.log("accountsChanged", accounts);
                if (accounts.length > 0) {
                    activate(injected);
                }
            };
            const handleNetworkChanged = (networkId) => {
                console.log("networkChanged", networkId);
                activate(injected);
            };
            ethereum.on("chainChanged", (chainId) => handleChainChanged(chainId));
            ethereum.on("accountsChanged", (accounts) => handleAccountsChanged(accounts));
            ethereum.on("networkChanged", (networkId)=>handleNetworkChanged(networkId));
            return () => {
                if (ethereum.removeListener) {
                    ethereum.removeListener("chainChanged", (chainId) => handleChainChanged(chainId));
                    ethereum.removeListener(
                        "accountsChanged",
                        handleAccountsChanged
                    );
                    ethereum.removeListener(
                        "networkChanged",
                        handleNetworkChanged
                    );
                }
            };
        };
        return () => {};
    }, [active, error, suppress, activate, chainId]);
};
export const useApi = () => {
    return actions;
};