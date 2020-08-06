import Login from "../containers/Login";
import { WEB_URL } from "../config"

const loginRoutes = [
    {
        path: WEB_URL.LOGIN,
        exact: true,
        isProtected: true,
        component: Login
    }
];

export default loginRoutes;