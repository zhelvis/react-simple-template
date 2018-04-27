import React, { Component } from 'react'
import { render } from 'react-dom'

import CodeMirror from 'react-codemirror'
import {UnControlled} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import './Main.css'

import axios from 'axios';

const apiUrl = require( '../../../config').api_url;

axios.defaults.baseURL = 'http://localhost:8000'+ apiUrl;

export default class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            input: "// Input",
            output: "// Output"
        };
        this.updateCode = this.updateCode.bind(this);
    }

    async updateCode(newCode) {
        await axios.post('/converter',{ code: newCode })
            .then(res => {
                this.setState({
                    input: newCode,
                    output: res.data
                });
            });
    }

    render() {
        const options = {
            lineNumbers: true,
            lineWrapping: true,
            mode: 'javascript'
        };
        return (
            <React.Fragment>
                <div className={'main'}>
                    <CodeMirror value={this.state.input} onChange={this.updateCode} options={options} />
                    <UnControlled value={this.state.output} options={options}/>
                </div>
            </React.Fragment>
        )
    }
}