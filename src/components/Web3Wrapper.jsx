import { ethereumClient, wagmiConfig } from '../utils/wallet'
import { Web3Modal } from '@web3modal/react'
import { WagmiConfig } from 'wagmi'
import { projectId } from '../utils/wallet'


const Web3Wrapper = ({ children }) => {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                {children}
            </WagmiConfig>

            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </>
    )
}

export default Web3Wrapper