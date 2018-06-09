import React from 'react';
import {ItemClick} from '../utils'
import { BodyCryptocurrency, ButtonCryptocurrencyDeposit,
    IconCryptocurrencyDeposit,CryptocurrencyButtonText,
    ButtonCryptocurrencyWithdraw,IconCryptocurrencyWithdraw} from './elements'

class BodyItem extends React.Component {


    render() {
        return (
            <BodyCryptocurrency>

                <ButtonCryptocurrencyDeposit onClick={() => ItemClick(this.props.name,'Deposit')}>
                    <IconCryptocurrencyDeposit/>
                    <CryptocurrencyButtonText>
                        deposit
                    </CryptocurrencyButtonText>
                </ButtonCryptocurrencyDeposit>

                <ButtonCryptocurrencyWithdraw onClick={() => ItemClick(this.props.name,'Withdraw')}>
                    <IconCryptocurrencyWithdraw/>
                    <CryptocurrencyButtonText>
                        withdraw
                    </CryptocurrencyButtonText>
                </ButtonCryptocurrencyWithdraw>
            </BodyCryptocurrency>
        )
    }
}


export default BodyItem;