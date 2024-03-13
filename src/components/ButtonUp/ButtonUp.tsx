import React from 'react';

const ButtonUp = () => {

    return (
        <button onClick={() => window.scrollTo(0, 0)}>Наверх</button>
    );
};

export default ButtonUp;