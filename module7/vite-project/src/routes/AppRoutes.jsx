import { Routes, Route } from "react-router-dom"
import Theme from "../components/Theme"
import About from "../pages/About"
import Dashboard, {DashboardMessages, DashboardTasks} from "../pages/Dashboard"
import PageNotFound from "../pages/PageNotFound"
import StudentDetails from "../components/StudentDetails"
import StudentList from "../components/StudentList"
import Students from "../pages/Students"
import Joke, { JokeMessages } from "../pages/joke"
import LoginMUI from "../components/LoginMUI"
import PostDetails from "../components/PostDetails"
import PostList from "../components/PostList"
import Posts from "../pages/Posts"
//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}
function AppRoutes(props) {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route path='/dashboard' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>


            <Route path='/about' element={<About {...props} />} />

            <Route path='/login' element={<LoginMUI {...props} />} />

            <Route path="/theme" element={<Theme/>}/>

            <Route path="/Joke" element={<Joke/>}>
                <Route path="joke" element={<JokeMessages/>} />
            </Route>

            <Route path='/posts' element={<Posts {...props} />}>
                <Route index element={<PostList />} />
                <Route path=":postid" element={<PostDetails />}/>
            </Route>                   
            
            

            <Route path='/students' element={<Students {...props} />}>
                <Route index element={<StudentList />} />
                <Route path=":studentid" element={<StudentDetails />}/>
            </Route>  
            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />            
        </Routes>
    )
}

//split up the components we have created so far and make different pages for them

export default AppRoutes
