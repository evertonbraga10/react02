import React from 'react'

const Dashboard = () => {

    const[contador, setContador] = React.useState(0)
    const[visivel, setVisivel] = React.useState(false)

    return(
        <>
            <h1>Dashboard</h1>
            <button 
                className={visivel ? 'active': ''}
                onClick={() => {
                    setContador(contador + 1)
                    setVisivel(!visivel)
                }}
            >    
                Incrementar{contador}
            </button>
        </>
    );
}

export default Dashboard;