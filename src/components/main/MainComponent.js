import React from 'react'
import MainDivComponent from './children/MainDivComponent'
import ExploreDivComponent from './children/ExploreDivComponent'
import ShortsDivComponent from './children/ShortsDivComponent'
import SubscribeDivComponent from './children/SubscribeDivComponent'
import SaveDivComponent from './children/SaveDivComponent'

import {useSelector} from "react-redux"

const MainComponent = () => {

    let render_main = useSelector(state => state.render_main)
    
    return(
        <main>
            {
                render_main === 'RENDER_MAIN' && <MainDivComponent/> ||
                render_main == 'RENDER_EXPLORE' && <ExploreDivComponent/> ||
                render_main == 'RENDER_SHORTS' && <ShortsDivComponent/> ||
                render_main == 'RENDER_SUBSCRIBE' && <SubscribeDivComponent/> ||
                render_main == 'RENDER_SAVE' && <SaveDivComponent/>
            }
        </main>
    )
    
}

export default MainComponent