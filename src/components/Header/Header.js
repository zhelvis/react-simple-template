import React from 'react'

import './Header.css'

import githubImg from '../../static/img/github.png'
import telegramImg from '../../static/img/telegram.png'
import vkImg from '../../static/img/vk.png'

const Header = () => (
    <div className={'header'}>
        <span className={'logo'}>ES6 to ES5 CONVERTER</span>
        <div className={'social'}>
            <a href={'https://github.com/warlock1607/react-simple-template/tree/example'}>
                <img src={githubImg}/>
            </a>
            <a href={'https://vk.com/v.zhelvis'}>
                <img src={vkImg}/>
            </a>
            <a href={'https://t.me/Zhelvis'}>
                <img src={telegramImg}/>
            </a>
        </div>
    </div>
)

export default Header