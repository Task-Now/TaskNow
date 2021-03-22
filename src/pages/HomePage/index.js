import React from 'react';
import Header from '../../components/Header';
import './index.css';

export default function HomePage() {
    return (
        <div className="home-page">
            <Header/>
            <main className="content">
                <div className="left">
                    <p className="title">
                        Administrar trabalhos escolares nunca foi <strong>tão fácil</strong>
                    </p>
                    <p className="slogan">
                        A ferramenta número 1 voltada para administração de trabalhos escolares e acadêmicos
                    </p>
                    <button type="button" className="get-start">
                        Vamos começar &#8594;
                    </button>
                </div>
                <div className="login-box">

                </div>
            </main>
            <img className="watermelon" src="assets/watermelon.svg" alt="Watermelon"/>
        </div>
    );
}