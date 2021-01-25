import React, { useReducer } from 'react';
import { patientReducer, patientState } from '../reducers/PatientReducer';

const PatientManagment = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState)
    console.log(state)
    return (
        <div>
            <h1>Patient Management: {state.patients.length} </h1>
        </div>
    );
};

export default PatientManagment;