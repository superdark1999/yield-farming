import { useWeb3React } from '@web3-react/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getBscScanLink } from '../../../../utils/index'

function TransactionModal({ txReceipt, onClose, message = '' }) {
  const { chainId } = useWeb3React()
  const { status, transactionHash } = txReceipt

  useEffect(() => {
    const timeoutClose = setTimeout(() => {
      onClose()
    }, 2500)

    return () => clearTimeout(timeoutClose)
  }, [message])
  return (
    <TransactionModalStyled>
      <div className="transaction__style">
        <img src={status ? './images/modal-market/correct.svg' : './images/modal-market/failed.svg'} alt="status.svg" />
        <div className="transaction__content">
          <p>{message}</p>
          <a href={getBscScanLink(chainId, transactionHash, 'transaction')} target="_blank" rel="noreferrer">
            View on BscScan
          </a>
        </div>
      </div>
    </TransactionModalStyled>
  )
}

const TransactionModalStyled = styled.div`
  /* position: fixed;
  right: 3.75rem;
  top: 7.5rem; */
  background: #fff;
  z-index: 100;
  border-radius: 8px;
  .transaction__style {
    padding: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      color: #000;
      font-size: 16px;
      font-weight: 800;
      margin: 0;
    }
    a {
      font-weight: 400;
      font-size: 16px;
      color: #55b3f8;
    }
    img {
      width: 44px;
      height: 44px;
      margin-right: 28px;
    }
  }
`
export default TransactionModal
