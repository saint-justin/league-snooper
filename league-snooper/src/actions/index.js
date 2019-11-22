// TODO:
// Replace me with all the actions needed to load files from DDragon

export const increment = (_number=1) =>{
    return {
        type: 'INCREMENT',
        payload: _number
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}