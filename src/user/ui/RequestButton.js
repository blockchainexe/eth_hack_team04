import React, { Component } from 'react'
import { uport } from './../../util/connectors.js'

class RequestButton extends Component {
    request(){
    	uport.requestCredentials({requested: ['name', 'Ninja_Medical']}).then((credentials) => {
        	document.getElementById('Ninja_Medical_ja').appendChild(document.createTextNode(credentials.Ninja_Medical.ja));
        	document.getElementById('Ninja_Medical_en').appendChild(document.createTextNode(credentials.Ninja_Medical.en));
        	document.getElementById('Ninja_Medical_cn').appendChild(document.createTextNode(credentials.Ninja_Medical.cn));
	    })
    }
    render(){
        return(
            <button><a href="#" className="pure-menu-link" onClick={(event) => this.request()}>Request</a></button>
          )
    }
}
export default RequestButton