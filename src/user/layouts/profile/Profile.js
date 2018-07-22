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
            <h1>医療情報読み込み</h1>
            <div className="d-form-button-group"><RequestButton /></div><br />
            <br />
            
        
        	<div id="Ninja_Medical_Output" className="hidden">
        	日本語：<br />
        	<div id="Ninja_Medical_ja"></div>
        	英語：<br />
        	<div id="Ninja_Medical_en"></div>
        	中国語：<br />
        	<div id="Ninja_Medical_cn"></div>
        	
        	<img src="/img1836j5256_1.jpg" />

        	</div>

        
            <div className="hidden d-form-button-group" id="Ninja_Medical_Eth_Transfer"><ETHTransferButton /></div>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
