import React, { Component } from 'react';
import s from './siteContent.module.css';
import HomeBlock from './blocks/HomeBlock';



export default class SiteContent extends Component {
    render() {
        return (
            <div className={ s.siteContent }>
                <div className={ s.contener }> 
                    <HomeBlock />
                </div>
            </div>
        )
    }
}



