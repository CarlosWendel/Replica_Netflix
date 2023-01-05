import React from "react";
import './Header.css';



// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) =>{
    return(
        <header className={black ? 'black': ''}>
            <div className="header--logo">
                <a href="/">
                    <img className="logo_netflix" src="https://minutopop.com.br/wp-content/uploads/2020/08/netflix-logo-800x445.jpg" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img className='usuario' src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" alt='usuario_netflix'></img>
                </a>
            </div>
        </header>
    );
}