import { Routes, Route } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Home from '../pages/Home'
import Add from "../pages/Add"
import Edit from "../pages/Edit"
import Header from "../components/Header/Header"
const NotFound = () => {
    return <p>Not found</p>
}

const MyAppRoutes = () => {

    return (
        <Box>
            <Header/>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="add" element={<Add/>} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Box>
    )
}

export default MyAppRoutes
