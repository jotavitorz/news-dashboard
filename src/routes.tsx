import { createBrowserRouter} from "react-router-dom";
import { Layout } from "./components/layout";

import { Home } from "./pages/home";
import { NotFound} from "./pages/notfound";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Home />,
                path: "/",
            },
            {
                element: <NotFound />,
                path: "*",
            }
        ]
    }
])

export { router }

