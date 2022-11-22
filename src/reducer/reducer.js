const initState = {
    change_tab: 'RENDER_HOME',
    // change_tab's state: 
    // 'RENDER_HOME' / 'RENDER_EXPLORE' / 'RENDER_SHORTS' / 'RENDER_SUBSCRIBE' / 'RENDER_SAVE'
    is_nav_open: false,
    set_profile_img: null,
    set_video_data: null
}

export const reducer = (state = initState, action) => {

    // TODO: memo 필수적으로 할 것
    // reducer의 분기는 항상 action.type으로 된다. 
    switch (action.type) {
        case "CHANGE_TAB":
            return {
                ...state,
                change_tab : action.change_tab
            }
        case "OPEN_NAV":
            return {
                ...state,
                is_nav_open: !state.is_nav_open
            }

        case "SET_PROFILE_IMG":
            return {
                ...state,
                set_profile_img: action.data
            }

        
        case "SET_VIDEO_DATA":
            return {
                ...state,
                set_video_data: action.data
            
            }

        

        default:
            return state;
    }  
}
    
    