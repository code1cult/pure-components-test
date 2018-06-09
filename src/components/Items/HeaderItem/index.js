import React, {Component} from 'react';
import {
    HeaderCryptocurrency,
    IconCryptocurrency,
    HeaderImg,
    NameCryptocurrency,
    PriceCryptocurrency,
    Clear
} from './elements';

class HeaderItem extends Component {

    render() {
        return (
            <HeaderCryptocurrency>
                <IconCryptocurrency>
                    <HeaderImg src={this.props.image} alt={this.props.name}/>
                </IconCryptocurrency>
                <NameCryptocurrency>
                    {this.props.name}
                </NameCryptocurrency>

                <PriceCryptocurrency>
                    {this.props.price}
                </PriceCryptocurrency>
                <Clear/>
            </HeaderCryptocurrency>
        )
    }
}

export default HeaderItem;