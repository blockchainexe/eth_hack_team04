import ETHTransferButton from './../../../user/ui/ETHTransferButton'
import RequestButton from './../../../user/ui/RequestButton'
import React, { Component } from 'react'

class Profile extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    console.log(this.props.authData);
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>Change these details in UPort to see them reflected here.</p>
            <p>
              <strong>Name</strong><br />
              {this.props.authData.name}
            </p>
            <br />
            <RequestButton /><br />
            <br />
            
        
        	<div id="Ninja_Medical_ja"></div>
        	<div id="Ninja_Medical_en"></div>
        	<div id="Ninja_Medical_cn"></div>

        
            <div className="hidden" id="Ninja_Medical_Eth_Transfer"><ETHTransferButton /></div>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
