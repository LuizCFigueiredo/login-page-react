import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import NavBar from '../pages/NavBar';
import Cadastro from '../pages/Cadastro';
import Sobre from '../pages/Sobre';
import Error from '../pages/Error';

const RouteApp = () => (
    <Router>
    {/*  <NavBar />*/}
    <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/cadastro' element={<Cadastro />}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='*' element={<Error />}></Route>
    </Routes>
    </Router>
)

export default RouteApp