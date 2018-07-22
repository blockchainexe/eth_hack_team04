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
<<<<<<< HEAD
      <div className="pure-g">
      <div className="pure-u-1-1">
      <div className="d-Dashboard-main">
      <div className="d-form-group">
      <h1 >登録情報参照</h1>
      <p>
      <strong>名前</strong><br />
      {this.props.authData.name}
      </p>
      
      <p>
      <div className="d-form-parts">
        <p className="d-form-label"> 医療情報(日本語) </p>
      </div>
      </p>
      <div id="Ninja_Medical_ja"></div>
      <br />

      <p>
      <div className="d-form-parts">
        <p className="d-form-label">医療情報(英語)</p>
      </div>
      </p>
      <div id="Ninja_Medical_en"></div>
      <br />

      <p>
      <div className="d-form-parts">
        <p className="d-form-label">医療情報(中国語)</p>
      </div>
      </p>
      <div id="Ninja_Medical_cn"></div>
      <br />

      <div className="d-form-parts">
        <p className="d-form-label">親族ののがん患者有無</p>
      </div>
      <div id="NinjaMedical_None">
      </div>
      <br />

      <div className="d-form-parts">
        <p className="d-form-label">ポリープの施術経験</p>
      </div>
      <div id="NinjaMedical_None">
      </div>
      <br />

      <div className="d-form-parts">
        <p className="d-form-label">喫煙の有無</p>
      </div>
      <div id="NinjaMedical_None"></div>
      <br />

      <div className="d-form-parts">
        <p className="d-form-label">飲酒の有無</p>
      </div>
      <div id="NinjaMedical_None">
      </div>
      <br />


      <br />
      <div className="d-form-button-group">
        <RequestButton />
      </div>
      <br />

      <div className="hidden " id="Ninja_Medical_Eth_Transfer">
        <div className="d-form-button-group">
        <ETHTransferButton />
=======
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>医療情報読み込み</h1>
            <div id="Ninja_Medical_Request_Button" className="d-form-button-group"><RequestButton /></div><br />
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
>>>>>>> 3d706459fd6d01a9c6ef0496f399eae7646fe3d7
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      )
    }
  }

  export default Profile
