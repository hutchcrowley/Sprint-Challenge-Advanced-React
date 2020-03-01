import React from 'react'

const Spinner = () => {
    return (
        <div className='spinner-container'>
            <img src={require("../Assets/Spinner.gif")} 
            alt='loading' />
        </div>
    )
}

export default Spinner