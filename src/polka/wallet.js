import React from 'react';
import './wallet.css';
import {
    web3Accounts,
    web3Enable,
  } from '@polkadot/extension-dapp';

class PolkaWallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: null,
        };
    }

    async onClick() {
        // returns an array of all the injected sources
        // (this needs to be called first, before other requests)
        const allInjected = await web3Enable('nft-tickets dapp');

        // returns an array of { address, meta: { name, source } }
        // meta.source contains the name of the extension that provides this account
        const accounts = await web3Accounts();

        this.state.accounts = accounts;
        this.setState(this.state);
    }

    render() {
        return (
            <button className="integrate-button" onClick={ () => { this.onClick(); } }> 
                Polkadot
            </button>
        );
    }
}

export default PolkaWallet;