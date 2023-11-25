import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Exercicio from './pages/Exercicio';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/exercicio/:username' element={<Exercicio />} />
            </Routes>
        </Router>
    )
}