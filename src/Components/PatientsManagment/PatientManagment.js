import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../reducers/PatientReducer';

const PatientManagment = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState)
    //handle submit function tate event tak niya ashbo karon ata form ,form tak kaow jodi enter mare tahole se page tak reload korar cheshta kopre tay prevent kore nibo
    const handleSubmit = event => {
        event.preventDefault()   //form e data enter korle page ar reload nibe na
        dispatch({ //amra ay action er modhe 3 ta proparty pathachi (type amader must lagbe and data jodi akhadik lage tahole akhadik pathabo)
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length
        })
        // console.log(nameRef.current.value) //nameRef er vitor current name er akta jinish thake tar value
        nameRef.current.value = ''; //data form e enter korar por enter dele muche jabe data
    }
    return (
        <div>
            <h1>Patient Management: {state.patients.length} </h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}></input>
            </form>
            {
                state.patients.map(pt => <li
                    key={pt.id}
                    onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id })}
                >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagment;