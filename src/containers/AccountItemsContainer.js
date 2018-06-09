import React from 'react';
import Items from '../components/Items'

class AccountItemsContainer extends React.Component {

    render() {
        return (
            <Items data={this.props.data} />
        )
    }
}
export default (AccountItemsContainer);
