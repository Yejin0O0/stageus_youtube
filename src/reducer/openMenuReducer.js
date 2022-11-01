const initState = {
    boolean_value: 'true',
}

const openMenuReducer = (state = initState, action) => {

    // 코드 줄이기 가능 ! 
    switch (action.type) {
        case "true":
            return {
                ...state,
                boolean_value : !(action.type)
            }

        case "false":
            return {
                ...state,
                boolean_value : !(action.type)

            }

        default:
            return state;
        
        }  
        
    }
    



export default openMenuReducer