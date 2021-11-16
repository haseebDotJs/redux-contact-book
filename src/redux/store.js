import { createStore } from "redux"
import contactBookReducer from "./contactBook/contactBookReducer"
const store = createStore(contactBookReducer)
export default store