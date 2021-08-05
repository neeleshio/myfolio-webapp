import React from 'react';
import { Footer, Header } from './components';
import '../../styles/layoutStyles/home.scss'

const Home: React.FC<React.ReactNode> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Home;
