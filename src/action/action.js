// type의 역할: reducer 에서 어떤 action이랑 연결할지 알려주기 위해서
export const changeTab = (data) => {
    return {
        type: "CHANGE_TAB", // type 에는change, set, open을 자주 씀
        change_tab: data
    }
}

export const openNav = () => {
    return {
        type: "OPEN_NAV",
        
    }
}

export const setProfileImg = (data) => {
    return {
        type: "SET_PROFILE_IMG",
        data: data
    }
}

export const setVideoData = (data) => {
    return {
        type: "SET_VIDEO_DATA", // set_video_data로 명명 추천
        data: data
    }
}