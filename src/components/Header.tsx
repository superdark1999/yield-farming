import GlobalModal from 'components/molecules/GlobalModal/GlobalModal'
import { utils } from 'ethers'
import { useActiveWeb3React } from 'hooks'
import useAuth from 'hooks/useAuth'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserTokenDataSelector } from 'state/user/reducer'
import styled from 'styled-components'
import { addCommas, maxNumberAfterDot } from 'utils/formatNumber'
import ConnectWalletModal from '../components/molecules/Modal/ConnectWalletModal/ConnectWalletModal'

const tokenList = {
  bnb: {
    img: '/images/tokens/bnb.png',
  },
  faucet: {
    img: '/images/tokens/coin.png',
  },
}

function Header() {
  const { account } = useActiveWeb3React()
  const { logout } = useAuth()
  const { bnb = { balance: 0 }, faucet = { balance: 0 } } = useSelector(getUserTokenDataSelector)
  const trimAccount = account ? `${account.slice(0, 4)}...${account.slice(-4)}` : '0x00...0000' // account length: 42
  const bnbBalanceFormatted = addCommas(maxNumberAfterDot(utils.formatEther(bnb?.balance), 2))
  const busdBalanceFormatted = addCommas(maxNumberAfterDot(utils.formatEther(faucet?.balance), 2))

  return (
    <HeaderStyled className={scroll ? 'active' : 'close'}>
      <div className="header">
        <div className="header__left">
          <BoxMenu>
            <div className="header__menu__content"></div>
          </BoxMenu>
        </div>

        {!account ? (
          <div className="header__right">
            <button
              className="header__button"
              type="submit"
              onClick={() => {
                GlobalModal.show(<ConnectWalletModal onClose={GlobalModal.hide} />)
              }}
            >
              <p>Connect wallet</p>
            </button>
          </div>
        ) : (
          <div className="header__right">
            <div className="header__price">
              <div className="header__price--content">
                <p>
                  {Number(busdBalanceFormatted.replace(/\,/g, '')) > 100000
                    ? `${busdBalanceFormatted.slice(0, 3)}...${busdBalanceFormatted.slice(7)}`
                    : `${busdBalanceFormatted}`}
                </p>
                <img src={tokenList.faucet.img} alt="price.svg" />
              </div>
              <div className="header__price--content">
                <p>
                  {Number(bnbBalanceFormatted.replace(/\,/g, '')) > 100000
                    ? `${bnbBalanceFormatted.slice(0, 3)}...${bnbBalanceFormatted.slice(7)}`
                    : `${bnbBalanceFormatted}`}
                </p>

                <img src={tokenList.bnb.img} alt="price.svg" />
              </div>
            </div>

            <div className="icon__connect">
              <img className="icon" src="./images/connect/connect-wallet.svg" alt="" />
              <div className="account__metamask">
                <div className="account">
                  <div className="account__left copy">
                    <img className="avatar" src="./images/connect/avatar.svg" alt="" />
                    <span>{trimAccount}</span>
                  </div>
                </div>
                <div className="account" onClick={logout}>
                  <div className="account__left">
                    <span>Disconnect</span>
                  </div>
                  <img src="./images/connect/logout.svg" alt="" className="icon__copy" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </HeaderStyled>
  )
}

const BoxMenu = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 6, 10, 1);
  padding: 42px 0 20px;
  box-sizing: border-box;
  transition: all 0.5s cubic-bezier(0.27, 0.16, 0.36, 0.99);
  &.close {
    @media (max-width: 768px) {
      position: absolute;
      overflow: hidden;
      height: 0px;
      width: 0px;

      opacity: 0;
      transition: ease all 0.3s;
    }
  }
  &.active {
    opacity: 1;
    transition: ease all 0.3s;
  }

  display: flex;
  justify-content: flex-start;
  z-index: 3;
  position: unset;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: transparent;
  padding: 0;

  &.active {
    height: 90vh;

    &a {
      color: #ffe600;
      position: relative;

      :before {
        content: '';
        position: absolute;
        top: 50%;
        left: -20px;
        width: 25px;
        height: 25px;
        transform: translate(-50%, -50%);
        background-size: cover;
      }
    }
  }

  .header__dashboard {
    position: relative;
    width: 160px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ease all 0.5s;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 500;
    white-space: nowrap;

    &.active {
      background: #195151;
      color: #0fc1a9;

      .arrow {
        transform: rotate(180deg);
      }
      ul {
        height: auto;
        border: 1px solid #0e8170;
        li {
          &:last-child {
            margin-bottom: 10px;
          }
        }
      }
    }
    img {
      margin-left: 5px;
      transition: ease all 0.5s;
    }
    ul {
      position: absolute;
      width: 100%;
      overflow: hidden;
      height: 0px;
      background: #003e3e;
      top: 100%;
      left: 0px;
      padding-bottom: 0px;
      border-radius: 0px 0px 12px 12px;
      transition: ease all 0.5s;

      @media (max-width: 768px) {
        position: relative;
        padding-top: 0px;
        border-radius: 0px;
      }

      li {
        list-style-type: none;
        text-align: center;
        font-size: 16px;
        transition: ease all 0.5s;
        color: #fff;
        font-weight: 400;
        a {
          width: auto;
          height: 40px;
          font-size: 16px;
          font-weight: 400;
          &:hover {
            background: unset;
            color: #fff;
          }
        }
        img {
          width: 30px;
        }
        &:hover {
          background: #0e8170;
        }
        &:last-child {
          cursor: no-drop;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`

const HeaderStyled = styled.div`
  background: #003e3e;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0px 60px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0px 0px;
  }

  .icon__connect {
    position: relative;
    padding-left: 20px;

    &:hover {
      .account__metamask {
        display: block;
      }
    }
    .account__metamask {
      position: absolute;
      display: none;
      bottom: -102px;
      transition: ease all 0.5s;
      right: 0px;
      background: #01473d;
      border: 2px solid #0fc1a9;
      border-radius: 16px;
      padding: 16px;
      .account {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:nth-child(1) {
          padding-bottom: 20px;
        }
        .account__left {
          display: flex;
          align-items: center;
          cursor: pointer;
          &.copy {
            cursor: unset;
          }
        }
        .avatar {
          margin-right: 10px;
        }
        .icon__copy {
          margin-left: 20px;
          cursor: pointer;
        }
        .icon {
          margin-left: 10px;
          cursor: pointer;
          transition: ease all 0.5s;
          &:hover {
            transform: scale(1.1);
            transition: 0.5s ease-in-out;
          }
        }
      }
    }
  }

  &.active {
    top: 0;
    display: block;
    transition-duration: 0.6s;
  }

  p {
    margin: 0;
    color: #bac8e3;
    font-size: 18px;
    font-weight: 500;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 100%;
    .header__right {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
    &__logo {
      &-img {
        margin-right: 20px;
        /* width: 200px; */

        @media (min-width: 769px) {
          width: auto;
        }
      }
    }

    &__menu {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      list-style: none;
      margin-bottom: 0;
      @media (min-width: 769px) {
        flex-direction: unset;
      }

      li {
        @media (max-width: 1024px) {
          width: 100%;
          padding: 0 !important;
        }

        &.disable {
          opacity: 0.5;
        }

        a {
          width: 140px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: ease all 0.5s;
          cursor: pointer;
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 500;
          white-space: nowrap;

          @media (max-width: 1024px) {
            width: 130px;
          }
          @media (max-width: 768px) {
            width: 100%;
            padding: 15px;
            height: 60px;
          }
          @media (max-width: 500px) {
            height: 50px;
          }

          &:hover {
            background: #195151;
            color: #0fc1a9;
          }

          &.active {
            background: #195151;
            color: #0fc1a9;

            p {
              color: #ffffff;
              font-size: 1.2rem;
              font-weight: 500;
            }
          }
        }
      }
    }

    &__price {
      display: flex;
      justify-content: left;
      align-items: center;
      background: #012b2b;
      border-radius: 30px;
      padding: 5px;
      height: 46px;

      p {
        color: #fff;
        font-size: 16px;
        font-weight: 300;
      }

      &--content {
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 0px 12px;

        &:nth-child(1) {
          border-right: none;

          @media (min-width: 769px) {
            border-right: 1px solid #fff;
          }
        }

        p {
          margin-bottom: 0;
        }

        img {
          margin-top: -4px;
          padding-left: 5px;
          width: 24px;
        }
      }
    }

    &__account {
      padding: 0px 10px;

      p {
        margin-bottom: 0;
      }
    }

    &__button {
      background: #0e8170;
      cursor: pointer;
      width: 100%;
      max-width: 180px;
      height: 46px;
      line-height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      margin-bottom: 30px;
      padding: 0 20px;
      transform: scale(1);
      transition: 0.5s ease-in-out;
      border: none;
      border-radius: 50px;
      margin: 0 auto;

      &:hover {
        transform: scale(1.1);
        transition: 0.5s ease-in-out;
      }

      p {
        color: #fff;
        font-size: 16px;
        margin-bottom: 0;
        white-space: nowrap;
        @media (min-width: 769px) {
          display: block;
        }
      }

      img {
        display: block;
        max-width: 30px;

        @media (min-width: 769px) {
          display: none;
        }
      }
    }
  }
`
export default Header
