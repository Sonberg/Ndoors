import React, { Component } from 'react'
import ShareBoxFirst from '../components/ShareBoxFirst'
import ShareBoxSecond from '../components/ShareBoxSecond'
import ShareBoxThird from '../components/ShareBoxThird'
import { Link } from 'react-router-dom'

export default class SharedReferences extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.saveToArray = this.saveToArray.bind(this)
        this.state = {
            referenceState: 1,
            referenceDetails: {
                newGroupName: ''
            },
            userReferenceList: []
        }

        const userEmail = localStorage.getItem('email');

        this.getReferenceData(userEmail).then(async result => {
            await this.setState({ userReferenceList: result })
        })
    }

    async getReferenceData(key) {
        if (key !== '') {
            return fetch(`http://localhost:3001/api/shared-references/${key}`)
                .then(response => response.json())
                .then(response => {
                    return response
                })
        }
    }

    onContinue() {
        this.setState({ referenceState: this.state.referenceState + 1 })
    }
    onBackward() {
        this.setState({ referenceState: this.state.referenceState - 1 })
    }
    onChange({ target }) {
        this.setState({
            referenceDetails: {
                ...this.state.referenceDetails,
                [target.id]: target.value
            }
        })
    }

    saveToArray({ target }) {
        this.setState({
            referenceDetails: {
                ...this.state.referenceDetails,
                [target.id]: [
                    ...(this.state.referenceDetails[target.id] || []),
                    target.value
                ]
            }
        })
    }
    render() {
        let referencePage
        switch (this.state.referenceState) {
            case 1:
                referencePage = (
                    <div>
                        <ShareBoxFirst
                            onBackward={() => this.onBackward()}
                            onContinue={() => this.onContinue()}
                            onChange={this.onChange}
                            details={this.state.referenceDetails}
                        />
                    </div>
                )
                break
            case 2:
                referencePage = (
                    <ShareBoxSecond
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.onContinue()}
                        onChange={this.onChange}
                        details={this.state.userReferenceList}
                    />
                )
                break
            case 3:
                referencePage = (
                    <ShareBoxThird
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.onContinue()}
                        onSelect={this.saveToArray}
                        details={this.state.referenceDetails}
                    />
                )
                break
            default:
                referencePage = <h1>END</h1>
        }

        return (
            <div
                style={{
                    marginTop: '100px',
                    height: '100vh',
                    backgroundImage: `url(${require('./../assets/BGK.svg')})`
                }}
            >
                {referencePage}
            </div>
        )
    }
}
