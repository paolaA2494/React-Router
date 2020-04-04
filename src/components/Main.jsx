import React from 'react';
import { Link } from 'react-router-dom';

//statefull

const Main = () => {
    return ( 

        <>
        <h2>Esta es mi página principal de productos</h2>
        <Link to="/">
         <button>Regresar al HOME</button>
        </Link>
        </>

     );
}
 
export default Main;