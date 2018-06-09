import React, {Component} from 'react';
import './Reset.css';
import AccountItemsContainer from './containers/AccountItemsContainer';
import { DeleteItem } from './components/Items/elements';
import {Bitcoin,Dogecoin,Ethereum,Litecoin,Zencoin} from './components/Items/imageConfig';

class App extends Component {


    state = {
        list: [
            {
                name: 'Ethereum',
                price: 597,
                image: Ethereum
            },
            {
                name: 'Bitcoin',
                price: 7500,
                image: Bitcoin
            },
            {
                name: 'Litecoin',
                price: 119,
                image: Litecoin
            },
            {
                name: 'Dogecoin',
                price: 0.003,
                image: Dogecoin
            },
            {
                name: 'Zencoin',
                price: 1,
                image: Zencoin
            }
        ]
    };


    deleteItemNow() {
        let arr = this.state.list;
        let maxNumber = arr.reduce((previousValue, currentValue) => {
            let number = isNaN(previousValue) ? previousValue.name.length : previousValue;
            return Math.max(number, currentValue.name.length);
        });

        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i].name.length === maxNumber) {
                arr.splice(i, 1);
            }
        }
        this.setState({
            list: arr
        });


    }


    render() {
        return (
            <div className="App">
                <AccountItemsContainer data={this.state.list}/>
                <DeleteItem onClick={this.deleteItemNow.bind(this)}>
                    Удалить элемент
                </DeleteItem>
            </div>
        );
    }
}

export default App;
