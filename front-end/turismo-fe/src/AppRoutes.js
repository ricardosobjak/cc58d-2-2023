import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import UserList from './views/user/UserList';
import UserForm from './views/user/UserForm';
import NotFound from './views/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserList />} />
            <Route path="/user/new" element={<UserForm />} />
            <Route path="/user/:id" element={<UserForm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;