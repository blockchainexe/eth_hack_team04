import AttestButton from './../../user/ui/AttestButton'
import RequestButton from './../../user/ui/RequestButton'
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
            <AttestButton /><br />
            <RequestButton />
          </div>
        </div>
        <div id="Ninja_Medical_ja"></div>
        <div id="Ninja_Medical_en"></div>
        <div id="Ninja_Medical_cn"></div>
      </main>
    )
  }
}

export default Dashboard
