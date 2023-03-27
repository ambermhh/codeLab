

import StudentList from "../components/StudentList";
import {Outlet} from 'react-router-dom'
import StudentCard from "../components/StudentCard";

function Students() {
    return (
        <div className="Students">
            
            <p>These route paths are all student related</p>
            <Outlet/>
        </div>
    )
}

export default Students