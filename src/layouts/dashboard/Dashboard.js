import AttestButton from './../../user/ui/AttestButton'
import React, { Component } from 'react'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <div className="d-Dashboard-main">
              <div className="d-form-group">
                <h1>患者が記入する医療情報登録フォーム</h1>
                {/* <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p> */}
                <p>※必ずかかりつけ医と一緒に医療情報をご入力ください。</p>
                <div className="d-form-parts">
                  <p className="d-form-label">日本語の医療情報</p>
                  <textarea id="Ninja_Medical_ja_Input"></textarea>
                </div>
                <div className="d-form-parts">
                  <p className="d-form-label">英語の医療情報</p>
                  <textarea id="Ninja_Medical_ja_Input"></textarea>
                </div>
                <div className="d-form-parts">
                <p className="d-form-label">中国語の医療情報</p>
                  <textarea id="Ninja_Medical_ja_Input"></textarea>
                </div>
              </div>
              <div className="d-form-group">
                <label for=""><input type="checkbox"　/>親族にガン患者がいる場合はチェックしてください</label><br />
                <label for=""><input type="checkbox"　/>ポリープの施術経験がある場合はチェックしてください</label><br />
                <label for=""><input type="checkbox"　/>喫煙している場合はチェックしてください</label><br />
                <label for=""><input type="checkbox"　/>飲酒している場合はチェックしてください</label><br />
                <div className="d-form-button-group">
                  <AttestButton />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
