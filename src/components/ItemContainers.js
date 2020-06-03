import React, {Component} from 'react';
import MainTitle from "./MainTitle";
import ItemList from "./ItemList";

class ItemContainers extends Component {
    constructor(props) {
        super();
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
        }
        this.handleUpdateFlag = this.handleUpdateFlag.bind(this)
    }

    handleUpdateFlag () {
        this.state.items.push("AAA")
        this.setState({
            items: this.state.items
        })
    }
    render() {
        return (
            <div>
                <MainTitle text="My Items Page" url="https://www.example.com"/>
                <ItemList items={this.state.items}/>
            </div>
        );
    }
}

export default ItemContainers;