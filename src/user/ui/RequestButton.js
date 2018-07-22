import React, { Component } from 'react'
import { uport } from './../../util/connectors.js'

class RequestButton extends Component {
    request(){
    	uport.requestCredentials({requested: ['name', 'NinjaMedical']}).then((credentials) => {
        	document.getElementById('Ninja_Medical_ja').appendChild(document.createTextNode(credentials.NinjaMedical.ja));
        	document.getElementById('Ninja_Medical_en').appendChild(document.createTextNode(credentials.NinjaMedical.en));
        	document.getElementById('Ninja_Medical_cn').appendChild(document.createTextNode(credentials.NinjaMedical.cn));
        	
        	document.getElementById('Ninja_Medical_Eth_Transfer').classList.remove('hidden');
        	document.getElementById('Ninja_Medical_Output').classList.remove('hidden');

	    })
    }
    render(){
        return(
            <button><a href="#" className="pure-menu-link" onClick={(event) => this.request()}>Request</a></button>
          )
    }
}
export default RequestButton