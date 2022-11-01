import React from 'react';

import HeaderMenuComponent from './children/HeaderMenuComponent'
import HeaderSearchDivComponent from './children/HeaderSearchDivComponent';
import HeaderPrivateDivComponent from './children/HeaderPrivateDivComponent';

const HeaderComponent = () => {
    const HeaderImgData = {
        "MenuImgInfo": [
            {
                "id": 1,
                "class": "header-menu-img",
                "src": "image/menu.png",
            },
            {
                "id": 2,
                "class": "header-logo",
                "src": "image/youtube-logo.jpg",
            },
            {
                "id": 3,
                "class": "header-search-icon",
                "src": "image/search.png",
            },
            {
                "id": 4,
                "class": "header-mic-img",
                "src": "image/mic.png",
            },
            {
                "id": 5,
                "class": "header-private-img",
                "src": "image/add-video.png",
            },
            {
                "id": 6,
                "class": "header-private-img",
                "src": "image/bell.png",
            },
            {
                "id": 7,
                "class": "header-private-img round",
                "src": "image/unnamed.jpg",
            },
        ],
    }
    return (
        <header>
            <HeaderMenuComponent ImgData={HeaderImgData.MenuImgInfo}/>
            <HeaderSearchDivComponent ImgData={HeaderImgData.MenuImgInfo}/>
            <HeaderPrivateDivComponent ImgData={HeaderImgData.MenuImgInfo}/>
        </header>
    )
}

export default HeaderComponent