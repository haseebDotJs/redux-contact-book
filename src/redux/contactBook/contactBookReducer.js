const initialState = {
    contacts: []
}

const contactBookReducer = (state = initialState, action) => {
    console.log("action.payload", action.payload)
    switch (action.type) {
        case 'addContact':
            return {
                contacts: [...state.contacts, action.payload]
            }
        case 'deleteContact':
            return {
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            } 
        case 'editContact': 
            return {
                contacts: action.payload
            }
        default:
            return state
    }
}

export default contactBookReducer
