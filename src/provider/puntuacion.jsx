import React, { useState } from 'react';

const PuntajeProvider = props => {

    const [puntaje, setPuntaje] = useState();

    return (
        <div>
            <AppContext.Provider value={[puntaje, setPuntaje]}>
                {props.children}
            </AppContext.Provider>
        </div>

    );
}

export default PuntajeProvider;
export const AppContext = React.createContext();