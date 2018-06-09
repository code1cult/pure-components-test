import styled from 'styled-components'
import Deposit from '../../../image/purse.svg'
import Withdrawal from '../../../image/withdrawal.svg'

export const BodyCryptocurrency = styled.div`
  padding: 20px;
`
export const ButtonCryptocurrencyDeposit = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-right: 35px;
`
export const IconCryptocurrencyDeposit = styled.div`
  background: url(${Deposit}) no-repeat;
  height: 30px;
  width: 30px;
  margin-right: 15px;
  display: inline-block;
`
export const CryptocurrencyButtonText = styled.div`
  color: #0da9ff;
  font-size: 14px;
  text-transform: uppercase;
  display: inline-block;
  vertical-align: top;
  margin: 13px 0;
  font-weight: 600;
  cursor: pointer;
`

export const ButtonCryptocurrencyWithdraw = styled.div`
   cursor: pointer;
   display: inline-block;
`

export const IconCryptocurrencyWithdraw = styled.div`
  background:  url(${Withdrawal})  no-repeat;
  height: 30px;
  width: 30px;
  margin-right: 15px;
  display: inline-block;
`

