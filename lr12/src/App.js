import { Routes } from 'react-router-dom';
import cls from './App.module.css';
import AppRouter from './components/Router/Router';
import Navbar from './components/layout/Navbar/Navbar';

function App() {

    return (
        <div className={cls.App}>
            <Navbar />
            <AppRouter />
        </div>
    );

}

export default App;
