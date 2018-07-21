import React, { Component } from 'react'
import { uport } from './../../util/connectors.js'

class AttestButton extends Component {
    attest(){
    	uport.requestCredentials().then((credentials) => {
    		var NinjaMedical = new Object();
    		NinjaMedical['ja'] = document.getElementById('Ninja_Medical_ja_Input').value;
    		NinjaMedical['en'] = document.getElementById('Ninja_Medical_en_Input').value;
    		NinjaMedical['cn'] = document.getElementById('Ninja_Medical_cn_Input').value;

        	// Can verify the uport user is verified with the returned 'credentials' object.
	        uport.attestCredentials({
	          sub: credentials.address,
	          claim: {
	            "NinjaMedical": NinjaMedical
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