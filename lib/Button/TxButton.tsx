import React, { useCallback } from 'react'
import { ButtonProps } from './'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { ButtonWrapper } from './styles'

export const ETH_DEFAULT_ADDRESS = '0x0000000000000000000000000000000000000000'

export const isComingWallet = (): boolean => {
  return (
    (window as any).web3 &&
    (window as any).web3.currentProvider &&
    ((window as any).web3.currentProvider.isComingWallet || (window as any).web3.currentProvider.isTrust)
  )
}

interface TxButtonProps extends ButtonProps {
  address: string
  extrinsics: string
  params: any[]
  polkadotApiProvider: any
  getInjector: () => Promise<any>
  chainName?: string
  decimal?: number
  precision?: number
  gasFee?: number
  onTxStarted?: () => void
  onSuccess?: (hash: string) => void
  onFailed?: (message: string) => void
  web3Provider?: any
}

export const TxButton = ({
  address,
  extrinsics,
  params,
  onTxStarted,
  onSuccess,
  onFailed,
  children,
  polkadotApiProvider,
  getInjector,
  web3Provider,
  chainName,
  onClick,
  decimal = 18,
  precision = 4,
  gasFee = 0,
  className = '',
  ...rest
}: TxButtonProps) => {
  const [section, method] = extrinsics.split('.')

  const web3TxEvent = useCallback(
    (gasFee: number) => {
      const web3Params = (params || []).map(p => String(p))
      const signature = polkadotApiProvider.tx[section][method](...params).toHex()

      web3Provider
        .getSigner(ETH_DEFAULT_ADDRESS)
        .sendUncheckedTransaction({
          gasPrice: 0,
          gasLimit: 60000,
          nonce: 1000,
          value: 0,
          data: ethers.utils.hexlify(
            ethers.utils.toUtf8Bytes(
              JSON.stringify({
                chain: chainName,
                method: `${section}.${method}`,
                gasFee: String(gasFee),
                params: web3Params,
                signature,
              }),
            ),
          ),
        })
        .then((signature: any) => {
          onSuccess && onSuccess(signature)
        })
        .catch((error: Error) => {
          onFailed && onFailed(error.toString())
        })
    },
    [section, method, params, web3Provider, chainName, onFailed, onSuccess],
  )

  const _onClick = useCallback(async () => {
    onTxStarted && onTxStarted()
    try {
      if (isComingWallet() && web3Provider) {
        gasFee
          ? web3TxEvent(gasFee)
          : polkadotApiProvider.tx[section][method](...params)
              .paymentInfo(address)
              .then((result: any) => {
                const { partialFee } = result.toJSON()
                gasFee = +new BigNumber(partialFee).dividedBy(Math.pow(10, decimal)).toFixed(precision)
                web3TxEvent(gasFee)
              })
              .catch((error: Error) => {
                // eslint-disable-next-line no-console
                onFailed && onFailed(error.toString())
              })
      } else {
        const injector = await getInjector()
        polkadotApiProvider.setSigner(injector.signer)
        polkadotApiProvider.tx[section][method](...params)
          .signAndSend(address, { signer: injector.signer }, (statusData: any) => {
            if (statusData.isFinalized) {
              if (statusData.events.some((e: any) => e.event.method === 'ExtrinsicFailed')) {
                onFailed && onFailed(statusData.txHash.toJSON())
              } else if (statusData.events.some((e: any) => e.event.method === 'ExtrinsicSuccess')) {
                onSuccess && onSuccess(statusData.txHash.toJSON())
              }
            }
          })
          .catch((error: Error) => {
            onFailed && onFailed(error.toString())
          })
      }
    } catch (error) {
      onFailed && onFailed(error.toString())
    }
  }, [
    address,
    polkadotApiProvider,
    web3Provider,
    getInjector,
    section,
    method,
    gasFee,
    precision,
    decimal,
    onTxStarted,
    onSuccess,
    onFailed,
    web3TxEvent,
  ])

  return (
    <ButtonWrapper
      onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => (onClick ? onClick(e) : _onClick())}
      className={className}
      {...rest}>
      {children}
    </ButtonWrapper>
  )
}
