import React, {Component} from 'react';
import InformationArea from "./InformationArea";

class InformationContainer extends Component {
    constructor() {
        super()
        this.state = {
            contacts: [{
                tel: '1111-1111',
                email:
                    'taro@gmail.com',
                organization:
                    'AAA Company',
                account:
                    'taro@gfacebook'
            }]
        }
    }

    render() {
        return (
            <div>
                <InformationArea {...this.state.contacts[0]} />
            </div>
        );
    }
}

export default InformationContainer;