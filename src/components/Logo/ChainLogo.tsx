import Image from 'next/future/image'
import { HelpIcon } from '@pancakeswap/uikit'
import { isChainSupported } from 'utils/wagmi'
import { memo } from 'react'

export const ChainLogo = memo(({ chainId }: { chainId: number }) => {
  if (isChainSupported(chainId)) {
    return (
      <Image
        src={
          chainId === 421613
            ? 'https://cdn.o3.network/token-profile/arbitrum/0x0000000000000000000000000000000000000000/logo.png'
            : `/images/chains/${chainId}.png`
        }
        width={24}
        height={24}
        unoptimized
        alt={`chain-${chainId}`}
      />
    )
  }

  return <HelpIcon width={24} height={24} />
})
