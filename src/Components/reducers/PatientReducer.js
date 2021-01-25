
export const patientState = {
    patients: []

}

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name
            }
            const allPatients = [...state.patients, newPatient] //ager joto patient ace tader k cpy koelam ...state deya , tarpor new patient tak add kore delam   
            return { patients: allPatients };
        case 'REMOVE_PATIENT':
            const remaining = state.patients.filter(pt => pt.id !== action.id); //remaining kara hobe jara .state er modhe joto patient ace sobayk filterout korlam filter kader korbo? oy pt gulo jader pt.id ,action.id sathe milbe na (action er modhe jak remove korbo tar id pathay dece)

            const newState = {patients: remaining}
            return newState
        default:
            return state;
    }
}