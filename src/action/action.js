// type의 역할: reducer 에서 어떤 action이랑 연결할지 알려주기 위해서
export const renderMain = (data) => {
    return {
        type: "RENDER_MAIN",
        render_main: data
    }
}

export const openNav = () => {
    return {
        type: "OPEN_NAV",
        
    }
}