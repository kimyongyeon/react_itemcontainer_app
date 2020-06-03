import React, {Component} from 'react';
import FlagSwitch from "./FlagSwitch";
import ViewFlagValue from "./ViewFlagValue";

class SwitchContainer extends Component {
    constructor() {
        super();
        this.handleUpdateFlag = this.handleUpdateFlag.bind(this)
        this.state = {
            flag: false
        }
    }
    handleUpdateFlag() {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        return (
            <div>
                <FlagSwitch handleUpdateFlag={this.handleUpdateFlag}/>
                <ViewFlagValue flag={this.state.flag}/>
            </div>
        );
    }
}

export default SwitchContainer;