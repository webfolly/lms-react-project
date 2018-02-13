import axios from 'axios';
//import index from 'index';

export function fetchLecturers() {
    return axios.get('/lecturer')
    .then(response => response.data )
}

export function  fetchLecturersByID(id) {
    return axios.get('/lecturer/1')
    .then(response => response.data.id )    
}
