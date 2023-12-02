import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Exercicio from './pages/Exercicio';
import Main from 'pages/Main';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/exercicio/:username' element={<Exercicio />} />
            </Routes>
        </Router>
    )
}