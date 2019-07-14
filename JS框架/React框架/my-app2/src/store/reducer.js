const defaultState = {
    inputVaule:'',
    list:[1,2,3],
}

export default (state = defaultState,action) => {
    if(action.type === "change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVaule = action.value;
        return newState;
    }
    if(action.type === "add_item"){
        const newState = JSON.parse(JSON.stringify(state));
        console.log(newState);
        newState.list.push(newState.inputVaule);
        newState.inputVaule = '';
        return newState;
    }
    return state;
}