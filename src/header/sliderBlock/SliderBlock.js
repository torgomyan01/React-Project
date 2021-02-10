import React, { Component } from 'react';
import './sliderBlock.css';




export default class SliderBlock extends Component {
    render() {
        return (
            <div className='sliderBlock'>
                <div className='sliderContent'>
                    <div className='title'>A Hiking guide</div>
                    <div className='text'>
                        Be prepared for the Mountains and beyond!
                    </div>
                    <span className='scrollDown'>scroll down</span>
                </div>
                <div className='sliderRouter'>
                    <div className='routNumber'>
                        <div className='numbers'>
                            Start    
                        </div>  
                        <div className='numbers'>
                            01    
                        </div>  
                        <div className='numbers'>
                           02  
                        </div>  
                        <div className='numbers'>
                           03
                        </div>  
                    </div>
                    <div className='sliderList'>
                        <div className='locations'></div>
                    </div>
                </div>
                <div className='following'>
                    Follow us
                    <a href="#" className='instagram'></a>    
                    <a href="#" className='twiter'></a>    
                </div>
            </div>
        )
    }
}
