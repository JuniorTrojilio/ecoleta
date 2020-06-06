import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import { ReactComponent as Peoples } from '../../assets/peoples.svg';

const Home = () => {
    return (
        <div id="page-home">              
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta logo"/>    
                </header>
                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um ponto de coleta.</strong>
                    </Link>                                  
                </main>                       
            </div> 
            <div className="itemsvg">
                <Peoples /> 
            </div>  
        </div>
    )
}

export default Home;