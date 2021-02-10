import React, { Component } from 'react';
import './header.css';
import HeaderImgOne from '../img/header/HG.png';
import HeaderImgTwo from '../img/header/MG.png';
import HeaderImgTree from '../img/header/VG.png';
import HeaderImgHero from '../img/header/BGHero.png';

import Navbar from './Navbar/navbar';
import SliderBlock from './sliderBlock/SliderBlock';
import $ from "jquery";




export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="headerBgOne" src={ HeaderImgOne } />
                <img className="headerBgTwo" src={ HeaderImgTwo } />
                <img className="HeaderImgTree" src={ HeaderImgTree } />
                <img className="HeaderImgHero" src={ HeaderImgHero } />
                <Navbar />
                <SliderBlock />
            </div>
        )
    }
}

$(window).on('load', function(){
    let headerBgTwo = Number(searchNumberToString($('.headerBgTwo').css('top'))[0]);
    let HeaderImgTree = Number(searchNumberToString($('.HeaderImgTree').css('top'))[0]);
    let Header = Number(searchNumberToString($('.header').css('height'))[0]);
    srartScroll(headerBgTwo,HeaderImgTree,Header);
})
function srartScroll(headerBgTwo,HeaderImgTree,Header){
    $(window).on('scroll', function(){
        let percent = $(window).scrollTop();
        let twoPercent = (percent * 15) / 100;
        let treePercent = (percent * 30) / 100;
        let calcPrecent = headerBgTwo - twoPercent;
        let calcPrecentTwo = HeaderImgTree - treePercent;
        let calcPrecentHeader = Header - twoPercent;

        
        $('.header').css('height',''+ calcPrecentHeader +'px');
        $('.HeaderImgTree').css('top',''+ calcPrecentTwo +'px');
        $('.headerBgTwo').css('top',''+ calcPrecent +'px');
    })
    
    
}

function searchNumberToString(text){
    let regex = /\d+/g;
    let string = text;
    let matches = string.match(regex);  // creates array from matches
    return matches;
}








