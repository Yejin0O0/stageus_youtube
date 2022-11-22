import React from 'react'

const useToggle = () => {
    const [value, setValue] = React.useState(true)

    const handleToggle = () => setValue(!value);

    return [value, handleToggle]
}


export default useToggle
