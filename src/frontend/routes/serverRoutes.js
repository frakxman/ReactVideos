// Containers 
import Home from "../containers/Home";
import Login from "../containers/Login";
import NotFound from "../containers/NotFound";
import Player from "../containers/Player";
import Register from "../containers/Register";

const routes = [
    { exact: true, path:"/", component: Home },
    { exact: true, path:"/login", component: Login },
    { exact: true, path:"/player/:id", component: Player },
    { exact: true, path:"/register", component: Register },
    { name: 'NotFound', component: NotFound },
];

export default routes;