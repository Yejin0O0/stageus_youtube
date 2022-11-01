
const setTrue = () => {
    return {
        type: "true",
    }
}

const setFalse = () => {
    return {
        type: "false",
    }
}


// export 하나 -> export default
// export 여러개
export { setTrue, setFalse }