const INITIAL_STATE = {
    region: '',
    modalVisible: true,
    loading: true
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'getLocation':
            return { ...state, region: action.payload, modalVisible: false, loading: false }
        case 'getLocationError':
            return { ...state, modalVisible: false, loading: false }            
        default:
            return state
    }   
}