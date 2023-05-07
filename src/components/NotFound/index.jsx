import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <>
            <h1>Página não encontrada</h1>
            <link to="/">Voltar</link>
        </>
    );
}

export default NotFound;