import React, { Component } from 'react'
import { uport } from './../../util/connectors.js'

class ETHTransferButton extends Component {
    request(){
    }
    render(){
        return(
            <button><a href="#" className="pure-menu-link" onClick={(event) => this.request()}>Eth Transfer</a></button>
          )
    }
}
export default ETHTransferButton