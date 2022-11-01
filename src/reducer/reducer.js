const initState = {
    render_main: 'RENDER_MAIN',
    open_nav: 'true'
}

export const reducer = (state = initState, action) => {

    // TODO: memo 필수적으로 할 것
    // reducer의 분기는 항상 action.type으로 된다. 
    switch (action.type) {
        case "RENDER_MAIN":
            return {
                ...state,
                render_main : action.render_main
            }
        case "OPEN_NAV":
            return {
                ...state,
                open_nav: !state.open_nav
            }
        default:
            return state;
    }  
}
    
    