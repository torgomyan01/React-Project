import React, { Component } from 'react';
import s from './footer.module.css';



export default class Footer extends Component {
    render() {
        return (
            <div className={ s.footer }>
                <div className={ s.fblock }>
                    <p className={ s.title }>MNTN</p>
                    <p className={ s.text }>Get out there & discover your next slope, mountain & destination!</p>
                    <p className={ s.corp }>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
                </div>
                <div className={ s.fblock }>
                    <p className={ s.contacBlockTitle }>More on The Blog</p>
                    <p className={ s.contacBlockText }>About MNTN</p>
                    <p className={ s.contacBlockText }>Contributors & Writers</p>
                    <p className={ s.contacBlockText }>Write For Us</p>
                    <p className={ s.contacBlockText }>Contact Us</p>
                    <p className={ s.contacBlockText }>Privacy Policy</p>
                </div>
                <div className={ s.fblock }>
                    <p className={ s.contacBlockTitle }>More on MNTN</p>
                    <p className={ s.contacBlockText }>The Team</p>
                    <p className={ s.contacBlockText }>Jobs</p>
                    <p className={ s.contacBlockText }>Press</p>
                </div>
            </div>
        )
    }
}



