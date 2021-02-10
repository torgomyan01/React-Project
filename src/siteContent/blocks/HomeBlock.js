import React, { Component } from 'react';
import s from '../siteContent.module.css';
import siteHomText from './data.json';
console.log(siteHomText)




const blocks = siteHomText.map((e)=>{
    if(e.position === 'left'){
        return (
            <div key={e} className={ s.blocks }>
                <div className={ s.imgBlock } style={ { marginRight: '20px' } }>
                    <img src={  window.location.origin + e.imgUrl } alt='images' />
                </div>
                <div className={ s.infoBlock}>
                    <div className={ s.number }> 
                        { e.number }
                    </div>
                    <div className={ s.blockContent}>
                        <p className={ s.subTitle }>{ e.subTitle }</p>
                        <p className={ s.title }>{ e.title }</p>
                        <p className={ s.text }>{ e.text }</p>
                        <a href="#" className={ s.readMore }>read more</a>
                    </div>
                </div>
                
            </div>
        )
    } else{
        return (
            <div key={e.number} className={ s.blocks }>
                <div className={ s.infoBlock}>
                    <div className={ s.number }> 
                        { e.number }
                    </div>
                    <div className={ s.blockContent}>
                        <p className={ s.subTitle }>{ e.subTitle }</p>
                        <p className={ s.title }>{ e.title }</p>
                        <p className={ s.text }>{ e.text }</p>
                        <a href="#" className={ s.readMore }>read more</a>
                    </div>
                </div>
                <div className={ s.imgBlock }>
                    <img src={  window.location.origin + e.imgUrl } alt='images' />
                </div>
            </div>
        )
    }
    
})


function HomeBlock(){
    return (
        <div>
            { blocks }
        </div>
    )
}


export default HomeBlock;