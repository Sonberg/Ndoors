import React, { Component } from 'react'
import AutoComplete from './AutoComplete'
import Input from './InputField'

export default class BoxFirst extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row card">
          <div className="col s11 offset-s1">
            <h3 style={{ fontSize: '32px' }}>Who's your reference?</h3>
          </div>
          <form>
            <div>
              <div className="row">
                <div className="col s6 offset-s1">
                  <Input
                    name="referentName"
                    label="Name"
                    value={this.props.details.referentName}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s6 offset-s1">
                  <AutoComplete
                    value={this.props.details.referentRole}
                    onChange={this.props.onChange}
                    url="api/csv/professions"
                    label="role"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s5 offset-s1 " style={{}}>
                <Input
                  name="referentEmail"
                  label="E-mail"
                  value={this.props.details.referentEmail}
                  onChange={this.props.onChange}
                />
              </div>
              <div className="col s5" style={{}}>
                <Input
                  type="number"
                  name="referentPhoneNumber"
                  label="Phone number"
                  value={this.props.details.referentPhoneNumber}
                  onChange={this.props.onChange}
                />
              </div>
            </div>
          </form>
          <div className="row">
            <a
              className="col s2 offset-s9 waves-effect waves-light btn center-align"
              onClick={() => this.props.onContinue()}
            >
              Continue
            </a>
          </div>
        </div>
      </div>
    )
  }
}
