import React from 'react'
import { Link } from 'react-router-dom';

const Produto = (props) => {
    return(
        <>
            <div className='produto'>
                <img src={props.image} alt={props.title} />
                <div className='info'>
                    <h3>{props.tilte}</h3>
                    <h6>{props.category}</h6>
                    <div className='comprar'>
                        <span>R$ {props.price}</span>
                        <Link to='#!'>Add</Link>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Produto;