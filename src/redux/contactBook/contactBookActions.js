
export const addContact = (data) => {
    return {
        type: 'addContact',
        payload: data
    }
}
export const deleteContact = (data) => {
    return {
        type: 'deleteContact',
        payload: data
    }
}
export const editContact = (data) => {
    return {
        type: 'editContact',
        payload: data
    }
}
