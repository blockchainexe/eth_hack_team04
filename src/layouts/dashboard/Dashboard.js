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
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
            日本語の医療情報<br />
            <textarea id="Ninja_Medical_ja_Input"></textarea><br />
            英語の医療情報<br />
            <textarea id="Ninja_Medical_en_Input"></textarea><br />
            中国語の医療情報<br />
            <textarea id="Ninja_Medical_cn_Input"></textarea><br />
            <input type="checkbox"　/>親族にガン患者がいる場合はチェックしてください<br />
            <input type="checkbox" />ポリープの施術経験がある場合はチェックしてください<br />
            <input type="checkbox" />喫煙している場合はチェックしてください<br />
            <input type="checkbox" />飲酒している場合はチェックしてください<br />
            <AttestButton /><br />
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
