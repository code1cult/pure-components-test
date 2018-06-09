import React, { Component } from 'react';
import HeaderItem from './HeaderItem'
import BodyItem from './BodyItem'

import { Item } from './elements'
import { ItemClick } from './utils'

class AccountItems extends Component {

    render() {
        this.props.data.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
        return (
            this.props.data.map((item, i) => {
              return (
                  <Item key={i} onClick={() => ItemClick(item.name,'AccountItem')}>
                      <HeaderItem name={item.name} price={item.price} image={item.image}/>
                      <BodyItem name={item.name}/>
                  </Item>
              )
            })
        )
    }
}


export default AccountItems;