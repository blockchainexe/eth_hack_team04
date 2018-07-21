import React, { Component } from 'react'
import { uport } from './../../util/connectors.js'

class AttestButton extends Component {
    attest(){
    	uport.requestCredentials().then((credentials) => {
        	// Can verify the uport user is verified with the returned 'credentials' object.
	        uport.attestCredentials({
	          sub: credentials.address,
	          claim: {
	            "Ninja_Medical": {
	            	"ja": "テストメディカル情報",
	            	"en": "Test Medical Information",
	            	"cn": "测试医疗信息"
	            }
	          }
	        })
	    })
    }
    render(){
        return(
            <button><a href="#" className="pure-menu-link" onClick={(event) => this.attest()}>Attest</a></button>
          )
    }
}
export default AttestButton