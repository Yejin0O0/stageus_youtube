import React from 'react';
import NavDivComponent from "./children/NavDivComponent"
import { useSelector } from "react-redux"

const NavComponent = () => {
    const NavImgData = [
        {
            "id": "nav_1",
            "name": "홈",
            "class": "nav-img",
            "src": "image/home.png",
            "pClass": "nav-p",
            "render": "RENDER_MAIN"
        },
        {
            "id": "nav_2",
            "name": "탐색",
            "class": "nav-img",
            "src": "image/compass.png",
            "pClass": "nav-p",
            "render": "RENDER_EXPLORE"

        },
        {
            "id": "nav_3",
            "name": "Shorts",
            "class": "nav-img",
            "src": "image/shorts.png",
            "pClass": "nav-p",
            "render": "RENDER_SHORTS"

        },
        {
            "id": "nav_4",
            "name": "구독",
            "class": "nav-img",
            "src": "image/subscribe.png",
            "pClass": "nav-p",
            "render": "RENDER_SUBSCRIBE"

        },
        {
            "id": "nav_5",
            "name": "보관함",
            "class": "nav-img",
            "src": "image/save.png",
            "pClass": "nav-p",
            "render": "RENDER_SAVE"

        },
    ]

    
    let open_nav = useSelector(state => state.open_nav)

    return (
        <nav id='navTag'>
            
            {NavImgData.map((data) => (
                <NavDivComponent ImgData={data} key={data.id} render={data.render}/>
            ))}
            
        </nav>
    )
    
}


export default NavComponent