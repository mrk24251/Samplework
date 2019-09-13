const INIT = {
    response: [
        {
            "_id": "5d6e198e7c790b6d9161f9cc",
            "title": "ali5",
            "description": "gholi5"
        },
        {
            "_id": "5d6e1e8c7c790b6d9161f9cd",
            "title": "fs",
            "description": null
        },
        {
            "_id": "5d6e1eae7c790b6d9161f9ce",
            "title": "hhhhj",
            "description": "hjhhhj"
        },
        {
            "_id": "5d6e1f617c790b6d9161f9cf",
            "title": null,
            "description": null
        }]
}
  
function project (state = INIT, action) {
    switch (action.type) {
        case 'SAVE1_NEW_PRODUCT':
            return { ...state,
                response: action.payload
            }
        default:
            return state
    }
}

export default project
